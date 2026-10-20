<script setup>
import { ref } from 'vue'
import { linkWhatsApp } from '../config'
import IconeWhatsApp from './IconeWhatsApp.vue'

const menuAberto = ref(false)
const links = [
  { href: '#bolos', texto: 'Bolos' },
  { href: '#fatias', texto: 'Fatias' },
  { href: '#encomendas', texto: 'Como encomendar' },
]
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <a href="#inicio" class="logo" aria-label="Mel Slice Cake, início">
        <span class="logo-mel">Mel</span>
        <span class="logo-sub">slice cake</span>
      </a>

      <button
        class="menu-toggle"
        :aria-expanded="menuAberto"
        aria-controls="menu"
        @click="menuAberto = !menuAberto"
      >
        <span class="sr-only">Abrir menu</span>
        <span class="barra" /><span class="barra" /><span class="barra" />
      </button>

      <nav id="menu" class="nav" :class="{ aberto: menuAberto }">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="menuAberto = false">{{ l.texto }}</a>
        <a :href="linkWhatsApp()" target="whatsapp" rel="noopener" class="btn btn-primario nav-cta">
          <IconeWhatsApp /> Encomendar
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 251, 240, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(226, 114, 143, 0.15);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo {
  display: flex;
  align-items: baseline;
  gap: 8px;
  text-decoration: none;
}

.logo-mel {
  font-family: var(--fonte-titulo);
  font-style: italic;
  font-weight: 700;
  font-size: 2rem;
  color: var(--rosa-forte);
  font-variation-settings: 'SOFT' 100;
}

.logo-sub {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--cacau-suave);
}

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav a:not(.btn) {
  text-decoration: none;
  font-weight: 700;
  position: relative;
}

.nav a:not(.btn)::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 3px;
  border-radius: 3px;
  background: var(--manteiga);
  transform: scaleX(0);
  transition: transform 0.25s ease;
}

.nav a:not(.btn):hover::after {
  transform: scaleX(1);
}

.nav-cta {
  padding: 10px 20px;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 0;
  padding: 10px;
  cursor: pointer;
}

.barra {
  width: 24px;
  height: 2.5px;
  border-radius: 2px;
  background: var(--cacau);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (max-width: 760px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 18px;
    padding: 24px 16px 28px;
    background: var(--creme);
    border-bottom: 1px solid rgba(226, 114, 143, 0.2);
    box-shadow: var(--sombra);
    display: none;
  }

  .nav.aberto {
    display: flex;
  }
}
</style>
