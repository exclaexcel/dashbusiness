/* ============================================================
   Dash Business — main.js
   Baseado no portfólio de Dany Pinheiro. Dark mode fixo.
   ============================================================ */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function smoothScrollBehavior() {
  return document.documentElement.classList.contains('reduce-motion') ? 'auto' : 'smooth';
}

/* ---------- NAV ------------------------------------------- */
function initNav() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const mobile    = document.getElementById('nav-mobile');

  function setMobileOpen(isOpen) {
    if (!mobile || !hamburger) return;
    mobile.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    hamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  }

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  if (hamburger && mobile) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.addEventListener('click', () => {
      setMobileOpen(!mobile.classList.contains('open'));
    });
    mobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setMobileOpen(false));
    });
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape' || !mobile.classList.contains('open')) return;
      setMobileOpen(false);
    });
  }
}

/* ---------- NAV ACTIVE LINK ON SCROLL --------------------- */
function initNavActiveScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  if (!navLinks.length || !sections.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  });
}

/* ---------- SCROLL ANIMATIONS ----------------------------- */
function initScrollAnimations() {
  const targets = document.querySelectorAll('.fade-in');
  if (document.documentElement.classList.contains('reduce-motion')) {
    targets.forEach(t => t.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.children];
        const delay    = siblings.indexOf(entry.target) * 80;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(t => observer.observe(t));
}

/* ---------- FEATURED PROJECTS ----------------------------- */
function initFeaturedProjects() {
  if (typeof renderProjectCards === 'undefined') return;
  renderProjectCards('featured-projects-grid', { featured: true, limit: 4, imgBase: '' });
}

/* ---------- HERO ENTRANCE ANIMATION ----------------------- */
function initHeroAnimation() {
  if (document.documentElement.classList.contains('reduce-motion')) return;
  const items = document.querySelectorAll(
    '.hero-greeting, .hero-name, .hero-title, .hero-phrase, .hero-ctas, .hero-visual-wrap'
  );
  items.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`;
    setTimeout(() => {
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    }, 100 + i * 100);
  });
}

/* ---------- SMOOTH SCROLL --------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const sel = a.getAttribute('href');
      const target = document.querySelector(sel);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: smoothScrollBehavior() });
        if (sel === '#main-content' && target.getAttribute('tabindex') === '-1') {
          target.focus({ preventScroll: true });
        }
      }
    });
  });
}

/* ---------- BACK TO TOP ----------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: smoothScrollBehavior() }));
}

/* ---------- SPECIALIST BIO MODAL ----------------------------- */
const SPECIALIST_BIOS = {
  juliano: {
    name: 'Juliano Neves',
    title: 'Consultor em dados e soluções analíticas',
    bio: 'Juliano Neves é consultor em soluções analíticas e inteligência de negócio, com forte atuação em desenvolvimento de sistemas de apoio à tomada de decisão. Finalista do Campeonato Brasileiro de Excel em 2024 e 2025, possui sólida experiência em análise financeira (FP&A), automação, modelagem de dados e integração com bancos de dados.\n\nAtua no desenvolvimento de soluções personalizadas que organizam, analisam e transformam dados em informações estratégicas para empresas de diferentes portes e segmentos. Possui ampla experiência em projetos analíticos e automação, sempre com foco em eficiência, clareza e impacto nas decisões.\n\nÉ engenheiro civil, com MBA em Gestão Empresarial, e acredita que dados bem estruturados e analisados são fundamentais para uma gestão mais inteligente e sustentável.',
    quote: 'Defensor do uso inteligente da tecnologia como meio — e não como fim — para transformar dados em clareza, estratégia e resultados.'
  },
  daniely: {
    name: 'Daniely Pinheiro',
    title: 'Consultora em dados, automação e inteligência operacional',
    bio: 'Daniely Pinheiro atua como consultora em dados, automação e inteligência operacional, com foco em transformar informações complexas em soluções claras e estratégicas para a gestão. Possui sólida experiência no desenvolvimento de sistemas analíticos, dashboards e processos automatizados voltados ao apoio à tomada de decisão.\n\nÉ formada em Administração e Ciências Contábeis, com pós-graduação em Controladoria e Finanças Empresariais e Executive MBA em Análises de Dados, unindo visão estratégica, profunda compreensão do negócio e forte capacidade analítica para apoiar empresas na melhoria de controles, eficiência operacional e leitura de resultados.\n\nAtua no desenvolvimento de soluções personalizadas, sempre priorizando clareza, usabilidade e impacto real nas decisões do negócio.',
    quote: 'Acredita que dados só fazem sentido quando geram clareza, confiança e decisões melhores.'
  },
  roseane: {
    name: 'Roseane Crispim',
    title: 'Consultora nas áreas administrativa, financeira e analítica',
    bio: 'Roseane Crispim atua como consultora nas áreas administrativa, financeira e analítica, com ampla experiência em rotinas operacionais, vendas, atendimento ao cliente e controles de negócio. Possui vivência em diferentes setores, como comércio varejista e atacadista, construção civil e seguradoras, o que lhe proporciona uma visão prática e abrangente dos desafios operacionais das empresas.\n\nÉ formada em Ciências Contábeis e Segurança do Trabalho, com Executive MBA em Análise de Dados, unindo conhecimento técnico, organização da informação e visão analítica aplicada ao negócio. Atua na organização e análise de dados, controle de estoques, gestão de compras, acompanhamento de vendas e controle de pagamentos, apoiando a tomada de decisão com informações claras, confiáveis e estruturadas.\n\nCom perfil comunicativo e foco na qualidade, contribui para o desenvolvimento de soluções que fortalecem processos, controles e a eficiência na gestão.',
    quote: 'Focada em transformar rotinas operacionais em informações claras para apoiar decisões melhores.'
  }
};

function initSpecialistBios() {
  const buttons = document.querySelectorAll('.specialist-btn-bio');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.specialist-card');
      const specialist = card.dataset.specialist;
      if (specialist && SPECIALIST_BIOS[specialist]) {
        openBioModal(SPECIALIST_BIOS[specialist]);
      }
    });
  });
}

let _bioModalEscapeBound = false;
let _bioModalLastFocus = null;

function bioModalOnEscape(e) {
  if (e.key !== 'Escape') return;
  const modal = document.getElementById('bio-modal');
  if (modal && modal.classList.contains('open')) closeBioModal();
}

function bioModalOnKeydown(e) {
  const modal = document.getElementById('bio-modal');
  if (!modal || !modal.classList.contains('open') || e.key !== 'Tab') return;
  const sel = 'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const nodes = [...modal.querySelectorAll(sel)].filter(el => el.offsetParent !== null || el === document.activeElement);
  if (nodes.length < 2) {
    e.preventDefault();
    const only = nodes[0] || modal.querySelector('.bio-modal-close');
    if (only) only.focus();
    return;
  }
  const first = nodes[0];
  const last = nodes[nodes.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function ensureBioModalEscape() {
  if (_bioModalEscapeBound) return;
  document.addEventListener('keydown', bioModalOnEscape);
  _bioModalEscapeBound = true;
}

function openBioModal(bio) {
  ensureBioModalEscape();
  let modal = document.getElementById('bio-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'bio-modal';
    modal.className = 'bio-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'bio-modal-name');
    modal.innerHTML = `
      <div class="bio-modal-backdrop"></div>
      <div class="bio-modal-content">
        <button type="button" class="bio-modal-close" aria-label="Fechar">&times;</button>
        <div class="bio-modal-body">
          <h3 id="bio-modal-name" class="bio-modal-name"></h3>
          <p class="bio-modal-title"></p>
          <div class="bio-modal-text"></div>
          <blockquote class="bio-modal-quote"></blockquote>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.bio-modal-close').addEventListener('click', closeBioModal);
    modal.querySelector('.bio-modal-backdrop').addEventListener('click', closeBioModal);
    modal.addEventListener('keydown', bioModalOnKeydown);
  }

  _bioModalLastFocus = document.activeElement;

  modal.querySelector('.bio-modal-name').textContent = bio.name;
  modal.querySelector('.bio-modal-title').textContent = bio.title;
  modal.querySelector('.bio-modal-text').innerHTML = bio.bio.split('\n\n').map(p => `<p>${escapeHtml(p)}</p>`).join('');
  modal.querySelector('.bio-modal-quote').textContent = bio.quote;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  const closeBtn = modal.querySelector('.bio-modal-close');
  requestAnimationFrame(() => closeBtn && closeBtn.focus());
}

function closeBioModal() {
  const modal = document.getElementById('bio-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  const prev = _bioModalLastFocus;
  _bioModalLastFocus = null;
  if (prev && typeof prev.focus === 'function') {
    requestAnimationFrame(() => prev.focus());
  }
}

/* ---------- BOOT ------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('reduce-motion');
  }
  initNav();
  initNavActiveScroll();
  initBackToTop();
  initHeroAnimation();
  initFeaturedProjects();
  initScrollAnimations();
  initSmoothScroll();
  initSpecialistBios();
});
