# Mel Slice Cake — site

Site estático em Vue 3 + Vite para a Mel Slice Cake (bolos e fatias de bolo sob encomenda).

## Rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist/ para publicar
```

A pasta `dist/` pode ir para qualquer hospedagem estática (Netlify, Vercel, GitHub Pages, Hostinger…).

## Onde editar

- **Telefone / Instagram:** `src/config.js`
- **Bolos e fatias (nomes, descrições, ordem):** `src/data/produtos.js`
- **Fotos:** `src/assets/bolos` e `src/assets/fatias` (versões otimizadas usadas no site).
  As fotos originais do WhatsApp ficam em `src/assets/originais`.
- **Cores e fontes:** variáveis no topo de `src/style.css`
