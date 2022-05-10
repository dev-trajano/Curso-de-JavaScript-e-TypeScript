const h1 = document.querySelector('.container h1')
const data = new Date()

function getDiaSemanaTexto(diaSemana) {
  const diasSemana = ['domigo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta']
  return diasSemana[diaSemana]
}
function getNomeMes(numeroMes) {
  const meses = [
    'janeiro',
    'fervereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'desembro'
  ]
  return meses[numeroMes]
}
function zeroEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}

function criarData(data) {
  const diaSemana = data.getDay()
  const numeroMes = data.getMonth()

  const nomeDia = getDiaSemanaTexto(diaSemana)
  const nomeMes = getNomeMes(numeroMes)

  return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroEsquerda(
    data.getHours()
  )}:${zeroEsquerda(data.getMinutes())}`
}

h1.innerHTML = criarData(data)
