# Portfólio — Game Programmer

Site estático, multipágina, pronto pra publicar no **GitHub Pages**.

## Arquivos
| Arquivo | O que é |
|---|---|
| **`data.js`** | **O único arquivo que você precisa editar.** Todo o conteúdo (perfil + projetos). |
| `index.html` | Página inicial (hero + seções de projetos + contato). |
| `project.html` | Modelo único usado por **todas** as páginas de projeto (lê `?id=...`). |
| `app.js` | Lógica (carrossel, vídeo, renderização). Não precisa mexer. |
| `styles.css` | Estilos. Mude `--accent` no topo pra trocar a cor de destaque. |
| `favicon.svg` | Ícone do site (aba do navegador). Vetor, usado por padrão. |
| `favicon.ico` | Mesmo ícone, fallback pra navegadores/sistemas antigos. |
| `apple-touch-icon.png` | Mesmo ícone, versão pra "adicionar à tela inicial" no iOS. |

> **Mantenha todos os arquivos juntos na mesma pasta.** Crie uma subpasta `images/` para os prints.

---

## Como editar o conteúdo
Abra **`data.js`**. Tudo fica em `const PORTFOLIO = { ... }`:

- **Seu perfil** (`profile`): nome, links (email/GitHub/LinkedIn), pitch, about. Procure por `⚠️`.
- **Projetos** (`projects`): cada `{ ... }` é um projeto. Edite os textos.

### Adicionar imagens a um projeto
1. Coloque os arquivos em `images/` (ex.: `images/uniqkiller-1.jpg`).
2. No projeto, preencha:
   ```js
   images: ["images/uniqkiller-1.jpg", "images/uniqkiller-2.jpg", "images/uniqkiller-3.jpg"],
   ```
   - 0 imagens → placeholder estiloso (não quebra). 1 → mostra a imagem. 2+ → vira **carrossel** automático.

### Adicionar um vídeo (opcional)
No projeto, em `video:` cole um link do **YouTube** ou um arquivo `.mp4`:
```js
video: "https://www.youtube.com/watch?v=XXXXXXXX",
```
Se deixar vazio (`video: ""`), a página usa a primeira imagem como destaque automaticamente.

### Adicionar links (loja, etc.)
```js
links: [{ label: "Steam", url: "https://store.steampowered.com/app/…" }],
```

### Adicionar um projeto novo
Copie um bloco `{ ... }` dentro de `projects`, cole, e mude o **`slug`** (precisa ser único — é o que vai na URL). Defina `category: "fulldev"` ou `category: "porting"`.

### Ajustes rápidos
- Velocidade do carrossel: `carouselIntervalMs: 4000` (em milissegundos).
- Nomes das seções: objeto `sections`.
- Cor de destaque: `--accent` no topo de `styles.css`.

### Trocar o ícone do site
O ícone atual (`//` em gradiente, no estilo do site) é gerado a partir de `favicon.svg`. Se quiser um ícone diferente no futuro, basta substituir os três arquivos (`favicon.svg`, `favicon.ico`, `apple-touch-icon.png`) por outros do mesmo nome — não precisa editar HTML.

---

## Pré-visualizar no seu PC
Só **abrir o `index.html` no navegador** (duplo clique). Funciona offline, sem servidor.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `seu-usuario.github.io` ou `portfolio`).
2. Suba **todos** os arquivos (e a pasta `images/`) na raiz do repositório.
3. **Settings → Pages → Source:** *Deploy from a branch* → Branch `main` → `/(root)` → **Save**.
4. Em ~1 min: `https://seu-usuario.github.io/` (ou `/portfolio`).

Cada card leva a `project.html?id=<slug>` — as páginas de projeto funcionam automaticamente.
