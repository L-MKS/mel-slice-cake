<script setup>
import { contato, linkWhatsApp } from '../config'
import IconeWhatsApp from './IconeWhatsApp.vue'
import boloFloral from '../assets/bolos/bolo-floral-amarelo.jpg'
import fatiaRedVelvet from '../assets/fatias/fatia-red-velvet.jpg'
import boloAbelhinha from '../assets/bolos/bolo-abelhinha.jpg'
</script>

<template>
  <section id="inicio" class="hero">
    <div class="container hero-inner">
      <div class="hero-texto">
        <span class="etiqueta">Confeitaria artesanal · sob encomenda</span>
        <h1>Bolos que viram <em>festa</em> e fatias que viram <em>carinho</em>.</h1>
        <p>
          Bolos decorados para aniversários e datas especiais, e fatias generosas embaladas
          para presentear ou se dar um mimo. Não temos cardápio fixo: cada bolo é feito à mão,
          do jeitinho que você pedir.
        </p>
        <div class="hero-acoes">
          <a :href="linkWhatsApp()" target="whatsapp" rel="noopener" class="btn btn-primario">
            <IconeWhatsApp /> Encomendar pelo WhatsApp
          </a>
          <a href="#bolos" class="btn btn-contorno">Ver inspirações</a>
        </div>
        <p class="hero-telefone">
          Encomendas e agendamentos: <a :href="linkWhatsApp()" target="whatsapp" rel="noopener">{{ contato.telefoneExibicao }}</a>
        </p>
      </div>

      <div class="hero-fotos" aria-hidden="true">
        <img class="foto foto-principal" :src="boloFloral" alt="" />
        <img class="foto foto-fatia" :src="fatiaRedVelvet" alt="" />
        <img class="foto foto-abelha" :src="boloAbelhinha" alt="" />
        <span class="selo">feito<br />à mão</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 85% 20%, var(--rosa-claro) 0, transparent 45%),
    linear-gradient(180deg, var(--manteiga-claro), var(--creme));
  padding: 64px 0 88px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 56px;
  align-items: center;
}

h1 {
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 600;
  margin: 14px 0 20px;
  letter-spacing: -0.01em;
}

h1 em {
  font-style: italic;
  color: var(--rosa-forte);
}

.hero-texto > p {
  max-width: 34em;
  color: var(--cacau-suave);
  margin: 0;
}

.hero-acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 30px 0 18px;
}

.hero-telefone {
  font-size: 0.95rem;
}

.hero-telefone a {
  font-weight: 800;
  text-decoration-color: var(--rosa-bebe);
  text-decoration-thickness: 3px;
  text-underline-offset: 4px;
}

.hero-fotos {
  position: relative;
  aspect-ratio: 1 / 1.02;
}

.foto {
  position: absolute;
  object-fit: cover;
  border-radius: var(--raio);
  box-shadow: var(--sombra);
  border: 6px solid #fff;
}

.foto-principal {
  inset: 0 12% 18% 6%;
  width: 82%;
  height: 82%;
  transform: rotate(-2deg);
}

.foto-fatia {
  width: 40%;
  height: 48%;
  right: 0;
  bottom: 0;
  transform: rotate(4deg);
}

.foto-abelha {
  width: 30%;
  height: 34%;
  left: 0;
  bottom: 2%;
  transform: rotate(-6deg);
}

.selo {
  position: absolute;
  top: -10px;
  right: 4%;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  text-align: center;
  background: var(--rosa-bebe);
  color: var(--rosa-escuro);
  font-family: var(--fonte-titulo);
  font-style: italic;
  font-weight: 700;
  line-height: 1.05;
  transform: rotate(10deg);
  box-shadow: 0 0 0 6px var(--creme), var(--sombra);
}

@media (max-width: 860px) {
  .hero {
    padding: 40px 0 64px;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-fotos {
    max-width: 460px;
    width: 100%;
    margin-inline: auto;
  }
}
</style>
