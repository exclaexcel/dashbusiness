# Guia de desenvolvimento — DashBusiness

Documentação técnica para quem mantém ou evolui o site.

---

## 1. Arquitetura

- **Modelo**: site estático, sem backend nem build npm para o próprio frontend.
- **Dados**: o portfólio vive num único array JavaScript **`DB_PROJECTS`** em [`js/projects.js`](../js/projects.js).
- **Páginas**:
  - **Home**: [`index.html`](../index.html) — usa `renderProjectCards` para destaques (`featured`).
  - **Biblioteca**: [`projetos/index.html`](../projetos/index.html) — filtros, cards e lightbox global (via `projects.js`).
  - **Detalhe**: [`projetos/projeto.html`](../projetos/projeto.html) — lê `?id=` e preenche o DOM com o projeto correspondente; lightbox próprio embutido no script da página.

### Rotas na prática

| Utilizador vê | Ficheiro real |
|---------------|---------------|
| `/` | `index.html` |
| `/projetos` | `projetos/index.html` (Vercel `cleanUrls`) |
| `/projetos/projeto?id=slug` | `projetos/projeto.html?id=slug` |

Redireções em [`vercel.json`](../vercel.json) enviam **`/projeto`**, **`/projeto/`** e **`/projeto.html`** para **`/projetos/projeto`**, para compatibilidade com links antigos.

**Importante nos links relativos**:

- Da **home**, use `projetos/projeto.html?id=...`.
- Da **lista** (`projetos/index.html`), use `projeto.html?id=...` (mesma pasta).

Assim não se criam URLs erradas tipo `/projeto?id=…` na raiz.

---

## 2. Adicionar ou editar um projeto

1. Abra [`js/projects.js`](../js/projects.js).
2. Adicione (ou altere) um objeto no array **`DB_PROJECTS`**.
3. Use um **`id`** estável (`kebab-case`, sem espaços) — aparece na URL como `?id=...`.

### Campos mais usados

| Campo | Descrição |
|-------|-----------|
| `id` | Identificador único (URL). |
| `title`, `description` | Título curto e resumo nos cards. |
| `category` | Uma das chaves listadas na secção [Categorias](#3-categorias). |
| `tags`, `emoji`, `tools` | Metadata exibida no detalhe e nos filtros/contexto. |
| `image` | Imagem principal (card / hero do detalhe). |
| `images` | Array de caminhos da galeria (se só houver uma, pode espelhar `image`). |
| `featured` | `true` para aparecer no bloco “destaques” da home (`limit` aplica-se em [`js/main.js`](../js/main.js)). |
| `status` | Estado comercial onde aplicável. |
| `context`, `problem`, `before`, `after` | Textos narrativos na página do projeto. |
| `solutionList`, `resultsList` | Listas markdown-free (strings curtas por item). |
| `contextNote` | Texto opcional em destaque (nota contextual). |
| `confidential` | Controlo de exibição de trechos sensíveis quando usado pela UI. |

**Imagens**: coloque os ficheiros em [`assets/img/projetos/`](../assets/img/projetos/) e use caminhos relativos coerentes com a página que consome o asset (a home usa prefixo vazio; `projetos/projeto.html` usa `BASE_IMG = '../'` no script da página).

Depois de alterar `id` ou adicionar projeto, inclua a URL canónica em **`sitemap.xml`** (e verifique **`robots.txt`** se o domínio mudou).

---

## 3. Categorias

Definidas em **`CATEGORY_LABELS`** e **`CATEGORY_DESCRIPTIONS`** no mesmo `projects.js`. Chaves atuais:

- `dashboards`
- `automacao`
- `analise-dados`
- `controle-operacional`
- `solucoes-personalizadas`

Novas categorias exigem novas entradas nesses dois objetos e, se desejado, botões de filtro em `projetos/index.html`.

---

## 4. JavaScript por ficheiro

### `js/main.js`

- Navegação (desktop + hamburger, **Escape** fecha o menu mobile).
- Scroll suave e **“voltar ao topo”** respeitam `html.reduce-motion` e `prefers-reduced-motion`.
- Animações de entrada (hero, fade-in) desligadas quando há redução de movimento.
- **Modal de bios** dos especialistas: `role="dialog"`, foco no fechar, **Tab** preso no diálogo, **Escape**, restauro de foco.

### `js/projects.js`

- **`DB_PROJECTS`**, categorias, **`renderProjectCards`**, **`filterProjectCards`**.
- Lightbox reutilizável da **biblioteca** (portfolio): foco, **Escape**, ciclo de **Tab**.

### Inline em `projetos/projeto.html`

Script no fim da página: resolve `projectId`, renderiza blocos da galeria, abre/lightbox próprio (**sem `onclick`** no markup — compatível com CSP), foco + Tab + setas.

---

## 5. Acessibilidade e movimento

- Link **“Pular para o conteúdo”** (`.skip-link`) para `#main-content`; `<main>` com `tabindex="-1"` para foco programático quando necessário.
- **`prefers-reduced-motion`**: classe `reduce-motion` no `<html>`; orbs hero sem animação; transições de cards/fade conforme [`css/style.css`](../css/style.css).

---

## 6. Segurança e cabeçalhos (Vercel)

[`vercel.json`](../vercel.json) define, entre outros:

- **`Content-Security-Policy`**: permite scripts e estilos **inline** (`'unsafe-inline'`) para o modelo atual do site; fontes Google nas directivas `style-src` / `font-src`.
- **`X-Content-Type-Options: nosniff`**, **`Referrer-Policy`**, **`frame-ancestors 'none'`** (via `default-src` / política).

Se no futuro extrair JS/CSS para ficheiros sem inline, pode endurecer a CSP removendo `'unsafe-inline'`.

---

## 7. SEO

- **`sitemap.xml`**: URLs absolutas; hoje com host `https://dashbusiness.vercel.app` — **substituir em todo o ficheiro** ao mudar domínio.
- **`robots.txt`**: `Allow: /` e linha **`Sitemap:`** com o mesmo host.
- **`404.html`**: `noindex`, layout alinhado ao site, links para início e portfólio.

---

## 8. Testes rápidos antes de publicar

1. Menu mobile: abrir, fechar com **Escape**, link ativo ao scroll.
2. Modal de especialista: **Tab** não “foge” do diálogo; **Escape** fecha; foco volta ao botão.
3. Lightbox (biblioteca e página de projeto): **Escape**, **Tab**, setas na página de detalhe.
4. Skip link visível ao focar (teclado).
5. URL inexistente → **404** esperado.
6. Consola do browser: nenhum erro de violação CSP inesperado.

---

## 9. Repositório e ficheiros ignorados

Ver [`.gitignore`](../.gitignore): pasta **`.vercel`**, **`.cursor/`**, **`.vscode/`**, e rascunhos de logo não usados no HTML. Notas de copy e contexto em [`docs/notas/`](notas/).

---

## 10. Referência histórica

[`docs/IMPLEMENTACAO.md`](IMPLEMENTACAO.md) descreve implementações passadas (pode estar parcialmente desatualizado face ao logo e rotas finais — priorize este guia e o código).
