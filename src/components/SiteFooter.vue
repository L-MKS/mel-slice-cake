<script setup>
import { contato, linkWhatsApp } from '../config'

const ano = new Date().getFullYear()
</script>

<template>
  <footer class="rodape">
    <div class="container rodape-inner">
      <div>
        <p class="marca">Mel <span>slice cake</span></p>
        <p class="frase">Bolos e fatias feitos à mão, sob encomenda.</p>
      </div>
      <ul class="contatos">
        <li>
          WhatsApp:
          <a :href="linkWhatsApp()" target="whatsapp" rel="noopener">{{ contato.telefoneExibicao }}</a>
        </li>
        <li>
          Instagram:
          <a :href="`https://instagram.com/${contato.instagram}`" target="_blank" rel="noopener">@{{ contato.instagram }}</a>
        </li>
      </ul>
    </div>
    <p class="copy">© {{ ano }} {{ contato.nome }}</p>
  </footer>
</template>

<style scoped>
.rodape {
  background: var(--cacau);
  color: var(--manteiga-claro);
  padding: 56px 0 28px;
}

.rodape-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
}

.marca {
  margin: 0;
  font-family: var(--fonte-titulo);
  font-style: italic;
  font-weight: 700;
  font-size: 2.2rem;
  color: var(--rosa-bebe);
}

.marca span {
  font-family: var(--fonte-texto);
  font-style: normal;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--manteiga);
}

.frase {
  margin: 4px 0 0;
  opacity: 0.8;
}

.contatos {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
}

.contatos a {
  font-weight: 800;
  color: var(--manteiga);
}

.copy {
  text-align: center;
  margin: 40px 0 0;
  font-size: 0.85rem;
  opacity: 0.6;
}
</style>
