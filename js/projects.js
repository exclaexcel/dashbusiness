/* ============================================================
   Dash Business — projects.js
   Fonte única de dados dos projetos.
   Usado por: index.html (destaques) e projetos/index.html (biblioteca)
   ============================================================ */

const DB_PROJECTS = [
  {
    id: 'sistema-gestao-clinica',
    title: 'Sistema Integrado de Gestão Clínica',
    description: 'Solução completa para gestão clínica — controle de pacientes, prontuários, faturamento e indicadores operacionais integrados.',
    category: 'controle-operacional',
    tags: ['Excel', 'Access', 'VBA'],
    image: 'assets/img/projetos/sistema-gestao-clinica.jpg',
    featured: true,
    status: 'available'
  },
  {
    id: 'sistema-agenda-consultas',
    title: 'Sistema de Agenda e Confirmação de Consultas',
    description: 'Automação completa da agenda médica com confirmação automática, controle de faltas e relatórios de ocupação.',
    category: 'automacao',
    tags: ['Excel', 'VBA'],
    image: 'assets/img/projetos/sistema-agenda-consultas.jpg',
    featured: true,
    status: 'available'
  },
  {
    id: 'automacao-calculo-comissao-vendas',
    title: 'Automação do cálculo de comissão de vendas',
    description: '10 minutos, 1 clique, tudo pronto. Automação completa com dashboard de análises e envio automático de prestação de contas.',
    category: 'automacao',
    tags: ['Excel', 'VBA', 'Dashboard'],
    image: 'assets/img/projetos/automacao-calculo-comissao-vendas.jpg',
    featured: true,
    before: '1 diretor e 1 assistente levavam 3 dias por mês em um processo lento e sujeito a erros.',
    after: '10 minutos, 1 clique, tudo pronto, calculado, com dashboard para análises e email enviado com a prestação de contas para cada representante.',
    notes: 'Case de automação + redução de trabalho manual + ganho de tempo + confiabilidade.',
    status: 'available'
  },
  {
    id: 'dashboard-processos-inovacao',
    title: 'Dashboard para acompanhamento de processos de inovação',
    description: 'Funil de vendas, follow-up de propostas e dashboard gerencial para acompanhamento centralizado.',
    category: 'dashboards',
    tags: ['Dashboard', 'Inteligência Analítica'],
    image: 'assets/img/projetos/dashboard-processos-inovacao.jpg',
    featured: true,
    before: 'Processo inexistente.',
    after: 'Funil de vendas, follow-up de propostas e dashboard para acompanhamento gerencial.',
    notes: 'Case interessante para mostrar estruturação de processo e visibilidade gerencial.',
    status: 'available'
  },
  {
    id: 'planilha-precificacao-caixas-artesanais',
    title: 'Planilha de precificação de caixas artesanais',
    description: 'Orçamento instantâneo delegado para a equipe com geração automática de propostas e envio imediato.',
    category: 'automacao',
    tags: ['Excel', 'Automação Comercial'],
    image: 'assets/img/projetos/planilha-precificacao-caixas-artesanais.jpg',
    featured: false,
    before: 'Processo muito manual e sujeito a erros. Centralizado em apenas uma pessoa (a CEO). Por conta da alta demanda e outras responsabilidades, demorava até uma semana para envio da proposta.',
    after: 'A elaboração foi delegada para a equipe. Orçamento instantâneo, com geração das propostas pela própria planilha e envio imediato ao cliente. Projeto com regras de negócio complexas para a precificação e várias peculiaridades, todas atendidas pela nova planilha.',
    notes: 'Ótimo case para mostrar escalabilidade, delegação e agilidade comercial.',
    status: 'available'
  },
  {
    id: 'controle-agenda-prestacao-contas-horas-voo',
    title: 'Planilha para controle de agenda e prestação de contas de horas de voo',
    description: 'Controle completo de agenda, manutenção de aeronaves, horas paradas, prestação de contas e DRE integrados.',
    category: 'controle-operacional',
    tags: ['Excel', 'Gestão Operacional', 'Financeiro'],
    image: 'assets/img/projetos/controle-agenda-prestacao-contas-horas-voo.jpg',
    featured: false,
    before: 'Processo inexistente. Havia muita incerteza na prestação de contas entre sócios para controle de horas de voo de 5 aviões na empresa de táxi aéreo.',
    after: 'Situação resolvida com o desenvolvimento da planilha, que conta com recursos para controle de agenda/calendário, manutenção das aeronaves registradas, horas paradas, prestação de contas dos sócios e DRE.',
    notes: 'Case forte para mostrar controle operacional, financeiro e visão consolidada.',
    status: 'available'
  },
  {
    id: 'planilha-orcamento-produto-engenharia',
    title: 'Planilha para elaboração de orçamento — produto de engenharia',
    description: 'Padronização de propostas comerciais com governança e personalização de regras pelo gerente.',
    category: 'solucoes-personalizadas',
    tags: ['Excel', 'Governança Comercial'],
    image: 'assets/img/projetos/planilha-orcamento-produto-engenharia.jpg',
    featured: false,
    context: 'Multinacional brasileira',
    before: 'Cada equipe comercial elaborava a sua proposta com critérios e metodologias diferentes. Sem padrão, a precificação de um mesmo projeto podia ter resultados distintos. Novos produtos foram lançados e a planilha anterior ficou defasada.',
    after: 'Todo o time comercial passou a seguir a elaboração pela nova planilha, com padronização e possibilidades de personalização de acordo com regras definidas pelo gerente comercial.',
    notes: 'Bom case para mostrar padronização, governança comercial e redução de inconsistências.',
    status: 'available'
  },
  {
    id: 'planilhas-gestao-visitas-comerciais',
    title: 'Planilhas de gestão de visitas comerciais',
    description: 'Gestão de metas de visitas por time e regional com relatórios de acompanhamento gerencial.',
    category: 'analise-dados',
    tags: ['Excel', 'Gestão Comercial', 'Relatórios'],
    image: 'assets/img/projetos/planilhas-gestao-visitas-comerciais.jpg',
    featured: false,
    before: 'Processo inexistente.',
    after: 'Com um relatório extraído do sistema, as informações passaram a ser compiladas para que o gerente nacional consiga cobrar metas de visitas de cada time e de cada regional.',
    notes: 'Case útil para destacar gestão comercial e acompanhamento por região.',
    status: 'available'
  },
  {
    id: 'painel-resumo-financeiro-plano-saude',
    title: 'Painel resumo financeiro — empresa do ramo de plano de saúde',
    description: 'Atualização diária integrada ao sistema com 1 clique de todas as informações financeiras necessárias ao CEO.',
    category: 'dashboards',
    tags: ['Dashboard', 'Integração', 'Financeiro'],
    image: 'assets/img/projetos/painel-resumo-financeiro-plano-saude.jpg',
    featured: false,
    before: null,
    after: 'Planilha integrada ao sistema, com 1 clique para atualização diária de toda a informação necessária ao CEO.',
    notes: 'O texto-base não traz um bloco "Antes" explícito — a complementar se necessário.',
    status: 'available'
  },
  {
    id: 'controle-os-servicos-cef',
    title: 'Planilha para controle de OS em serviços junto à CEF',
    description: 'Dashboard com visão completa de operações: regiões, prioridades, atrasos, faturamento e pendências.',
    category: 'controle-operacional',
    tags: ['Excel', 'Dashboard', 'Gestão de Serviços'],
    image: 'assets/img/projetos/controle-os-servicos-cef.jpg',
    featured: false,
    before: 'Anotações em caderno.',
    after: 'Dashboard com resumo das informações que o dono queria ter: regiões mais importantes, onde priorizar o trabalho, o que foi feito com atraso, faturamento, pendências e visão geral da operação.',
    notes: 'Bom case para evidenciar digitalização de processo e tomada de decisão.',
    status: 'available'
  }
];

const CATEGORY_LABELS = {
  'dashboards':              'Dashboard',
  'automacao':               'Automação',
  'analise-dados':           'Análise de Dados',
  'controle-operacional':    'Controle Operacional',
  'solucoes-personalizadas': 'Solução Personalizada'
};

/**
 * Renders project cards into a container element.
 * @param {string} containerId
 * @param {object} [opts]
 * @param {boolean}     [opts.featured=false]          render only featured projects
 * @param {string}      [opts.filter='all']             category filter
 * @param {number|null} [opts.limit=null]               max cards to render
 * @param {string}      [opts.contactUrl='#contato']    CTA destination
 * @param {string}      [opts.imgBase='']                base path for image URLs
 */
function renderProjectCards(containerId, opts) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const o = Object.assign(
    { featured: false, filter: 'all', limit: null, contactUrl: '#contato', imgBase: '' },
    opts
  );

  let list = DB_PROJECTS;
  if (o.featured)        list = list.filter(p => p.featured);
  if (o.filter !== 'all') list = list.filter(p => p.category === o.filter);
  if (o.limit)           list = list.slice(0, o.limit);

  container.innerHTML = list.map(p => _buildCardHTML(p, o.contactUrl, o.imgBase)).join('');

  _observeCards(container);
}

/**
 * Filters already-rendered cards by toggling the .hidden class.
 * @param {string} containerId
 * @param {string} category  'all' or a category key
 */
function filterProjectCards(containerId, category) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.project-card[data-category]').forEach(function(card) {
    var show = category === 'all' || card.dataset.category === category;
    card.classList.toggle('hidden', !show);
  });
}

/* --- internals ------------------------------------------------ */

function _observeCards(container) {
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

function _buildCardHTML(p, contactUrl, imgBase) {
  var typeLabel = CATEGORY_LABELS[p.category] || p.category;

  var tagsHtml = p.tags.map(function(tag) {
    var cls = p.status === 'confidential' ? 'card-ctx-tag confidential' : 'card-ctx-tag';
    return '<span class="' + cls + '">' + tag + '</span>';
  }).join('');

  var imgSrc = p.image ? (imgBase || '') + p.image : null;
  var thumbHtml = imgSrc
    ? '<img src="' + imgSrc + '" alt="' + p.title + '" loading="lazy">'
    : '<div class="project-card-thumb-placeholder">' + (p.emoji || '✦') + '</div>';

  return '<a class="project-card" href="' + contactUrl + '" data-category="' + p.category + '">'
    + '<div class="project-card-thumb">' + thumbHtml + '</div>'
    + '<div class="project-card-body">'
    +   '<span class="project-type">' + typeLabel + '</span>'
    +   '<h3>' + p.title + '</h3>'
    +   '<p>' + p.description + '</p>'
    +   '<div class="card-context">' + tagsHtml + '</div>'
    +   '<div class="project-arrow">Ver projeto →</div>'
    + '</div>'
    + '</a>';
}
