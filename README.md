# DashBusiness — Site institucional e portfólio

Site estático (**HTML**, **CSS**, **JavaScript**) da DashBusiness: home, biblioteca de projetos e páginas de detalhe com galeria e lightbox. Deploy habitual na **Vercel**.

## Como ver localmente

Não há `npm install` obrigatório. Abrir `index.html` diretamente no browser funciona para muitos casos; para caminhos e comportamento igual à produção, use um servidor local:

```powershell
cd c:\Users\daany\.vscode\Projeto\Repos\dashbusiness
npx serve .
```

Depois aceda a `http://localhost:3000` (ou a porta indicada pelo `serve`).

## Estrutura principal

| Pasta / ficheiro | Função |
|------------------|--------|
| `index.html` | Home |
| `projetos/index.html` | Portfólio (filtros por categoria) |
| `projetos/projeto.html` | Detalhe de um projeto (`?id=slug`) |
| `css/style.css` | Estilos globais e componentes |
| `js/main.js` | Navegação, bio-modais, scroll, `prefers-reduced-motion`, etc. |
| `js/projects.js` | **Fonte única** dos projetos (`DB_PROJECTS`) e renderização de cards/lightbox da biblioteca |
| `404.html`, `robots.txt`, `sitemap.xml` | Erro personalizado e SEO para bots |
| `vercel.json` | Redirects (`/projeto` → `/projetos/projeto`), `cleanUrls`, cabeçalhos de segurança/CSP |

## Documentação estendida

- **[Guia de desenvolvimento](docs/GUIA-DESENVOLVIMENTO.md)** — rotas, como adicionar projetos, acessibilidade, CSP, deploy.
- **`docs/`** — [`guia da marca`](docs/GUIA-DA-MARCA.md), [`guia de desenvolvimento`](docs/GUIA-DESENVOLVIMENTO.md), registo em [`IMPLEMENTACAO.md`](docs/IMPLEMENTACAO.md), notas em [`docs/notas/`](docs/notas/).

## Deploy

Ligações Git → Vercel em `main` disparam builds automáticos. Deploy manual na pasta do projeto:

```powershell
npx vercel --prod
```

Produto público habitual: **`https://dashbusiness.vercel.app`**. Ao mudar domínio, atualize URLs em **`sitemap.xml`** e **`robots.txt`**.
