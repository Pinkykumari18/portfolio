/* ===== EDIT THIS BLOCK: everything on the site comes from here ===== */
const CONFIG = {
  name: 'Pinky Kumari Bind',
  availability: 'Available for freelance projects',
  intro: 'I build fast, secure e-commerce websites and PHP web apps that look great on every phone, so your visitors become paying customers. Clear communication, honest timelines, and a site you can be proud of.',
  about: 'I am a full-stack web developer and I currently work as a PHP developer, with 1 year of hands-on experience building e-commerce websites. I handle everything: product catalog, cart, checkout, payment gateway, admin panel and a mobile-friendly design. I care about the details clients notice: loading speed, clean design and a site that never breaks on mobile.',
  roles: ['e-commerce websites', 'PHP web applications', 'payment-ready online stores', 'responsive business sites'],
  email: 'bindpinky1809@gmail.com',
  whatsapp: '917304303393',                   // your number with country code, digits only, e.g. 919876543210
  web3formsKey: '',               // free key from web3forms.com; leave empty to use email fallback
  socials: { Email: 'mailto:bindpinky1809@gmail.com' },   // add GitHub, LinkedIn, WhatsApp links here
  stats: [[4, 'Projects completed'], [1, 'Year of professional experience'], [100, '% mobile responsive'], [24, 'Hour reply time']],
  stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'AJAX', 'HTML5', 'CSS3', 'E-commerce', 'Payment gateways', 'REST APIs', 'Git'],
  skills: [['PHP', 85], ['HTML & CSS', 90], ['JavaScript & AJAX', 75], ['MySQL', 80], ['Laravel', 70]],
  projects: [ // cat: web | store | app. Replace with your real projects and live links.
    { title: 'E-commerce store', cat: 'store', desc: 'Online store with product catalog, cart, checkout and payment gateway.', tags: ['PHP', 'MySQL', 'AJAX'], url: '#' },
    { title: 'Store admin panel', cat: 'app', desc: 'Manage products, orders and customers from one dashboard.', tags: ['PHP', 'MySQL'], url: '#' },
    { title: 'Business website', cat: 'web', desc: 'Responsive company website with an enquiry form.', tags: ['HTML', 'CSS', 'JS'], url: '#' },
    { title: 'Mobile-first shop UI', cat: 'store', desc: 'Fast, touch-friendly shopping experience that works on every screen.', tags: ['CSS', 'JavaScript'], url: '#' },
  ],
  services: [['🛒', 'E-commerce stores', 'Catalog, cart, checkout and payment gateway, ready to sell.'],
    ['🌐', 'Business websites', 'Fast, SEO-ready sites that make your company look trusted.'],
    ['⚙️', 'Admin panels & web apps', 'Manage products, orders, users and reports in one place.'],
    ['🔧', 'Fixes & speed-ups', 'Broken layout or slow pages? I find the cause and fix it.']],
  process: [['Talk', 'You share the goal. I reply with a plan and a fixed quote.'], ['Design', 'You approve the look on mobile and desktop first.'],
    ['Build', 'Regular demos so you always see progress.'], ['Launch', 'Deployment, testing and 30 days of free support.']],
  pricing: { cur: '₹', // starter prices: raise them as you gain experience
    types: { landing: ['Landing page', 5000, 0, 1], business: ['Business website', 10000, 1500, 2], store: ['E-commerce store', 25000, 1500, 4], app: ['Web app / dashboard', 30000, 2000, 5] },
    extras: { payment: ['Payment gateway', 4000, 1], admin: ['Admin panel', 7000, 1], auth: ['User login', 3000, 1], seo: ['SEO setup', 3000, 0] } },
};
/* ===== end of config ===== */

const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const C = CONFIG;
$$('[data-cfg]').forEach(el => el.textContent = C[el.dataset.cfg]);
$('#yr').textContent = new Date().getFullYear();
document.title = `${C.name} | Full-stack PHP Developer`;
const links = o => Object.entries(o).map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join('');
if (C.whatsapp) { C.socials.WhatsApp = 'https://wa.me/' + C.whatsapp; const w = $('#wa'); w.hidden = false; w.href = `https://wa.me/${C.whatsapp}?text=${encodeURIComponent('Hi Pinky, I saw your portfolio and would like to discuss a project.')}`; }
$('#socials').innerHTML = links(C.socials); $('#footLinks').innerHTML = links(C.socials);
$('#marquee').innerHTML = [...C.stack, ...C.stack].map(s => `<span>${s}</span>`).join('');
$('#stats').innerHTML = C.stats.map(([v, l]) => `<div class="reveal"><strong data-count="${v}">0</strong><span>${l}</span></div>`).join('');
$('#skills').innerHTML = C.skills.map(([n, v]) => `<div class="skill"><div><span>${n}</span><span>${v}%</span></div><div class="bar"><i data-w="${v}"></i></div></div>`).join('');
$('#services-grid').innerHTML = C.services.map(s => `<article class="card reveal"><span class="ico">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join('');
$('#steps').innerHTML = C.process.map(s => `<li class="reveal"><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join('');

// Typing effect
let ri = 0, ci = 0, del = false; const typed = $('#typed');
(function type() {
  const w = C.roles[ri];
  typed.textContent = w.slice(0, del ? --ci : ++ci);
  let t = del ? 40 : 90;
  if (!del && ci === w.length) { del = true; t = 1500; }
  else if (del && ci === 0) { del = false; ri = (ri + 1) % C.roles.length; t = 400; }
  setTimeout(type, t);
})();

// Projects with filter and 3D tilt
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const cats = { all: 'All', web: 'Websites', store: 'Stores', app: 'Web apps' };
$('#filters').innerHTML = Object.entries(cats).map(([k, v]) => `<button data-c="${k}" class="${k === 'all' ? 'on' : ''}">${v}</button>`).join('');
function showProjects(c = 'all') {
  $('#projects').innerHTML = C.projects.filter(p => c === 'all' || p.cat === c).map((p, i) =>
    `<a class="card in" style="animation-delay:${i * .08}s" href="${esc(p.url)}" target="_blank" rel="noopener"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div></a>`).join('');
  tilt();
}
function tilt() {
  if (matchMedia('(hover:none)').matches) return;
  $$('#projects .card, #services-grid .card').forEach(c => {
    c.onmousemove = e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(8px)`; };
    c.onmouseleave = () => c.style.transform = '';
  });
}
$('#filters').onclick = e => { const b = e.target.closest('button'); if (!b) return; $$('#filters button').forEach(x => x.classList.remove('on')); b.classList.add('on'); showProjects(b.dataset.c); };
showProjects();

// Scroll: reveal, counters, skill bars, timeline, progress, active link, back-to-top
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; const el = e.target; io.unobserve(el); el.classList.add('in');
  if (el.classList.contains('card')) setTimeout(() => { el.classList.remove('reveal'); el.style.transitionDelay = ''; }, 1800);
  el.querySelectorAll('[data-w]').forEach(b => b.style.width = b.dataset.w + '%');
  const n = el.querySelector('[data-count]');
  if (n) { const end = +n.dataset.count, t0 = performance.now(); (function k(t) { const p = Math.min((t - t0) / 1400, 1); n.textContent = Math.round(end * (1 - (1 - p) ** 3)); if (p < 1) requestAnimationFrame(k); else n.textContent = end + (end >= 10 ? '+' : ''); })(t0); }
  if (el.parentElement.id === 'steps') $('#steps').style.setProperty('--w', '100%');
}), { threshold: .25 });
$$('.reveal').forEach(el => io.observe(el));
$$('#services-grid .card, #steps li, #stats > div').forEach((el, i) => el.style.transitionDelay = i * .12 + 's');
const secs = $$('main section[id]'), navA = $$('.nav nav a:not(.btn)');
addEventListener('scroll', () => {
  const h = document.documentElement, y = scrollY;
  $('.progress').style.width = (y / (h.scrollHeight - innerHeight) * 100) + '%';
  $('.top').classList.toggle('show', y > 600);
  const cur = secs.filter(s => s.offsetTop - 120 <= y).pop();
  navA.forEach(a => a.classList.toggle('on', cur && a.hash === '#' + cur.id));
}, { passive: true });
$('.top').onclick = () => scrollTo({ top: 0 });
addEventListener('pointermove', e => { const g = $('.glow'); g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px'; });

// Dark / light theme with circular reveal
const root = document.documentElement, calm = matchMedia('(prefers-reduced-motion:reduce)').matches;
const setTheme = t => { root.dataset.theme = t; try { localStorage.setItem('theme', t); } catch {} };
$('.theme').onclick = e => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  if (!document.startViewTransition || calm) return setTheme(next);
  const x = e.clientX, y = e.clientY, r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.startViewTransition(() => setTheme(next)).ready.then(() => root.animate(
    { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
    { duration: 700, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }));
};

// Floating particle network (colors follow the theme)
if (!calm) {
  const cv = $('#fx'), cx = cv.getContext('2d'); let W, H, pts = [];
  const size = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; pts = Array.from({ length: Math.min(60, innerWidth / 18 | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4 })); };
  size(); addEventListener('resize', size);
  (function draw() {
    cx.clearRect(0, 0, W, H); const col = root.dataset.theme === 'light' ? '91,70,160' : '183,148,255';
    pts.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
      cx.fillStyle = `rgba(${col},.7)`; cx.beginPath(); cx.arc(p.x, p.y, 2, 0, 7); cx.fill();
      for (let j = i + 1; j < pts.length; j++) { const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y); if (d < 120) { cx.strokeStyle = `rgba(${col},${.25 * (1 - d / 120)})`; cx.beginPath(); cx.moveTo(p.x, p.y); cx.lineTo(q.x, q.y); cx.stroke(); } }
    });
    requestAnimationFrame(draw);
  })();
}

// Button ripple + magnetic pull, hero photo parallax
$$('.btn').forEach(b => {
  b.addEventListener('click', e => { const r = b.getBoundingClientRect(), s = document.createElement('span'); s.className = 'ripple'; s.style.left = e.clientX - r.left + 'px'; s.style.top = e.clientY - r.top + 'px'; b.append(s); setTimeout(() => s.remove(), 650); });
  if (!matchMedia('(hover:none)').matches) {
    b.addEventListener('mousemove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .2}px,${(e.clientY - r.top - r.height / 2) * .3}px)`; });
    b.addEventListener('mouseleave', () => b.style.transform = '');
  }
});
if (!calm && !matchMedia('(hover:none)').matches) addEventListener('pointermove', e => {
  const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
  $('.photo img').style.translate = `${x * 14}px ${y * 14}px`; $('.blob').style.translate = `${-x * 22}px ${-y * 22}px`;
  $$('.chip').forEach((c, i) => c.style.translate = `${x * (10 + i * 8)}px ${y * (10 + i * 8)}px`);
});

// Mobile menu
const burger = $('.burger'), menu = $('.nav nav');
burger.onclick = () => burger.setAttribute('aria-expanded', menu.classList.toggle('open'));
menu.onclick = e => { if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); } };

// Estimate calculator
const P = C.pricing, f = n => P.cur + n.toLocaleString('en-IN'), est = $('#estForm');
$('#estType').innerHTML = Object.entries(P.types).map(([k, t]) => `<option value="${k}">${t[0]}</option>`).join('');
$('#extras').innerHTML = Object.entries(P.extras).map(([k, e]) => `<label class="chk"><input type="checkbox" value="${k}"> ${e[0]}</label>`).join('');
let summary = '';
function calc() {
  const t = P.types[est.type.value], pages = +est.pages.value; $('#pagesOut').textContent = pages;
  let price = t[1] + Math.max(0, pages - 1) * t[2], weeks = t[3] + Math.floor(pages / 8);
  $$('#extras input:checked').forEach(c => { price += P.extras[c.value][1]; weeks += P.extras[c.value][2]; });
  const max = Math.round(price * 1.25 / 1000) * 1000;
  $('#estResult').innerHTML = `<strong>${f(price)} - ${f(max)}</strong>Delivered in about ${weeks} week${weeks > 1 ? 's' : ''}`;
  summary = `${t[0]}, ${pages} pages, ${f(price)} - ${f(max)}, ~${weeks} weeks`;
}
est.addEventListener('input', calc); calc();
$('#useEst').onclick = () => { const m = $('#contactForm textarea'); if (!m.value) m.value = `Hi, I'd like a quote. My rough scope: ${summary}.\n`; };

// Contact form: sends straight to your inbox (FormSubmit by default, Web3Forms if a key is set)
$('#contactForm').onsubmit = async e => {
  e.preventDefault(); const form = e.target, msg = $('#formMsg'), btn = form.querySelector('button'); msg.className = '';
  const d = Object.fromEntries(new FormData(form)); delete d.botcheck;
  btn.disabled = true; msg.textContent = 'Sending...';
  try {
    const url = C.web3formsKey ? 'https://api.web3forms.com/submit' : 'https://formsubmit.co/ajax/' + C.email;
    const extra = C.web3formsKey ? { access_key: C.web3formsKey, subject: 'New portfolio inquiry' } : { _subject: 'New portfolio inquiry from ' + d.name, _template: 'table', _captcha: 'false' };
    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...d, ...extra }) });
    const j = await r.json();
    if (!r.ok || j.success === false || j.success === 'false') throw 0;
    msg.textContent = `Thanks ${d.name}, your message is sent. I'll reply within 24 hours.`; form.reset();
  } catch {
    msg.className = 'err';
    msg.innerHTML = `Could not send right now. <a href="mailto:${C.email}?subject=Project%20inquiry&body=${encodeURIComponent(d.message || '')}">Email me directly</a>.`;
  }
  btn.disabled = false;
};

// WhatsApp: opens your chat with the form details pre-filled
if (C.whatsapp) {
  const b = $('#waSend'), form = $('#contactForm'); b.hidden = false;
  b.onclick = () => {
    if (!form.reportValidity()) return;
    const d = Object.fromEntries(new FormData(form));
    open(`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(`Hi Pinky, I'm ${d.name} (${d.email}).\n${d.message}`)}`, '_blank');
  };
}
