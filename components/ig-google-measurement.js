/* Session-only, consent-first Google
   attribution. No Google send, fetch override, native SDK fork or credentials.
   Browser choice records are not cryptographic/server attestations. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else {
    root.IG_GOOGLE_MEASUREMENT = factory();
    if (root.IG_GOOGLE_MEASUREMENT_CONFIG && root.IG_GOOGLE_MEASUREMENT_CONFIG.enabled === true)
      root.IG_GOOGLE_MEASUREMENT.install(root, document, root.IG_GOOGLE_MEASUREMENT_CONFIG);
  }
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';
  var KEY = 'ignite.google.measurement.session.v1';
  var MAX_AGE = 30 * 60 * 1000; // Proposed conservative cap; not genuine click age.
  var COPY = 'Help us measure our advertising. Allow Ignite to share your ad click ID and whether your inquiry is a business opportunity with Google. Optional.';
  var UTMS = ['utm_source','utm_medium','utm_campaign','utm_id','utm_content','utm_term'];
  var CLICK_KEYS = ['gclid','gbraid','wbraid'];
  function isPrivateKey(k) { return CLICK_KEYS.indexOf(k.toLowerCase()) !== -1 || /^ig_google_/i.test(k); }
  function clean(href) {
    var u = new URL(href);
    Array.from(u.searchParams.keys()).forEach(function (k) { if (isPrivateKey(k)) u.searchParams.delete(k); });
    // Fragments never belong in the native measurement source URL.
    var hash=u.hash;for(var j=0;j<3;j++){try{hash=decodeURIComponent(hash);}catch(_){break;}}
    if (/gclid|gbraid|wbraid|ig_google_/i.test(hash)) u.hash = '';
    return u.href;
  }
  function buyer(u, origin) {
    return u.origin === origin && u.protocol === new URL(origin).protocol && !u.username && !u.password &&
      (/^\/(?:services\/[a-z0-9-]+|contact|ignite-services|brand-ambassador-agency|fractional|work|portfolio\/[a-z0-9-]+|markets|cities\/[a-z0-9-]+|industries(?:\/[a-z0-9-]+)?)\/?$/.test(u.pathname)) &&
      !u.searchParams.getAll('role').some(function (r) { return /^(applicant|ambassador|talent|job)$/i.test(r); });
  }
  function marker(u) {
    var out = {};
    for (var i=0;i<UTMS.length;i++) {
      var all = u.searchParams.getAll(UTMS[i]);
      if (all.length>1 || all.length===1 && !/^[a-z0-9][a-z0-9 ._~+-]{0,159}$/i.test(all[0])) return null;
      if (all.length) out[UTMS[i]]=all[0];
    }
    return out;
  }
  function candidate(href, origin, now) {
    var u = new URL(href), keys = Array.from(u.searchParams.keys()).filter(function(k){return CLICK_KEYS.indexOf(k.toLowerCase())!==-1;});
    var campaign=marker(u);
    if (!buyer(u,origin) || keys.length!==1 || keys[0]!=='gclid' || !/^[A-Za-z0-9_-]{1,512}$/.test(u.searchParams.get('gclid')) || !campaign) return null;
    return {gclid:u.searchParams.get('gclid'), firstObservedAt:now, sourcePath:u.origin+u.pathname, campaign:campaign};
  }
  function create(c) {
    c=c||{};
    var record=null, pending=null, ready=c.enabled===true && c.uiScopeApproved===true && c.policyApproved===true &&
      typeof c.noticeVersion==='string' && !!c.noticeVersion && typeof c.policyVersion==='string' && !!c.policyVersion &&
      typeof c.now==='function' && typeof c.id==='function' && typeof c.href==='function' && c.storage && c.origin;
    function purge(){record=null;try{c.storage.removeItem(KEY);}catch(_){}}
    function valid(r,now) {
      if (!r || r.v!==1 || r.origin!==c.origin || r.noticeVersion!==c.noticeVersion || r.policyVersion!==c.policyVersion ||
          ['accepted','declined'].indexOf(r.choice)<0 || r.choiceSource!=='explicit-checkbox' ||
          !Number.isSafeInteger(r.choiceAt) || r.choiceAt<0 || r.choiceAt>now || now-r.choiceAt>=MAX_AGE ||
          !/^[A-Za-z0-9_-]{16,128}$/.test(r.choiceId)) return false;
      if (!r.click) return true;
      var s;try{s=new URL(r.click.sourcePath);}catch(_){return false;}
      return r.choice==='accepted' && /^[A-Za-z0-9_-]{1,512}$/.test(r.click.gclid) &&
        Number.isSafeInteger(r.click.firstObservedAt) && r.click.firstObservedAt>=0 && r.click.firstObservedAt<=r.choiceAt &&
        now-r.click.firstObservedAt<MAX_AGE && buyer(s,c.origin) && !s.search && !s.hash && r.click.campaign &&
        typeof r.click.campaign==='object' && !Array.isArray(r.click.campaign) &&
        Object.keys(r.click.campaign).every(function(k){return UTMS.indexOf(k)!==-1 && typeof r.click.campaign[k]==='string';});
    }
    function refresh() {
      if (!ready) {purge();return null;}
      var now=c.now(), u=new URL(c.href());
      if (!Number.isSafeInteger(now) || now<0 || !buyer(u,c.origin)) {purge();pending=null;return null;}
      if (record && !valid(record,now)) purge();
      if (pending && (now<pending.firstObservedAt || now-pending.firstObservedAt>=MAX_AGE)) pending=null;
      return record;
    }
    if (ready) {
      try {
        var now=c.now(), u=new URL(c.href()), saved=JSON.parse(c.storage.getItem(KEY)||'null');
        if (buyer(u,c.origin) && valid(saved,now)) record=saved; else purge();
        var incoming=candidate(u.href,c.origin,now), currentMarker=marker(u);
        var allClicks=Array.from(u.searchParams.keys()).filter(function(k){return CLICK_KEYS.indexOf(k.toLowerCase())!==-1;});
        if (allClicks.length && !incoming || currentMarker===null) {purge();pending=null;}
        else if (incoming) {
          // A new click requires a new explicit choice; never renew consent/age silently.
          if (!record || !record.click || record.click.gclid!==incoming.gclid) {purge();pending=incoming;}
        } else if (record && record.click && Object.keys(currentMarker).length && JSON.stringify(currentMarker)!==JSON.stringify(record.click.campaign)) purge();
      } catch (_) {purge();ready=false;}
    }
    function choose(allowed,event) {
      if (!ready || !event || event.isTrusted!==true || event.type!=='change' || !event.target || event.target.type!=='checkbox' ||
          event.target.required || event.target.disabled || event.target.checked!==allowed) return false;
      refresh();
      if(!buyer(new URL(c.href()),c.origin))return false;
      var now=c.now(), id=c.id();
      if (!Number.isSafeInteger(now)||now<0||!/^[A-Za-z0-9_-]{16,128}$/.test(id)) return false;
      var next={v:1,origin:c.origin,choice:allowed?'accepted':'declined',choiceAt:now,choiceId:id,
        choiceSource:'explicit-checkbox',noticeVersion:c.noticeVersion,policyVersion:c.policyVersion};
      if (allowed && pending) next.click=pending;
      else if (allowed && record && record.choice==='accepted' && record.click) next.click=record.click;
      if (!allowed) pending=null;
      try {c.storage.setItem(KEY,JSON.stringify(next));record=next;return true;}catch(_){purge();pending=null;return false;}
    }
    function fields(){
      var r=refresh();
      if (!r || c.nativeCaptureVerified!==true) return {};
      var result={ig_google_choice:r.choice,ig_google_choice_at:new Date(r.choiceAt).toISOString(),ig_google_choice_id:r.choiceId,
        ig_google_notice_version:r.noticeVersion,ig_google_policy_version:r.policyVersion};
      if (r.choice==='accepted' && r.click) {
        result.gclid=r.click.gclid;
        result.ig_google_click_observed_at=new Date(r.click.firstObservedAt).toISOString();
        result.ig_google_click_source=r.click.sourcePath;
      }
      return result;
    }
    return {choose:choose, fields:fields, current:function(){var r=refresh();return {choice:r?r.choice:'unanswered',hasClick:!!(r&&r.click),canOffer:!!pending||!!r};},
      nativeUrl:function(href,checked){var u=new URL(clean(href)),state=refresh();
        if (buyer(u,c.origin)&&/^\/contact\/?$/.test(u.pathname)&&state&&
            (checked===true&&state.choice==='accepted'||checked===false&&state.choice==='declined'))
          Object.entries(fields()).forEach(function(kv){u.searchParams.set(kv[0],kv[1]);});return u.href;},
      revoke:function(){purge();pending=null;}, storageKey:KEY};
  }
  function install(w,d,cfg) {
    var incoming=w.location.href, storage;
    try {storage=w.sessionStorage;} catch (_) {storage={getItem:function(){throw new Error('Storage unavailable');},setItem:function(){throw new Error('Storage unavailable');},removeItem:function(){}};}
    var session=create(Object.assign({},cfg,{origin:cfg.origin||w.location.origin,
      now:function(){return Date.now();},href:function(){return w.location.href;},id:function(){return w.crypto.randomUUID();},storage:storage}));
    function scrub(){var url=clean(w.location.href);if(url!==w.location.href)w.history.replaceState(w.history.state,'',url);}
    scrub(); // Must run in the first HEAD script, before GA and Close initialization.
    var bound=new WeakSet(), widgets=[];
    function update(){
      var state=session.current();widgets=widgets.filter(function(input){return input.isConnected;});
      widgets.forEach(function(input){input.checked=state.choice==='accepted';});
      // Default/current address always clean; expose accepted data only during a native submit.
      scrub();
    }
    function listen(input){if(bound.has(input))return;bound.add(input);widgets.push(input);input.required=false;
      input.checked=session.current().choice==='accepted';
      input.addEventListener('change',function(e){try{session.choose(input.checked,e);}finally{update();}});
    }
    function widget(container){
      if(container.querySelector('[data-ig-google-input]'))return;
      var wrap=d.createElement('div');wrap.setAttribute('data-ig-google-widget','');
      wrap.style.cssText='margin:14px 0;font:13px/1.5 Inter,system-ui,sans-serif;color:inherit;max-width:620px';
      var label=d.createElement('label');label.style.cssText='display:flex;align-items:flex-start;gap:10px;cursor:pointer';
      var input=d.createElement('input');input.type='checkbox';input.setAttribute('data-ig-google-input','');input.style.cssText='margin-top:3px;min-width:16px;width:16px;height:16px';
      var text=d.createElement('span');text.textContent=COPY;label.append(input,text);wrap.append(label);
      var policy=d.createElement('a');policy.href='/privacy#website-advertising-measurement';policy.textContent='Privacy policy';policy.style.cssText='display:inline-block;margin:6px 0 0 26px;color:inherit;text-decoration:underline';wrap.append(policy);container.append(wrap);listen(input);
    }
    function contact(host){
      if(host.getAttribute('id')!==cfg.formId || !host.shadowRoot)return;
      var form=host.shadowRoot.querySelector('form');if(!form)return;
      // Prefer a native, published optional Checkbox field so the response persists
      // alongside params. Do not inject unnamed controls into vendor form state.
      var inputs=Array.from(form.elements).filter(function(el){return el.type==='checkbox'&&el.name===cfg.nativeCheckboxName;});
      if(inputs.length!==1 || inputs[0].required || inputs[0].disabled)return;
      var input=inputs[0];listen(input);
      if(bound.has(form))return;bound.add(form);
      form.addEventListener('submit',function(){
        scrub();
        var safe=w.location.href;
        var actual=form.elements.namedItem(cfg.nativeCheckboxName);
        var checked=!!(actual&&actual.type==='checkbox'&&actual.checked===true&&!actual.disabled&&!actual.required);
        var prepared=session.nativeUrl(safe,checked);
        if(prepared!==safe)w.history.replaceState(w.history.state,'',prepared);
        // The observed standard SDK serializes synchronously before its first await.
        // Use a task (not a microtask) so native event dispatch finishes first.
        // This bounded URL handoff must be verified against the actual SDK in staging.
        w.setTimeout(scrub,0);
      },true);
    }
    function mount(){
      if(!buyer(new URL(w.location.href),cfg.origin||w.location.origin))return;
      if(!/^\/contact\/?$/.test(w.location.pathname)&&cfg.serviceMountSelector&&session.current().canOffer)
        d.querySelectorAll(cfg.serviceMountSelector).forEach(function(el){
          if(!el.querySelector('[data-ig-google-choice]')){
            var slot=d.createElement('div');slot.setAttribute('data-ig-google-choice','');
            var quote=Array.from(el.querySelectorAll('a[href]')).find(function(a){try{return new URL(a.href,w.location.href).pathname==='/contact'&&a.getAttribute('data-ig-audience')!=='applicant';}catch(_){return false;}});
            if(quote&&quote.parentElement===el)el.insertBefore(slot,quote);
            else if(quote&&quote.parentElement.parentElement===el)el.insertBefore(slot,quote.parentElement);
            else el.append(slot);
          }
        });
      d.querySelectorAll('[data-ig-google-choice]').forEach(function(el){if(session.current().canOffer)widget(el);});
      d.querySelectorAll('close-form').forEach(function(host){
        contact(host);
        if(host.shadowRoot&&!bound.has(host.shadowRoot)){bound.add(host.shadowRoot);new w.MutationObserver(function(){contact(host);}).observe(host.shadowRoot,{childList:true,subtree:true});}
      });
    }
    if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
    new w.MutationObserver(mount).observe(d.documentElement,{childList:true,subtree:true});
    w.setInterval(update,5000);w.addEventListener('pagehide',scrub);w.addEventListener('pageshow',update);
    // Safe values for the existing GA configuration, not a consent-mode grant.
    var page=new URL(clean(incoming));page.searchParams.delete('oppref');page.hash='';
    w.IG_GOOGLE_SAFE_PAGE_LOCATION=page.href;
    try{var ref=new URL(d.referrer);w.IG_GOOGLE_SAFE_PAGE_REFERRER=ref.origin+ref.pathname;}catch(_){w.IG_GOOGLE_SAFE_PAGE_REFERRER='';}
    return {session:session,scrub:scrub};
  }
  return {create:create,install:install,cleanUrl:clean,copy:COPY,storageKey:KEY,maxAgeMs:MAX_AGE};
});
