<script setup>
import { linkWhatsApp } from '../config'
import IconeWhatsApp from './IconeWhatsApp.vue'

const props = defineProps({
  id: { type: String, required: true },
  etiqueta: { type: String, default: '' },
  titulo: { type: String, required: true },
  descricao: { type: String, default: '' },
  itens: { type: Array, required: true },
  tipo: { type: String, default: 'bolo' }, // 'bolo' | 'fatia'
  tema: { type: String, default: 'manteiga' }, // 'manteiga' | 'rosa'
})

const emit = defineEmits(['abrir-foto'])

const mensagem = (item) =>
  props.tipo === 'fatia'
    ? `Olá! Vi no site e queria fatias parecidas com a "${item.nome}". 🍰`
    : `Olá! Vi no site e queria um bolo inspirado no "${item.nome}". 🍰`

const mensagemPersonalizada = () =>
  `Olá! Queria encomendar ${props.tipo === 'fatia' ? 'fatias de bolo' : 'um bolo personalizado'}. Minha ideia é: `
</script>

<template>
  <section :id="id" class="secao" :class="`tema-${tema}`">
    <div class="container">
      <header class="secao-topo">
        <span class="etiqueta">{{ etiqueta }}</span>
        <h2>{{ titulo }}</h2>
        <p v-if="descricao">{{ descricao }}</p>
      </header>

      <ul class="grade">
        <li v-for="(item, i) in itens" :key="item.arquivo" class="card">
          <button class="card-foto" type="button" @click="emit('abrir-foto', { itens, indice: i })">
            <img :src="item.imagem" :alt="`${titulo}: ${item.nome}`" loading="lazy" />
            <span class="zoom" aria-hidden="true">ampliar</span>
          </button>
          <div class="card-info">
            <div>
              <h3>{{ item.nome }}</h3>
              <p>{{ item.descricao }}</p>
            </div>
            <a
              :href="linkWhatsApp(mensagem(item))"
              target="whatsapp"
              rel="noopener"
              class="card-pedir"
              :aria-label="`Pedir um parecido com ${item.nome} pelo WhatsApp`"
              title="Quero um parecido"
            >
              <IconeWhatsApp />
            </a>
          </div>
        </li>
      </ul>

      <aside class="personalizado">
        <div>
          <h3>Não achou o que imaginava? Ótimo!</h3>
          <p v-if="tipo === 'fatia'">
            As fotos são só exemplos. Escolha os sabores, a quantidade e a embalagem para a sua ocasião.
          </p>
          <p v-else>
            As fotos são só exemplos. Seu bolo é feito do zero: tema, cores, tamanho, massa e recheio
            do seu jeito. Se tiver uma foto de referência, é só mandar.
          </p>
        </div>
        <a :href="linkWhatsApp(mensagemPersonalizada())" target="whatsapp" rel="noopener" class="btn btn-primario">
          <IconeWhatsApp /> {{ tipo === 'fatia' ? 'Montar meu pedido' : 'Quero um bolo personalizado' }}
        </a>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.secao {
  padding: 88px 0;
}

.tema-manteiga {
  background: var(--manteiga-claro);
  --destaque: var(--manteiga);
}

.tema-rosa {
  background: var(--rosa-claro);
  --destaque: var(--rosa-bebe);
}

.secao-topo {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 48px;
}

h2 {
  font-size: clamp(2.2rem, 4.5vw, 3.2rem);
  font-weight: 600;
  margin: 10px 0 14px;
}

.secao-topo p {
  margin: 0;
  color: var(--cacau-suave);
}

/* Grade em "mosaico" para respeitar o formato original de cada foto */
.grade {
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 3 300px;
  column-gap: 24px;
}

.card {
  break-inside: avoid;
  margin-bottom: 24px;
  background: #fff;
  border-radius: var(--raio);
  overflow: hidden;
  box-shadow: var(--sombra);
  transition: transform 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card-foto {
  display: block;
  position: relative;
  width: 100%;
  padding: 0;
  border: 0;
  background: var(--destaque);
  cursor: zoom-in;
}

.card-foto:focus-visible {
  outline: 3px solid var(--rosa-forte);
  outline-offset: -3px;
}

.card-foto img {
  width: 100%;
  height: auto;
  max-height: 520px;
  object-fit: cover;
}

.zoom {
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(255, 251, 240, 0.92);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.card-foto:hover .zoom,
.card-foto:focus-visible .zoom {
  opacity: 1;
}

.card-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px 20px;
  border-top: 5px solid var(--destaque);
}

h3 {
  font-size: 1.3rem;
  font-weight: 600;
}

.card-info p {
  margin: 4px 0 0;
  font-size: 0.92rem;
  color: var(--cacau-suave);
  line-height: 1.45;
}

.card-pedir {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--rosa-forte);
  color: #fff;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.card-pedir:hover {
  background: var(--rosa-escuro);
  transform: scale(1.08);
}

.card-pedir svg {
  width: 22px;
  height: 22px;
}

.personalizado {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px 32px;
  margin-top: 24px;
  padding: 32px 36px;
  border-radius: calc(var(--raio) + 6px);
  background: #fff;
  border: 2px dashed var(--rosa-forte);
}

.personalizado > div {
  flex: 1 1 380px;
}

.personalizado h3 {
  font-size: 1.6rem;
  margin-bottom: 6px;
}

.personalizado p {
  margin: 0;
  color: var(--cacau-suave);
}

@media (max-width: 600px) {
  .secao {
    padding: 64px 0;
  }

  .personalizado {
    padding: 26px 22px;
  }
}
</style>
