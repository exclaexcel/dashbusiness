/* ============================================================
   DashBusiness — projects.js
   Fonte única de dados dos projetos.
   Usado por: index.html (destaques), projetos/index.html (biblioteca),
              projeto.html?id= / projetos/projeto.html?id= conforme a página atual (file:// ou http)
   ============================================================ */

const DB_PROJECTS = [
  {
    id: 'sistema-gestao-clinica',
    title: 'Sistema Integrado de Gestão Clínica',
    description: 'Solução completa para gestão clínica — controle de pacientes, prontuários, faturamento e indicadores operacionais integrados.',
    category: 'controle-operacional',
    tags: ['Excel', 'Access', 'VBA'],
    image: 'assets/img/projetos/sistema-gestao-clinica.jpg',
    images: [
      'assets/img/projetos/Sistema Integrado de Gestão Clínica.jpg',
      'assets/img/projetos/Sistema Integrado de Gestão Clínica (1).jpg',
      'assets/img/projetos/Sistema Integrado de Gestão Clínica (2).jpg',
      'assets/img/projetos/Sistema Integrado de Gestão Clínica (3).jpg'
    ],
    featured: false,
    status: 'available',
    emoji: '🏥',
    tools: ['Excel', 'VBA', 'Microsoft Access'],
    contextNote: 'Clínica de ortopedia — 10+ médicos, 5 secretárias',
    context: 'Clínica de ortopedia com mais de 10 médicos e 5 secretárias — operação descentralizada com fluxo diário na clínica e atendimentos em hospitais.',
    problem: 'A rotina dependia de controles dispersos entre setores, o que dificultava o rastreamento das informações, aumentava a chance de erros no faturamento e reduzia a capacidade de gestão sobre a operação e o desempenho da clínica.',
    before: 'Controles dispersos entre setores, cadastros em papel, faturamento manual, falta de visibilidade sobre indicadores operacionais e desempenho da clínica.',
    after: 'Sistema integrado com cadastro centralizado de pacientes, prontuários organizados, agenda unificada, faturamento automático com validação e painel gerencial com indicadores em tempo real.',
    solutionList: [
      'Cadastro centralizado de pacientes e histórico/prontuário.',
      'Controle de agenda integrado à operação da clínica e dos hospitais.',
      'Faturamento com validação automática dos atendimentos.',
      'Painel gerencial com indicadores atualizados por médico e unidade.'
    ],
    resultsList: [
      '✅ Maior controle, organização e rastreabilidade das informações clínicas.',
      '💰 Redução de falhas operacionais no faturamento.',
      '📊 Dashboards integrados para validação dos atendimentos (clínica e hospitais) por médico e faturamento.'
    ],
    confidential: false
  },
  {
    id: 'automacao-calculo-comissao-vendas',
    title: 'Automação do cálculo de comissão de vendas',
    description: '10 minutos, 1 clique, tudo pronto. Automação completa com dashboard de análises e envio automático de prestação de contas.',
    category: 'automacao',
    tags: ['Excel', 'VBA', 'Dashboard'],
    image: 'assets/img/projetos/automacao-calculo-comissao-vendas.jpg',
    images: [
      'assets/img/projetos/automacao-calculo-comissao-vendas.jpg'
    ],
    featured: true,
    status: 'available',
    emoji: '⚡',
    tools: ['Excel', 'VBA', 'Dashboard'],
    contextNote: '',
    context: '',
    before: '1 diretor e 1 assistente levavam 3 dias por mês em um processo lento e sujeito a erros.',
    after: '10 minutos, 1 clique, tudo pronto, calculado, com dashboard para análises e email enviado com a prestação de contas para cada representante.',
    notes: 'Case de automação + redução de trabalho manual + ganho de tempo + confiabilidade.',
    problem: '1 diretor e 1 assistente levavam 3 dias por mês em um processo lento e sujeito a erros.',
    solutionList: [
      'Automação completa do cálculo de comissões de vendas.',
      'Dashboard interativo para análise dos resultados.',
      'Envio automático por email da prestação de contas para cada representante.'
    ],
    resultsList: [
      '⏱ Processo que durava 3 dias passou a ser concluído em 10 minutos.',
      '✅ Redução de trabalho manual e de erros no processo.',
      '📧 Prestação de contas enviada automaticamente para cada representante.'
    ],
    confidential: false
  },
  {
    id: 'sistema-agenda-consultas',
    title: 'Sistema de Agenda e Confirmação de Consultas',
    description: 'Automação completa da agenda médica com confirmação automática, controle de faltas e relatórios de ocupação.',
    category: 'automacao',
    tags: ['Excel', 'VBA'],
    image: 'assets/img/projetos/sistema-agenda-consultas.jpg',
    images: [
      'assets/img/projetos/Sistema de Agenda e Confirmação de Consultas (1).jpg',
      'assets/img/projetos/Sistema de Agenda e Confirmação de Consultas (2).jpg',
      'assets/img/projetos/Sistema de Agenda e Confirmação de Consultas (3).jpg'
    ],
    featured: false,
    status: 'available',
    emoji: '📅',
    tools: ['Excel', 'VBA'],
    contextNote: 'Consultoria de psicologia — agenda manual',
    context: 'Consultoria de psicologia com grande volume de atendimentos e agenda conduzida manualmente.',
    problem: 'A ausência de um processo automatizado aumentava o número de faltas sem aviso, gerava perda de horários e exigia esforço repetitivo da equipe para realizar confirmações manuais.',
    solutionList: [
      'Estruturação do fluxo de confirmação de consultas em Excel e VBA.',
      'Controle de faltas com categorização dos motivos.',
      'Visualização da ocupação da agenda e alertas para apoio à equipe.'
    ],
    resultsList: [
      '⚡ Confirmações 90% mais rápidas e eficientes.',
      '📋 Maior previsibilidade sobre a agenda e aproveitamento dos horários.',
      '✅ Redução da dependência de controles manuais.'
    ],
    confidential: false
  },
  {
    id: 'planilha-precificacao-caixas-artesanais',
    title: 'Solução de precificação / orçamento',
    description: 'Orçamento instantâneo delegado para a equipe com geração automática de propostas e envio imediato.',
    category: 'automacao',
    tags: ['Excel', 'Automação Comercial'],
    image: 'assets/img/projetos/planilha-precificacao-caixas-artesanais.jpg',
    images: [
      'assets/img/projetos/planilha-precificacao-caixas-artesanais.jpg'
    ],
    featured: false,
    status: 'available',
    emoji: '📋',
    tools: ['Excel', 'VBA'],
    contextNote: '',
    context: '',
    before: 'Processo muito manual e sujeito a erros. Centralizado em apenas uma pessoa (a CEO). Por conta da alta demanda e outras responsabilidades, demorava até uma semana para envio da proposta.',
    after: 'A elaboração foi delegada para a equipe. Orçamento instantâneo, com geração das propostas pela própria planilha e envio imediato ao cliente. Projeto com regras de negócio complexas para a precificação e várias peculiaridades, todas atendidas pela nova planilha.',
    notes: 'Ótimo case para mostrar escalabilidade, delegação e agilidade comercial.',
    problem: 'Processo muito manual e sujeito a erros. Centralizado em apenas uma pessoa (a CEO). Por conta da alta demanda e outras responsabilidades, demorava até uma semana para envio da proposta.',
    solutionList: [
      'Planilha de precificação com regras de negócio complexas e várias peculiaridades atendidas.',
      'Processo delegado para a equipe, com geração automática de propostas.',
      'Envio imediato ao cliente a partir da própria planilha.'
    ],
    resultsList: [
      '⏱ Proposta que demorava até 1 semana passou a ser gerada instantaneamente.',
      '👥 Processo delegado da CEO para a equipe.',
      '📄 Geração e envio automático de propostas.'
    ],
    confidential: false
  },
  {
    id: 'dashboard-processos-inovacao',
    title: 'Dashboard para acompanhamento de processos de inovação',
    description: 'Funil de vendas, follow-up de propostas e dashboard gerencial para acompanhamento centralizado.',
    category: 'dashboards',
    tags: ['Dashboard', 'Inteligência Analítica'],
    image: 'assets/img/projetos/dashboard-processos-inovacao.jpg',
    images: [
      'assets/img/projetos/dashboard-processos-inovacao.jpg'
    ],
    featured: true,
    status: 'available',
    emoji: '📊',
    tools: ['Excel', 'Dashboard'],
    contextNote: '',
    context: '',
    before: 'Processo inexistente.',
    after: 'Funil de vendas, follow-up de propostas e dashboard para acompanhamento gerencial.',
    notes: 'Case interessante para mostrar estruturação de processo e visibilidade gerencial.',
    problem: 'Processo inexistente. Ausência de visibilidade sobre o pipeline de propostas e acompanhamento gerencial.',
    solutionList: [
      'Estruturação do funil de vendas com acompanhamento de propostas.',
      'Dashboard gerencial para visibilidade centralizada do processo.'
    ],
    resultsList: [
      '📊 Funil de vendas estruturado com follow-up de propostas.',
      '✅ Visibilidade gerencial centralizada do processo.'
    ],
    confidential: false
  },
  {
    id: 'controle-agenda-prestacao-contas-horas-voo',
    title: 'Planilha para controle de agenda e prestação de contas de horas de voo',
    description: 'Controle completo de agenda, manutenção de aeronaves, horas paradas, prestação de contas e DRE integrados.',
    category: 'controle-operacional',
    tags: ['Excel', 'Gestão Operacional', 'Financeiro'],
    image: 'assets/img/projetos/controle-agenda-prestacao-contas-horas-voo.jpg',
    images: [
      'assets/img/projetos/controle-agenda-prestacao-contas-horas-voo.jpg'
    ],
    featured: false,
    status: 'available',
    emoji: '✈️',
    tools: ['Excel', 'VBA'],
    contextNote: 'Táxi aéreo — 5 aeronaves',
    context: 'Empresa de táxi aéreo — 5 aeronaves',
    before: 'Processo inexistente. Havia muita incerteza na prestação de contas entre sócios para controle de horas de voo de 5 aviões na empresa de táxi aéreo.',
    after: 'Situação resolvida com o desenvolvimento da planilha, que conta com recursos para controle de agenda/calendário, manutenção das aeronaves registradas, horas paradas, prestação de contas dos sócios e DRE.',
    notes: 'Case forte para mostrar controle operacional, financeiro e visão consolidada.',
    problem: 'Processo inexistente. Havia muita incerteza na prestação de contas entre sócios para controle de horas de voo de 5 aviões na empresa de táxi aéreo.',
    solutionList: [
      'Controle de agenda/calendário das aeronaves.',
      'Registro de manutenção e horas paradas de cada aeronave.',
      'Prestação de contas entre sócios e DRE integrados.'
    ],
    resultsList: [
      '📋 Controle completo de agenda e calendário das aeronaves.',
      '🔧 Registro de manutenção e horas paradas.',
      '💰 Prestação de contas e DRE integrados.'
    ],
    confidential: false
  },
  {
    id: 'planilha-orcamento-produto-engenharia',
    title: 'Planilha para elaboração de orçamento — produto de engenharia',
    description: 'Padronização de propostas comerciais com governança e personalização de regras pelo gerente.',
    category: 'solucoes-personalizadas',
    tags: ['Excel', 'Governança Comercial'],
    image: 'assets/img/projetos/planilha-orcamento-produto-engenharia.jpg',
    images: [
      'assets/img/projetos/planilha-orcamento-produto-engenharia.jpg'
    ],
    featured: true,
    status: 'available',
    emoji: '🏗️',
    tools: ['Excel'],
    contextNote: 'Multinacional — setor de engenharia',
    context: 'Multinacional brasileira',
    before: 'Cada equipe comercial elaborava a sua proposta com critérios e metodologias diferentes. Sem padrão, a precificação de um mesmo projeto podia ter resultados distintos. Novos produtos foram lançados e a planilha anterior ficou defasada.',
    after: 'Todo o time comercial passou a seguir a elaboração pela nova planilha, com padronização e possibilidades de personalização de acordo com regras definidas pelo gerente comercial.',
    notes: 'Bom case para mostrar padronização, governança comercial e redução de inconsistências.',
    problem: 'Cada equipe comercial elaborava a sua proposta com critérios e metodologias diferentes. Sem padrão, a precificação de um mesmo projeto podia ter resultados distintos.',
    solutionList: [
      'Nova planilha padronizada para elaboração de orçamentos de engenharia.',
      'Regras de personalização configuráveis pelo gerente comercial.',
      'Adoção por todo o time comercial, eliminando inconsistências.'
    ],
    resultsList: [
      '✅ Padronização das propostas comerciais em todo o time.',
      '⚙️ Personalização controlada pelo gerente comercial.',
      '📉 Redução de inconsistências na precificação.'
    ],
    confidential: false
  },
  {
    id: 'planilhas-gestao-visitas-comerciais',
    title: 'Planilhas de gestão de visitas comerciais',
    description: 'Gestão de metas de visitas por time e regional com relatórios de acompanhamento gerencial.',
    category: 'analise-dados',
    tags: ['Excel', 'Gestão Comercial', 'Relatórios'],
    image: 'assets/img/projetos/planilhas-gestao-visitas-comerciais.jpg',
    images: [
      'assets/img/projetos/planilhas-gestao-visitas-comerciais.jpg'
    ],
    featured: false,
    status: 'available',
    emoji: '🗺️',
    tools: ['Excel', 'Power Query'],
    contextNote: '',
    context: '',
    before: 'Processo inexistente.',
    after: 'Com um relatório extraído do sistema, as informações passaram a ser compiladas para que o gerente nacional consiga cobrar metas de visitas de cada time e de cada regional.',
    notes: 'Case útil para destacar gestão comercial e acompanhamento por região.',
    problem: 'Processo inexistente. O gerente nacional não tinha visibilidade sobre metas de visitas por time e regional.',
    solutionList: [
      'Compilação automática das informações a partir de relatório extraído do sistema.',
      'Acompanhamento de metas de visitas por time e por regional.',
      'Relatórios para cobrança gerencial de resultados.'
    ],
    resultsList: [
      '📊 Visibilidade de metas de visitas por time e regional.',
      '✅ Processo de cobrança gerencial estruturado.'
    ],
    confidential: false
  },
  {
    id: 'painel-resumo-financeiro-plano-saude',
    title: 'Painel resumo financeiro — empresa do ramo de plano de saúde',
    description: 'Atualização diária integrada ao sistema com 1 clique de todas as informações financeiras necessárias ao CEO.',
    category: 'dashboards',
    tags: ['Dashboard', 'Integração', 'Financeiro'],
    image: 'assets/img/projetos/painel-resumo-financeiro-plano-saude.jpg',
    images: [
      'assets/img/projetos/painel-resumo-financeiro-plano-saude.jpg'
    ],
    featured: false,
    status: 'available',
    emoji: '💊',
    tools: ['Excel', 'Power Query'],
    contextNote: 'Plano de saúde',
    context: 'Empresa do ramo de plano de saúde',
    before: null,
    after: 'Planilha integrada ao sistema, com 1 clique para atualização diária de toda a informação necessária ao CEO.',
    notes: 'O texto-base não traz um bloco "Antes" explícito — a complementar se necessário.',
    problem: '',
    solutionList: [
      'Planilha integrada ao sistema da empresa.',
      'Atualização diária de todas as informações financeiras com 1 clique.',
      'Visão consolidada para o CEO.'
    ],
    resultsList: [
      '⚡ Atualização diária com 1 clique.',
      '📊 Visão financeira consolidada para o CEO.'
    ],
    confidential: false
  },
  {
    id: 'controle-os-servicos-cef',
    title: 'Planilha para controle de OS em serviços junto à CEF',
    description: 'Dashboard com visão completa de operações: regiões, prioridades, atrasos, faturamento e pendências.',
    category: 'controle-operacional',
    tags: ['Excel', 'Dashboard', 'Gestão de Serviços'],
    image: 'assets/img/projetos/controle-os-servicos-cef.jpg',
    images: [
      'assets/img/projetos/controle-os-servicos-cef.jpg'
    ],
    featured: true,
    status: 'available',
    emoji: '🏢',
    tools: ['Excel', 'Dashboard'],
    contextNote: 'Prestadora de serviços — CEF',
    context: 'Empresa prestadora de serviços junto à Caixa Econômica Federal',
    before: 'Anotações em caderno.',
    after: 'Dashboard com resumo das informações que o dono queria ter: regiões mais importantes, onde priorizar o trabalho, o que foi feito com atraso, faturamento, pendências e visão geral da operação.',
    notes: 'Bom case para evidenciar digitalização de processo e tomada de decisão.',
    problem: 'Anotações em caderno. Sem visibilidade estruturada sobre regiões prioritárias, atrasos, faturamento e pendências.',
    solutionList: [
      'Dashboard com visão das regiões mais importantes e priorização do trabalho.',
      'Controle de serviços feitos com atraso e pendências.',
      'Visão consolidada de faturamento e operação.'
    ],
    resultsList: [
      '📋 Digitalização completa do processo — de caderno para dashboard.',
      '📍 Visibilidade por região, prioridade e status das OS.',
      '💰 Controle de faturamento e pendências integrado.'
    ],
    confidential: false
  }
];

const CATEGORY_LABELS = {
  'dashboards':              'Dashboard',
  'automacao':               'Automação',
  'analise-dados':           'Análise de Dados',
  'controle-operacional':    'Controle Operacional',
  'solucoes-personalizadas': 'Solução Personalizada'
};

const CATEGORY_DESCRIPTIONS = {
  'all': 'Todos os projetos desenvolvidos pela DashBusiness, reunindo automação, dashboards, controles operacionais, análise de dados e soluções personalizadas.',
  'dashboards': 'Projetos focados em transformar informações dispersas em painéis claros para acompanhamento gerencial e tomada de decisão.',
  'automacao': 'Soluções que reduzem rotinas manuais, aceleram processos repetitivos e aumentam a confiabilidade das entregas.',
  'analise-dados': 'Projetos de organização, tratamento e leitura de dados para gerar visão prática sobre operação, metas e desempenho.',
  'controle-operacional': 'Ferramentas para estruturar processos, acompanhar pendências, registrar atividades e dar visibilidade à rotina operacional.',
  'solucoes-personalizadas': 'Soluções sob medida para regras de negócio específicas, combinando controle, padronização e usabilidade.'
};

/**
 * Renders project cards into a container element.
 * @param {string} containerId
 * @param {object} [opts]
 * @param {boolean}     [opts.featured=false]           render only featured projects
 * @param {string}      [opts.filter='all']              category filter
 * @param {number|null} [opts.limit=null]                max cards to render
 * @param {string|null} [opts.projectUrl=null]           URL for individual project page; if set, cards link here
 * @param {string}      [opts.imgBase='']                base path prefix for image URLs
 * @param {string|null} [opts.contextId=null]            optional element to receive category context
 */
function renderProjectCards(containerId, opts) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var o = Object.assign(
    { featured: false, filter: 'all', limit: null, projectUrl: null, imgBase: '', contextId: null },
    opts
  );

  var list = DB_PROJECTS;
  if (o.featured)         list = list.filter(function(p) { return p.featured; });
  if (o.filter !== 'all') list = list.filter(function(p) { return p.category === o.filter; });
  if (o.limit)            list = list.slice(0, o.limit);

  container.innerHTML = list.map(function(p) {
    return _buildCardHTML(p, o.projectUrl, o.imgBase);
  }).join('');

  _renderFilterContext(o.contextId, o.filter, list.length);
  _observeCards(container);
  _bindPortfolioLightbox(container, o.imgBase);
}

/**
 * Filters project cards by re-rendering the grid from DB_PROJECTS.
 * @param {string} containerId
 * @param {string} category  'all' or a category key
 * @param {object} [opts]
 */
function filterProjectCards(containerId, category, opts) {
  var activeCategory = category || 'all';
  var o = Object.assign(
    { buttonsSelector: null, featured: false, projectUrl: null, imgBase: '', contextId: null },
    opts
  );

  if (o.buttonsSelector) {
    document.querySelectorAll(o.buttonsSelector).forEach(function(btn) {
      var isActive = btn.dataset.filter === activeCategory;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  renderProjectCards(containerId, {
    featured: o.featured,
    filter: activeCategory,
    projectUrl: o.projectUrl,
    imgBase: o.imgBase,
    contextId: o.contextId
  });
}

/* --- internals ------------------------------------------------ */

function _escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function _observeCards(container) {
  if (typeof document !== 'undefined' && document.documentElement.classList.contains('reduce-motion')) {
    container.querySelectorAll('.project-card').forEach(function(c) {
      c.classList.add('visible');
    });
    return;
  }
  if (typeof IntersectionObserver === 'undefined') {
    container.querySelectorAll('.project-card').forEach(function(c) {
      c.classList.add('visible');
    });
    return;
  }
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var siblings = Array.from(entry.target.parentElement.children);
        var delay    = siblings.indexOf(entry.target) * 80;
        setTimeout(function() { entry.target.classList.add('visible'); }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10 });

  container.querySelectorAll('.project-card').forEach(function(c) {
    observer.observe(c);
  });
}

function _buildCardHTML(p, projectUrl, imgBase) {
  var typeLabel = _escapeHtml(CATEGORY_LABELS[p.category] || p.category);

  var tagsHtml = p.tags.map(function(tag) {
    var cls = p.status === 'confidential' ? 'card-ctx-tag confidential' : 'card-ctx-tag';
    return '<span class="' + cls + '">' + _escapeHtml(tag) + '</span>';
  }).join('');

  var imgSrc = p.image ? (imgBase || '') + p.image : null;
  var imgAttrs = '';
  if (p.imageRotation) {
    imgAttrs = ' class="thumb-with-rotation" style="--thumb-rot:' + p.imageRotation + 'deg"';
  }

  var thumbInner = '';
  if (imgSrc) {
    thumbInner =
      '<button type="button" class="project-card-zoom-btn" aria-label="Ampliar imagens do projeto"></button>'
      + '<img src="' + _escapeHtml(imgSrc) + '" alt="' + _escapeHtml(p.title) + '" loading="lazy"' + imgAttrs + '>';
  } else {
    thumbInner = '<div class="project-card-thumb-placeholder">' + _escapeHtml(p.emoji || '✦') + '</div>';
  }

  /* "Ver projeto" sempre abre a página individual, nunca contato. */
  var detailUrl = projectUrl || _getDefaultProjectUrl();
  var href = detailUrl + '?id=' + encodeURIComponent(p.id);

  return '<div class="project-card" data-category="' + _escapeHtml(p.category) + '" data-project-id="' + _escapeHtml(p.id) + '">'
    + '<div class="project-card-thumb">' + thumbInner + '</div>'
    + '<a class="project-card-link" href="' + href + '">'
    + '<div class="project-card-body">'
    +   '<span class="project-type">' + typeLabel + '</span>'
    +   '<h3>' + _escapeHtml(p.title) + '</h3>'
    +   '<p>' + _escapeHtml(p.description) + '</p>'
    +   '<div class="card-context">' + tagsHtml + '</div>'
    +   '<div class="project-arrow">Ver projeto →</div>'
    + '</div>'
    + '</a>'
    + '</div>';
}

/** Caminho da página de detalhe: relativo ao arquivo atual (funciona em file:// e na Vercel). */
function _getDefaultProjectUrl() {
  var p = (window.location.pathname || '').replace(/\\/g, '/');
  if (/\/projetos(\/|$)/i.test(p)) {
    return 'projeto.html';
  }
  return 'projetos/projeto.html';
}

function _renderFilterContext(contextId, category, count) {
  if (!contextId) return;
  var contextEl = document.getElementById(contextId);
  if (!contextEl) return;

  var activeCategory = category || 'all';
  var label = activeCategory === 'all'
    ? 'Todos'
    : (CATEGORY_LABELS[activeCategory] || activeCategory);
  var description = CATEGORY_DESCRIPTIONS[activeCategory] || CATEGORY_DESCRIPTIONS.all;
  var totalText = count === 1 ? '1 projeto encontrado' : count + ' projetos encontrados';

  contextEl.innerHTML = '<span>' + _escapeHtml(label) + '</span>'
    + '<p>' + _escapeHtml(description) + '</p>'
    + '<strong>' + _escapeHtml(totalText) + '</strong>';
}

/* ---------- Lightbox nas grades (home + biblioteca) — mesmo padrão da página de projeto ---------- */

var _plbImages = [];
var _plbIndex = 0;
var _plbRotation = 0;
var _plbBase = '';
var _plbTitle = '';
var _portfolioLbKeyBound = false;
var _plbFocusPrev = null;

function ensurePortfolioLightbox() {
  if (document.getElementById('portfolio-global-lightbox')) return;

  var wrap = document.createElement('div');
  wrap.id = 'portfolio-global-lightbox';
  wrap.className = 'lightbox';
  wrap.setAttribute('role', 'dialog');
  wrap.setAttribute('aria-modal', 'true');
  wrap.setAttribute('aria-label', 'Visualização ampliada');
  wrap.innerHTML =
    '<button type="button" class="lightbox-close portfolio-lb-close" aria-label="Fechar">✕</button>'
    + '<button type="button" class="lightbox-nav prev portfolio-lb-prev" aria-label="Anterior">‹</button>'
    + '<img id="portfolio-lb-img" class="lightbox-img" src="" alt="">'
    + '<button type="button" class="lightbox-nav next portfolio-lb-next" aria-label="Próxima">›</button>'
    + '<div id="portfolio-lb-dots" class="lightbox-dots"></div>';

  document.body.appendChild(wrap);

  wrap.addEventListener('click', function(e) {
    if (e.target === wrap) closePortfolioLightbox();
  });
  wrap.querySelector('.portfolio-lb-close').addEventListener('click', function(e) {
    e.stopPropagation();
    closePortfolioLightbox();
  });
  wrap.querySelector('.portfolio-lb-prev').addEventListener('click', function(e) {
    e.stopPropagation();
    portfolioLightboxNav(-1);
  });
  wrap.querySelector('.portfolio-lb-next').addEventListener('click', function(e) {
    e.stopPropagation();
    portfolioLightboxNav(1);
  });

  if (!_portfolioLbKeyBound) {
    document.addEventListener('keydown', portfolioLightboxOnKeydown);
    _portfolioLbKeyBound = true;
  }
}

function portfolioLightboxOnKeydown(e) {
  var lb = document.getElementById('portfolio-global-lightbox');
  if (!lb || !lb.classList.contains('open')) return;
  if (e.key === 'Escape') closePortfolioLightbox();
  if (e.key === 'ArrowLeft') portfolioLightboxNav(-1);
  if (e.key === 'ArrowRight') portfolioLightboxNav(1);
  if (e.key !== 'Tab') return;
  var sel = 'button:not([disabled])';
  var nodes = Array.prototype.slice.call(lb.querySelectorAll(sel)).filter(function(el) {
    return el.offsetParent !== null || el.getClientRects().length > 0;
  });
  if (nodes.length < 2) {
    if (nodes.length === 1) {
      e.preventDefault();
      nodes[0].focus();
    }
    return;
  }
  var first = nodes[0];
  var last = nodes[nodes.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function openPortfolioLightbox(project, imgBase) {
  var imgs = project.images && project.images.length
    ? project.images.slice()
    : (project.image ? [project.image] : []);
  if (!imgs.length) return;

  _plbImages = imgs;
  _plbIndex = 0;
  _plbRotation = project.imageRotation || 0;
  _plbBase = imgBase || '';
  _plbTitle = project.title || 'Projeto';

  ensurePortfolioLightbox();
  renderPortfolioLightbox();
  _plbFocusPrev = document.activeElement;
  var lbEl = document.getElementById('portfolio-global-lightbox');
  lbEl.classList.add('open');
  document.body.style.overflow = 'hidden';
  var closeBtn = lbEl.querySelector('.portfolio-lb-close');
  requestAnimationFrame(function() {
    if (closeBtn) closeBtn.focus();
  });
}

function closePortfolioLightbox() {
  var lb = document.getElementById('portfolio-global-lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
  var prev = _plbFocusPrev;
  _plbFocusPrev = null;
  if (prev && typeof prev.focus === 'function') {
    requestAnimationFrame(function() { prev.focus(); });
  }
}

function portfolioLightboxNav(dir) {
  if (!_plbImages.length) return;
  _plbIndex = (_plbIndex + dir + _plbImages.length) % _plbImages.length;
  renderPortfolioLightbox();
}

function renderPortfolioLightbox() {
  var lb = document.getElementById('portfolio-global-lightbox');
  if (!lb) return;

  var lbImg = document.getElementById('portfolio-lb-img');
  lbImg.src = _plbBase + _plbImages[_plbIndex];
  lbImg.alt = (_plbTitle || 'Projeto') + ' — imagem ' + (_plbIndex + 1);
  lbImg.style.transform = _plbRotation ? 'rotate(' + _plbRotation + 'deg)' : '';

  var many = _plbImages.length > 1;
  lb.querySelector('.portfolio-lb-prev').style.display = many ? '' : 'none';
  lb.querySelector('.portfolio-lb-next').style.display = many ? '' : 'none';

  var dotsEl = document.getElementById('portfolio-lb-dots');
  dotsEl.innerHTML = '';
  if (many) {
    _plbImages.forEach(function(_, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lb-dot' + (i === _plbIndex ? ' active' : '');
      btn.setAttribute('aria-label', 'Imagem ' + (i + 1));
      btn.addEventListener('click', function(ev) {
        ev.stopPropagation();
        _plbIndex = i;
        renderPortfolioLightbox();
      });
      dotsEl.appendChild(btn);
    });
  }
}

function _bindPortfolioLightbox(container, imgBase) {
  ensurePortfolioLightbox();

  container.querySelectorAll('.project-card[data-project-id]').forEach(function(card) {
    var zoomBtn = card.querySelector('.project-card-zoom-btn');
    if (!zoomBtn) return;

    var id = card.getAttribute('data-project-id');
    var project = DB_PROJECTS.find(function(p) { return p.id === id; });
    if (!project) return;

    zoomBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openPortfolioLightbox(project, imgBase);
    });
  });
}
