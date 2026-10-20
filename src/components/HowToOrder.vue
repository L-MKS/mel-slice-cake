<script setup>
import { contato, linkWhatsApp } from '../config'
import IconeWhatsApp from './IconeWhatsApp.vue'

const passos = [
  { titulo: 'Escolha', texto: 'Veja os bolos e as fatias e separe o que mais combina com a sua ocasião.' },
  { titulo: 'Chame no WhatsApp', texto: 'Conte o sabor, o tamanho, o tema e a quantidade. A gente monta tudo com você.' },
  { titulo: 'Agende', texto: 'Escolha a data e se prefere retirar ou receber em casa. Encomende com antecedência para garantir.' },
]

const formasDeReceber = [
  {
    icone: '🛍️',
    titulo: 'Retirada',
    link: 'Quero retirar',
    texto: 'Você busca a encomenda no dia e horário combinados.',
    mensagem: 'Olá! Gostaria de fazer uma encomenda para RETIRADA. 🍰',
  },
  {
    icone: '🛵',
    titulo: 'Entrega combinada',
    link: 'Quero combinar a entrega',
    texto: 'Me diga o endereço e combinamos a entrega e a taxa pelo WhatsApp.',
    mensagem: 'Olá! Gostaria de fazer uma encomenda com ENTREGA. Meu endereço é: ',
  },
]
</script>

<template>
  <section id="encomendas" class="encomendas">
    <div class="container">
      <header class="topo">
        <span class="etiqueta">Como encomendar</span>
        <h2>Simples como uma fatia de bolo</h2>
      </header>

      <ol class="passos">
        <li v-for="(p, i) in passos" :key="p.titulo">
          <span class="numero">{{ i + 1 }}</span>
          <h3>{{ p.titulo }}</h3>
          <p>{{ p.texto }}</p>
        </li>
      </ol>

      <div class="receber">
        <h3 class="receber-titulo">Como você prefere receber?</h3>
        <div class="receber-opcoes">
          <article v-for="f in formasDeReceber" :key="f.titulo" class="opcao">
            <span class="opcao-icone" aria-hidden="true">{{ f.icone }}</span>
            <div>
              <h4>{{ f.titulo }}</h4>
              <p>{{ f.texto }}</p>
              <a :href="linkWhatsApp(f.mensagem)" target="whatsapp" rel="noopener" class="opcao-link">
                {{ f.link }} →
              </a>
            </div>
          </article>
        </div>
      </div>

      <div class="chamada">
        <div>
          <p class="chamada-rotulo">Contato e agendamento</p>
          <a class="chamada-telefone" :href="linkWhatsApp()" target="whatsapp" rel="noopener">{{ contato.telefoneExibicao }}</a>
        </div>
        <a :href="linkWhatsApp()" target="whatsapp" rel="noopener" class="btn btn-primario">
          <IconeWhatsApp /> Chamar no WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.encomendas {
  padding: 88px 0;
  background: var(--creme);
}

.topo {
  text-align: center;
  margin-bottom: 48px;
}

h2 {
  font-size: clamp(2.2rem, 4.5vw, 3.2rem);
  font-weight: 600;
  margin-top: 10px;
}

.passos {
  list-style: none;
  padding: 0;
  margin: 0 0 56px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.passos li {
  padding: 32px 28px;
  border-radius: var(--raio);
  background: #fff;
  border: 2px dashed var(--rosa-bebe);
}

.numero {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--manteiga);
  font-family: var(--fonte-titulo);
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 18px;
}

h3 {
  font-size: 1.45rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.passos p {
  margin: 0;
  color: var(--cacau-suave);
}

.receber {
  margin: -16px 0 56px;
}

.receber-titulo {
  text-align: center;
  margin-bottom: 20px;
}

.receber-opcoes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.opcao {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  padding: 26px 24px;
  border-radius: var(--raio);
  background: var(--manteiga-claro);
  border: 2px solid var(--manteiga);
}

.opcao:nth-child(2) {
  background: var(--rosa-claro);
  border-color: var(--rosa-bebe);
}

.opcao-icone {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  font-size: 1.6rem;
}

h4 {
  font-family: var(--fonte-titulo);
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 4px;
}

.opcao p {
  margin: 0 0 10px;
  color: var(--cacau-suave);
}

.opcao-link {
  font-weight: 800;
  color: var(--rosa-escuro);
  text-decoration: none;
}

.opcao-link:hover {
  text-decoration: underline;
}

.chamada {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 36px 40px;
  border-radius: calc(var(--raio) + 8px);
  background: linear-gradient(120deg, var(--manteiga) 0%, var(--rosa-bebe) 100%);
}

.chamada-rotulo {
  margin: 0;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.chamada-telefone {
  font-family: var(--fonte-titulo);
  font-size: clamp(1.7rem, 4vw, 2.5rem);
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 600px) {
  .encomendas {
    padding: 64px 0;
  }

  .chamada {
    padding: 28px 22px;
  }
}
</style>
