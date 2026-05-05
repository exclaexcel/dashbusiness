# Guia da marca — DashBusiness

Referência editorial e visual para manter uma presença coerente com o que o site instituciona hoje. **Fonte técnica da paleta e tipografia:** variáveis em [`css/style.css`](../css/style.css) (`:root`).

---

## 1. Essência da marca

| Elemento | Definição |
|----------|-----------|
| **Nome** | DashBusiness |
| **Tipo** | Consultoria em **dados** e **inteligência analítica**, com desenvolvimento de soluções personalizadas |
| **Proposta resumida** | Transformar informações em **decisões estratégicas**, reduzindo processos **manuais e repetitivos** e gerando **valor** para empresas de qualquer porte |
| **Leit-motiv (frase de apoio)** | **“Independentemente da ferramenta, resolvemos o problema.”** — uso prioritário nos blocos institucional e hero quando fizer sentido |
| **Tagline institucional (site/meta)** | *Dados, Estratégia e Eficiência* (título/meta description alinhados) |
| **Pilares de mensagem** | Decisões com base em dados • Eficiência operacional • Soluções sob medida • Clareza (sem jargon desnecessário) |

Tom geral: **profissional, direto e confiável**. Evitar tom excessivamente informal ou autopromocional barulhento.

---

## 2. Posicionamento e público

- **Público:** gestores e equipes que precisam organizar dados, automatizar rotinas ou ganhar visibilidade analítica.
- **Diferencial a comunicar:** integração entre análise, automação (Excel/VBA/Access quando aplicável) e **compreensão do negócio** — sempre com foco em resultado prático.

Em textos institucionais, preferir exemplos **concretos** (situações de operação, não só adjetivos “inovadores” ou “liderança”).

---

## 3. Tom de voz e escrita

| Fazer | Evitar |
|-------|--------|
| Frases claras em **português BR** (`pt-BR`) | Anglicismos desnecessários (“leverage”, “mindset”) sem público técnico explícito |
| Verbos de ação: *organizar*, *automatizar*, *reduzir*, *estruturar*, *acompanhar* | Jargão vazio (*sinergias*, *solutions* isolado) |
| Benefício + contexto antes do recurso tecnológico | Listar apenas stacks sem dizer para quê |
| Concordância neutra inclusiva só quando já for padrão do material | Mudar só por moda textual se quebrar voz atual |

### Nível técnico

- **Marketing (hero, sobre):** linguagem acessível; ferramentas citadas só como suporte ao benefício.
- **Casos/portfólio:** pode ser mais técnico (processos, entregáveis), mantendo primeira frase sempre legível para não especialista.

### Repetição intencional

A frase *Independentemente da ferramenta…* é **assinatura verbal** autorizada repetir onde reforça posicionamento (home, institucional, apresentações).

---

## 4. Logo e uso

### Ficheiro oficial (web)

**`assets/logo/Logotipo_DashBusiness_OFICIAL_b.png`**

Único arquivo referenciado hoje pela UI (navbar, hero, ícone, OG image em caminhos relativos).

### Orientações rápidas

- **Navbar:** altura visual ~ **40 px** (atributo `height="40"` na implementação atual); proporção sempre mantida pelo browser.
- **Não:** distorcer, recortar o símbolo isolado sem manual de marca físico separado, colocar sobre fundos ilegíveis (ex.: gradiente igual ao texto), aplicar filtros estranhos nem substituir cor fixa onde o PNG já trata contraste para fundo escuro.
- **Espaço de respiro:** manter zona livre suficiente em torno do logo comparável à altura da letra capital “D” no lockup atual (boa prática; aproximar até existir arquivo de marca PDF).

Versões invertidas monocromáticas e logotipo em fundo **claro** devem só ser usadas se forem oficialmente disponibilizadas — o site público atual é **só modo escuro**.

---

## 5. Cor (identidade visual digital)

Paleta atual é **somente modo escuro**; **não** introduzir um tema claro sem decisão formal e refactor de CSS — alinhado à diretriz consolidada do projeto.

### Cores primárias (referência rápida)

| Uso | Token / hex | Observação |
|-----|--------------|-------------|
| Fundo página | `#0B1114` (`--bg`) | Inclua em `theme-color` |
| Painéis / cards | `#10181D` – `#131D22` (`--bg-secondary`, `--bg-card`) | Hierarquia sutil entre blocos |
| Texto principal | `#F5F7F8` (`--text`) | |
| Texto auxiliar | `#A8B3BA` (`--text-muted`) | Legendas, metadados |
| **Acento (marca técnica)** | `#19C37D` (`--accent`) | CTAs sutis, links, labels de secção |
| Acento hover | `#27E08F` (`--accent-hover`) | Interação |
| **Alerta / erro pontual** | `#FF6B6B` (`--danger`) | Só onde fizer sentido na UI atual |
| Contornos sombras | `--border`, `--shadow` em CSS | Preferir sempre tokens |

**Proporção recomendável na interface:** predominantemente superfícies escuras neutras (~90%+) e **uso moderado do verde**: destaque, navegação, microcopy de secção (`section-label`). Evitar páginas “tudo neon” — o refinamento atual vem da **economia de cor**.

### Contraste

Respeitar leitura confortável em fundos escuros; novo componente deve ser validado contra **WCAG** (contraste texto/fundo).

---

## 6. Tipografia

| Elemento | Especificação |
|----------|----------------|
| **Família** | **Inter** (Google Fonts) |
| Pesos utilizados no site | **400, 500, 600, 700** |
| **Corpo de texto** | ~16 px (`html`), `line-height` ~**1.7** |
| Títulos | `h1`–`h3` com hierarquia em `clamp`/rem conforme [`style.css`](../css/style.css) |
| Labels de secção | `.section-label` — caixa alta, letter-spacing aumentado, cor de acento, “pill” arredondada |

Novos materiais (PDFs, redes) devem **preferir Inter** onde possível ou uma grotesque humanista próxima (system stack coerente: `Segoe UI`, `system-ui`).

---

## 7. Ritmo visual e UI

- **`border-radius`** padrão de cards e blocos: **16 px** (`--radius`).
- **Transição** canónica:** `0.35s cubic-bezier(0.4,0,0.2,1)` (`--transition`) — usar para hover/focus sutis coerentes.
- **Botões principais segundo o site:**
  - `btn-outline`: contorno + fundo neutro sobre escuro — CTA destacado dentro do modo escuro.
  - `btn-ghost`: enfatiza menos ou secundário ao lado do outline.

Elementos como **orbs** no hero fazem ambientação; devem obedecer a **preferência de redução de movimento** já tratada em CSS e JS (`prefers-reduced-motion`).

---

## 8. Íconografia e dados no visual

O site usa elementos **diagramáticos/abstratos** (barras, métricas) para sugerir análise **sem dados reais falsos**.

- No portfólio, **capturas verdadeiras** dos entregáveis são preferidas a stock genérico.
- Em caso de projeto confidencial, seguir campo `confidential` e copy que preserve o cliente.

---

## 9. Responsabilidade inclusiva como traço de marca

Não é apenas compliance: narrar que o site pensou em **teclado**, **focus**, **redução de movimento** reforça *eficiência* e respeito ao utilizador — alinhado à promessa Dash.

---

## 10. Materiais paralelos ao site

- **Apresentações e propostas comerciais:** mesma paleta e Inter; primeira slide com logo oficial e pelo menos uma ocorrência da frase de apoio se for institucional.
- **Redes / miniaturas:** manter cantos lisos ou arredondados coerentes (não obrigatório 16 px fora da web).

---

## 11. Onde não reinventar

- **Não** alterar cores de marca no CSS sem atualizar também este documento e o design system vivo.
- **Não** trocar a frase institucional fixa nem o posicionamento de “consultoria em dados” sem alinhamento com o time — o site é a referência externa atual.

Para evoluções futuras (novo slogan, rebranding formal), atualize primeiro este guia e depois `/index.html`, `meta`/`og` tags e eventualmente **`sitemap`/domínios** como no [guia de desenvolvimento](GUIA-DESENVOLVIMENTO.md).
