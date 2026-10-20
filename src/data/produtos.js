// Catálogo do site. Para adicionar um item: coloque a foto em
// src/assets/bolos ou src/assets/fatias e acrescente uma linha abaixo
// com o nome do arquivo (sem a pasta).

const imagens = import.meta.glob('../assets/{bolos,fatias}/*.jpg', {
  eager: true,
  import: 'default',
})

const foto = (pasta, arquivo) => imagens[`../assets/${pasta}/${arquivo}`]

export const bolos = [
  { arquivo: 'bolo-floral-amarelo.jpg', nome: 'Floral amarelo', descricao: 'Chantininho amarelo com florzinhas rosas.' },
  { arquivo: 'bolo-abelhinha.jpg', nome: 'Abelhinha', descricao: 'Tema infantil com favos e abelhas.' },
  { arquivo: 'bolo-retangular-pudim.jpg', nome: 'Retangular com pudim', descricao: 'Cobertura branca com pudins no topo.' },
  { arquivo: 'bolo-arco-iris.jpg', nome: 'Arco-íris', descricao: 'Massa em camadas coloridas e número confeitado.' },
  { arquivo: 'bolo-branco-lacinhos.jpg', nome: 'Branco com lacinhos', descricao: 'Clássico, delicado e cheio de laços.' },
  { arquivo: 'bolo-chocolate-maracuja.jpg', nome: 'Chocolate retangular', descricao: 'Chocolate com confeito amarelo e raspas.' },
  { arquivo: 'bolo-azul-floquinhos.jpg', nome: 'Azul com flocos de neve', descricao: 'Tons de azul e coco ralado na base.' },
  { arquivo: 'bolo-torta-brownie.jpg', nome: 'Torta de brownie', descricao: 'Camadas de brownie, creme e doces no topo.' },
  { arquivo: 'bolo-festa-junina.jpg', nome: 'Festa junina', descricao: 'Bandeirinhas, balão e amendoim.' },
  { arquivo: 'bolo-coracoes.jpg', nome: 'Coraçõezinhos', descricao: 'Branco com coraçõezinhos vermelhos.' },
  { arquivo: 'bolo-natal-vermelho.jpg', nome: 'Vermelho natalino', descricao: 'Topo vermelho com flocos de neve.' },
  { arquivo: 'bolo-chocolate-brigadeiros.jpg', nome: 'Chocolate com docinhos', descricao: 'Chocolate com brigadeiros e beijinhos.' },
  { arquivo: 'bolo-retangular-chocolate-maracuja.jpg', nome: 'Retangular confeitado', descricao: 'Bordas trabalhadas e recheio aparente.' },
  { arquivo: 'bolo-chocolate-ninho.jpg', nome: 'Chocolate com calda', descricao: 'Calda escorrendo e confeito amarelo.' },
  { arquivo: 'bolo-lilas-personalizado.jpg', nome: 'Personalizado lilás', descricao: 'Com nome e topo do tema escolhido.' },
].map((b) => ({ ...b, imagem: foto('bolos', b.arquivo) }))

export const fatias = [
  { arquivo: 'fatia-red-velvet.jpg', nome: 'Red velvet', descricao: 'Massa vermelha, creme e morango.' },
  { arquivo: 'fatia-chocolate-doces.jpg', nome: 'Chocolate com docinhos', descricao: 'Recheio duplo e brigadeiros no topo.' },
  { arquivo: 'fatia-chocolate-brigadeiro.jpg', nome: 'Chocolate e creme', descricao: 'Massa de chocolate e creme branco.' },
  { arquivo: 'fatias-baunilha.jpg', nome: 'Baunilha', descricao: 'Massa clarinha, leve e fofinha.' },
  { arquivo: 'fatia-chocolate-creme.jpg', nome: 'Chocolatudo', descricao: 'Camadas de chocolate e creme.' },
  { arquivo: 'fatia-red-velvet-morango.jpg', nome: 'Red velvet com morango', descricao: 'Na caixinha, pronta para levar.' },
  { arquivo: 'fatia-chocolate-ninho.jpg', nome: 'Chocolate na caixinha', descricao: 'Ótima para presentear.' },
  { arquivo: 'fatias-para-presente.jpg', nome: 'Kit presente', descricao: 'Fatias embaladas com garfinho e tag.' },
  { arquivo: 'fatia-red-velvet-caixinha.jpg', nome: 'Red velvet para viagem', descricao: 'Embalada com garfinho de madeira.' },
  { arquivo: 'fatia-chocolate-caixinha.jpg', nome: 'Chocolate para viagem', descricao: 'Fatia generosa na caixinha.' },
].map((f) => ({ ...f, imagem: foto('fatias', f.arquivo) }))
