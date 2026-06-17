/* ============================================================================
   APP — lógica compartilhada (você NÃO precisa editar este arquivo)
   Renderiza a home e as páginas de projeto a partir do PORTFOLIO (data.js).
   ============================================================================ */

/* ---------- utils ---------- */
function esc(t){return String(t==null?'':t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function initialOf(s){return (String(s||'?').trim()[0]||'?').toUpperCase();}
function btn(kind,href,label,ext){return `<a class="btn ${kind}" href="${esc(href)}"${ext?' target="_blank" rel="noopener"':''}>${esc(label)}</a>`;}
function normPlat(p){p=String(p).toLowerCase();
  if(p.includes('playstation')||/\bps\d?\b/.test(p)||p.includes('ps4')||p.includes('ps5'))return'PlayStation';
  if(p.includes('xbox'))return'Xbox';
  if(p.includes('switch')||p.includes('nintendo'))return'Switch';
  if(p.includes('android'))return'Android';
  if(p.includes('ios'))return'iOS';
  return'PC';}

/* ---------- placeholder de mídia ---------- */
function placeholder(title){
  const d=document.createElement('div');
  d.className='media-ph';
  d.innerHTML='<span class="ph-big">'+esc(initialOf(title))/*+'</span><span class="ph-cap mono">ADD IMAGES<br>images/…</span>'*/;
  return d;
}

/* ---------- carrossel (0 / 1 / N imagens) ---------- */
function buildCarousel(images,opts){
  opts=opts||{};
  const interval=opts.interval||4000, title=opts.title||'';
  const wrap=document.createElement('div'); wrap.className='carousel';

  if(!images||images.length===0){ wrap.appendChild(placeholder(title)); return wrap; }

  const track=document.createElement('div'); track.className='car-track';
  images.forEach((src,i)=>{
    const s=document.createElement('div'); s.className='car-slide'+(i===0?' active':'');
    const img=document.createElement('img'); img.src=src; img.loading='lazy';
    img.alt=(title?title+' — ':'')+'screenshot '+(i+1);
    s.appendChild(img); track.appendChild(s);
  });
  wrap.appendChild(track);
  if(images.length===1){ return wrap; }

  const slides=track.querySelectorAll('.car-slide');
  const dots=[];
  let idx=0, timer=null;
  function go(n){
    slides[idx].classList.remove('active');
    idx=(n+slides.length)%slides.length;
    slides[idx].classList.add('active');
    dots.forEach((d,i)=>d.classList.toggle('on',i===idx));
  }
  function play(){ timer=setInterval(()=>go(idx+1),interval); }
  function reset(){ if(timer)clearInterval(timer); play(); }

  const prev=document.createElement('button'); prev.className='car-btn prev'; prev.setAttribute('aria-label','Previous'); prev.innerHTML='&#8249;';
  const next=document.createElement('button'); next.className='car-btn next'; next.setAttribute('aria-label','Next'); next.innerHTML='&#8250;';
  prev.onclick=e=>{e.preventDefault();e.stopPropagation();go(idx-1);reset();};
  next.onclick=e=>{e.preventDefault();e.stopPropagation();go(idx+1);reset();};
  wrap.appendChild(prev); wrap.appendChild(next);

  const dotsWrap=document.createElement('div'); dotsWrap.className='car-dots';
  images.forEach((_,i)=>{
    const b=document.createElement('button'); b.className='car-dot'+(i===0?' on':''); b.setAttribute('aria-label','Slide '+(i+1));
    b.onclick=e=>{e.preventDefault();e.stopPropagation();go(i);reset();};
    dotsWrap.appendChild(b); dots.push(b);
  });
  wrap.appendChild(dotsWrap);

  play();
  wrap.addEventListener('mouseenter',()=>{if(timer)clearInterval(timer);});
  wrap.addEventListener('mouseleave',reset);
  return wrap;
}

/* ---------- mídia de destaque na página do projeto (vídeo OU imagem) ---------- */
function ytId(u){const m=String(u).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{6,})/);return m?m[1]:null;}
function buildHeroMedia(p){
  const wrap=document.createElement('div'); wrap.className='hero-media';
  if(p.video){
    const id=ytId(p.video);
    if(id){
      const ifr=document.createElement('iframe');
      ifr.src='https://www.youtube.com/embed/'+id+'?rel=0';
      ifr.title=p.title+' — video'; ifr.loading='lazy';
      ifr.allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      ifr.setAttribute('allowfullscreen','');
      wrap.classList.add('is-video'); wrap.appendChild(ifr); return wrap;
    }
    const v=document.createElement('video'); v.src=p.video; v.controls=true; v.setAttribute('playsinline','');
    wrap.classList.add('is-video'); wrap.appendChild(v); return wrap;
  }
  if(p.images&&p.images.length){
    const img=document.createElement('img'); img.src=p.images[0]; img.alt=p.title; wrap.appendChild(img); return wrap;
  }
  wrap.appendChild(placeholder(p.title)); return wrap;
}

/* ---------- reveal on scroll ---------- */
function revealInit(){
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.1});
  document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(Math.min(i,6)*55)+'ms';io.observe(el);});
}

/* ============================================================ HOME ======== */
function renderHome(){
  const P=PORTFOLIO, prof=P.profile, $=s=>document.querySelector(s);
  $('#brand').innerHTML='<b>//</b> '+esc(prof.name);
  $('#availability').textContent=prof.availability;

  const parts=prof.name.trim().split(' ');
  $('#heroName').innerHTML = parts.length>1
    ? esc(parts.slice(0,-1).join(' '))+' <span class="accent">'+esc(parts.slice(-1)[0])+'</span>'
    : '<span class="accent">'+esc(prof.name)+'</span>';
  $('#heroRole').innerHTML=prof.role.map(esc).join('<span class="sep">/</span>');
  $('#heroPitch').textContent=prof.pitch;

  const L=prof.links; let cta='';
  if(L.email)cta+=btn('primary','mailto:'+L.email,'Get in touch',false);
  cta+=btn('ghost','#fulldev','View work',false);
  if(L.github)cta+=btn('ghost',L.github,'GitHub ↗',true);
  if(L.linkedin)cta+=btn('ghost',L.linkedin,'LinkedIn ↗',true);
  if(L.resume)cta+=btn('ghost',L.resume,'Résumé ↗',true);
  $('#heroCta').innerHTML=cta;

  const fams=new Set(); P.projects.forEach(p=>p.platforms.forEach(x=>fams.add(normPlat(x))));
  $('#heroStats').innerHTML=[
    {n:prof.yearsExp+'<span class="accent">+</span>',c:'years in the industry'},
    {n:String(P.projects.length),c:'commercial projects'},
    {n:String(fams.size)+'<span class="accent">+</span>',c:'platforms'}
  ].map(s=>`<div class="stat"><div class="num">${s.n}</div><div class="cap">${s.c}</div></div>`).join('');

  buildSection('fulldev');
  buildSection('porting');

  // about
  $('#aboutText').innerHTML=prof.about.map(p=>`<p>${esc(p)}</p>`).join('');
  $('#factBox').innerHTML=[
    ['Role','Game Programmer'],['Experience',prof.yearsExp+'+ years'],
    ['Focus','Gameplay · Networking · Porting'],['Engine','Unreal Engine · Unity'],
    ['Location',prof.location],['Languages','Portuguese · English']
  ].map(r=>`<div class="m-row"><span class="m-k mono">${esc(r[0])}</span><span class="m-v">${esc(r[1])}</span></div>`).join('');

  $('#contactLine').innerHTML = L.email ? 'Let’s talk — <a href="mailto:'+esc(L.email)+'">'+esc(L.email)+'</a>' : 'Let’s talk';
  let cc=''; if(L.email)cc+=btn('primary','mailto:'+L.email,'Email me',false);
  if(L.linkedin)cc+=btn('ghost',L.linkedin,'LinkedIn ↗',true);
  if(L.github)cc+=btn('ghost',L.github,'GitHub ↗',true);
  $('#contactCta').innerHTML=cc;

  $('#footL').innerHTML='© '+new Date().getFullYear()+' '+esc(prof.name);
  $('#footR').textContent='Game Programmer · '+prof.location;
  revealInit();
}

function buildSection(key){
  const P=PORTFOLIO, sec=P.sections[key];
  document.querySelector('#'+key+'-head').innerHTML=
    `<span class="label">${esc(sec.label)}</span><h2>${esc(sec.title)}</h2><p>${esc(sec.blurb)}</p>`;
  const list=document.querySelector('#'+key+'-list');
  P.projects.filter(p=>p.category===key).forEach(p=>{
    const card=document.createElement('div'); card.className='card reveal'; card.tabIndex=0;
    const url='project.html?id='+encodeURIComponent(p.slug);
    card.addEventListener('click',()=>{location.href=url;});
    card.addEventListener('keydown',e=>{if(e.key==='Enter')location.href=url;});

    const media=document.createElement('div'); media.className='card-media';
    media.appendChild(buildCarousel(p.images,{interval:P.carouselIntervalMs,title:p.title}));
    card.appendChild(media);

    const body=document.createElement('div'); body.className='card-body';
    const plats=p.platforms.map(x=>`<span class="plat">${esc(x)}</span>`).join('');
    const hl=(p.highlights||[]).slice(0,4).map(h=>`<li>${esc(h)}</li>`).join('');
    body.innerHTML=`
      <div class="card-top">
        <span class="badge ${key}">${key==='porting'?'Porting':'Full Dev'}</span>
        <span class="status mono">${esc(p.status||'')}</span>
      </div>
      <h3>${esc(p.title)}</h3>
      <div class="role mono">${esc(p.role||'')}</div>
      <div class="plats">${plats}</div>
      <ul class="hl">${hl}</ul>
      <span class="view mono">View project →</span>`;
    card.appendChild(body);
    list.appendChild(card);
  });
}

/* ======================================================== PROJECT ======== */
function renderProject(){
  const P=PORTFOLIO, prof=P.profile, $=s=>document.querySelector(s);
  $('#brand').innerHTML='<b>//</b> '+esc(prof.name);
  const id=new URLSearchParams(location.search).get('id');
  const p=P.projects.find(x=>x.slug===id);
  const root=$('#project-root');

  if(!p){
    document.title='Not found · '+prof.name;
    root.innerHTML='<div class="notfound"><h1>Project not found</h1><p>This project doesn’t exist. <a href="index.html">← Back to all projects</a></p></div>';
    return;
  }
  document.title=p.title+' · '+prof.name;
  const catLabel=p.category==='porting'?'Porting & Platform Engineering':'Full-Cycle Development';
  const badge=p.category==='porting'?'Porting':'Full Dev';

  const platTags=p.platforms.map(x=>`<span class="plat">${esc(x)}</span>`).join('');
  const techTags=p.tech.map(x=>`<span class="chip">${esc(x)}</span>`).join('');
  const respList=(p.responsibilities||[]).map(r=>`<li>${esc(r)}</li>`).join('');
  const contribList=(p.contributions||[]).map(c=>`<li>${esc(c)}</li>`).join('');
  const hlList=(p.highlights||[]).map(h=>`<li>${esc(h)}</li>`).join('');
  const challenges=(p.challenges||[]).map(c=>`
    <div class="cs">
      <div class="cs-col"><span class="cs-k mono">Challenge</span><p>${esc(c.problem)}</p></div>
      <div class="cs-col sol"><span class="cs-k mono">Solution</span><p>${esc(c.solution)}</p></div>
    </div>`).join('');
  const linksHtml=(p.links&&p.links.length)
    ? p.links.map(l=>`<a class="btn ghost" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('') : '';

  const meta=[['Role',p.role],['Category',catLabel],['Status',p.status],['Developer',p.developer],['Publisher',p.publisher]]
    .filter(r=>r[1]).map(r=>`<div class="m-row"><span class="m-k mono">${esc(r[0])}</span><span class="m-v">${esc(r[1])}</span></div>`).join('');

  root.innerHTML=`
    <a class="back mono" href="index.html">← All projects</a>
    <header class="p-head reveal">
      <span class="badge ${p.category}">${badge}</span>
      <h1>${esc(p.title)}</h1>
      <p class="p-tagline">${esc(p.tagline||'')}</p>
      <div class="plats">${platTags}</div>
    </header>
    <div class="p-media reveal" id="p-media"></div>
    <div class="p-grid">
      <div class="p-main">
        <section class="reveal"><h2>Overview</h2><p>${esc(p.overview)}</p></section>
        ${contribList?`<section class="reveal"><h2>Key technical contributions</h2><ul class="bullets">${contribList}</ul></section>`:''}
        ${challenges?`<section class="reveal"><h2>Challenges &amp; solutions</h2><div class="cs-list">${challenges}</div></section>`:''}
        ${hlList?`<section class="reveal"><h2>Highlights</h2><ul class="hl big">${hlList}</ul></section>`:''}
      </div>
      <aside class="p-side reveal">
        <div class="m-box">${meta}</div>
        ${respList?`<div class="side-block"><h4 class="mono">Responsibilities</h4><ul class="bullets sm">${respList}</ul></div>`:''}
        <div class="side-block"><h4 class="mono">Technologies</h4><div class="chips">${techTags}</div></div>
        ${linksHtml?`<div class="side-block"><h4 class="mono">Links</h4><div class="side-links">${linksHtml}</div></div>`:''}
      </aside>
    </div>
    ${(p.images&&p.images.length)?`<section class="p-gallery reveal"><h2>Gallery</h2><div id="p-gallery"></div></section>`:''}
    <footer class="p-foot"><div class="wrap"><span class="mono">© ${new Date().getFullYear()} ${esc(prof.name)}</span><span class="mono"><a href="index.html">← All projects</a></span></div></footer>`;

  $('#p-media').appendChild(buildHeroMedia(p));
  if(p.images&&p.images.length){
    $('#p-gallery').appendChild(buildCarousel(p.images,{interval:P.carouselIntervalMs,title:p.title}));
  }
  revealInit();
}
