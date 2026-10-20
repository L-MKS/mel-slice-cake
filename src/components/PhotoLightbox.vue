<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'

const props = defineProps({
  itens: { type: Array, required: true },
  indice: { type: Number, required: true },
})
const emit = defineEmits(['fechar'])

const atual = ref(props.indice)
const item = computed(() => props.itens[atual.value])
const botaoFechar = ref(null)

watch(() => props.indice, (v) => (atual.value = v))

const anterior = () => (atual.value = (atual.value - 1 + props.itens.length) % props.itens.length)
const proxima = () => (atual.value = (atual.value + 1) % props.itens.length)

function teclado(e) {
  if (e.key === 'Escape') emit('fechar')
  if (e.key === 'ArrowLeft') anterior()
  if (e.key === 'ArrowRight') proxima()
}

onMounted(async () => {
  document.addEventListener('keydown', teclado)
  document.body.style.overflow = 'hidden'
  await nextTick()
  botaoFechar.value?.focus()
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', teclado)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="lightbox" role="dialog" aria-modal="true" :aria-label="item.nome" @click.self="emit('fechar')">
    <button ref="botaoFechar" class="fechar" type="button" aria-label="Fechar" @click="emit('fechar')">×</button>
    <button class="nav anterior" type="button" aria-label="Foto anterior" @click="anterior">‹</button>
    <figure>
      <img :src="item.imagem" :alt="item.nome" />
      <figcaption>
        <strong>{{ item.nome }}</strong> — {{ item.descricao }}
      </figcaption>
    </figure>
    <button class="nav proxima" type="button" aria-label="Próxima foto" @click="proxima">›</button>
  </div>
</template>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px 12px;
  background: rgba(74, 46, 42, 0.88);
}

figure {
  margin: 0;
  max-width: min(90vw, 900px);
  text-align: center;
}

img {
  max-height: 80vh;
  width: auto;
  margin-inline: auto;
  border-radius: 16px;
  border: 6px solid #fff;
}

figcaption {
  margin-top: 14px;
  color: var(--manteiga-claro);
}

figcaption strong {
  font-family: var(--fonte-titulo);
  font-size: 1.2rem;
  color: var(--rosa-bebe);
}

button {
  border: 0;
  cursor: pointer;
  background: var(--manteiga);
  color: var(--cacau);
  border-radius: 50%;
  font-size: 1.8rem;
  line-height: 1;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

button:focus-visible {
  outline: 3px solid var(--rosa-bebe);
  outline-offset: 3px;
}

.fechar {
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--rosa-bebe);
}

@media (max-width: 600px) {
  .nav {
    position: absolute;
    bottom: 20px;
  }

  .anterior {
    left: calc(50% - 60px);
  }

  .proxima {
    right: calc(50% - 60px);
  }

  img {
    max-height: 68vh;
  }
}
</style>
