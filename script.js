// Defina a data de término da promoção (ano, mês-1, dia, hora, min, seg)
const dataFim = new Date("2025-07-10T23:59:59").getTime();

const atualizaContador = setInterval(function() {
  const agora = new Date().getTime();
  const tempoRestante = dataFim - agora;

  const contador = document.getElementById("contador");

  if (tempoRestante <= 0) {
    clearInterval(atualizaContador);
    contador.innerHTML = "Promoção encerrada!";
  } else {
    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    contador.innerHTML = `Oferta Expira em ${dias}d ${horas}h ${minutos}min ${segundos}s`;
  }
}, 1000);