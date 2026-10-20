// Dados de contato — altere aqui e o site inteiro é atualizado.
export const contato = {
  nome: 'Mel Slice Cake',
  telefoneExibicao: '+55 (41) 99671-8151',
  telefoneWhatsApp: '5541996718151',
  instagram: 'mel.slicecake',
}

export function linkWhatsApp(mensagem = 'Olá! Gostaria de fazer uma encomenda 🍰') {
  const texto = encodeURIComponent(mensagem)
  // No celular, wa.me abre o app direto. No computador, wa.me mostra uma
  // página intermediária ("Abrir app / WhatsApp Web"), então vamos direto ao Web.
  return ehCelular()
    ? `https://wa.me/${contato.telefoneWhatsApp}?text=${texto}`
    : `https://web.whatsapp.com/send?phone=${contato.telefoneWhatsApp}&text=${texto}`
}

function ehCelular() {
  if (typeof navigator === 'undefined') return true
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
}
