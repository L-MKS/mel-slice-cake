<script setup>
import { ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProductSection from './components/ProductSection.vue'
import HowToOrder from './components/HowToOrder.vue'
import SiteFooter from './components/SiteFooter.vue'
import PhotoLightbox from './components/PhotoLightbox.vue'
import IconeWhatsApp from './components/IconeWhatsApp.vue'
import { bolos, fatias } from './data/produtos'
import { linkWhatsApp } from './config'

const galeria = ref(null)
</script>

<template>
  <SiteHeader />

  <main>
    <HeroSection />

    <ProductSection
      id="bolos"
      etiqueta="Inspirações · bolos já feitos"
      titulo="Bolos"
      descricao="Estes são alguns bolos que já saíram da cozinha, não um cardápio. Use como inspiração: o tema, as cores, o tamanho e o sabor do seu são escolhidos por você."
      tipo="bolo"
      tema="manteiga"
      :itens="bolos"
      @abrir-foto="galeria = $event"
    />

    <ProductSection
      id="fatias"
      etiqueta="Inspirações · fatias já feitas"
      titulo="Fatias de bolo"
      descricao="Alguns exemplos de fatias altas e recheadas, embaladas na caixinha com garfinho. Sabores e quantidades são combinados com você: ótimas para lembrancinhas, cafés e mimos."
      tipo="fatia"
      tema="rosa"
      :itens="fatias"
      @abrir-foto="galeria = $event"
    />

    <HowToOrder />
  </main>

  <SiteFooter />

  <a :href="linkWhatsApp()" target="whatsapp" rel="noopener" class="whats-flutuante" aria-label="Falar no WhatsApp">
    <IconeWhatsApp />
  </a>

  <PhotoLightbox v-if="galeria" :itens="galeria.itens" :indice="galeria.indice" @fechar="galeria = null" />
</template>

<style>
.whats-flutuante {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 30;
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  box-shadow: 0 10px 24px -8px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease;
}

.whats-flutuante:hover {
  transform: scale(1.08);
}

.whats-flutuante svg {
  width: 32px;
  height: 32px;
}
</style>
