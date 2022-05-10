function relogio() {
  function criarHoraSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' })
  }
  const relogio = document.querySelector('.relogio')
  //
  /*const iniciar = document.querySelector('.iniciar')
  const pausar = document.querySelector('.pausar')
  const zerar = document.querySelector('.zerar')*/

  let segundos = 0
  let timer
  function iniciarRelogio() {
    timer = setInterval(function () {
      segundos++
      relogio.innerHTML = criarHoraSegundos(segundos)
    }, 1000)
  }
  document.addEventListener('click', function (e) {
    const ev = e.target

    if (ev.classList.contains('zerar')) {
      clearInterval(timer)
      relogio.classList.remove('pausado')
      relogio.innerHTML = '00:00:00'

      segundos = 0
    }
    if (ev.classList.contains('iniciar')) {
      relogio.classList.remove('pausado')
      clearInterval(timer)
      iniciarRelogio()
    }
    if (ev.classList.contains('pausar')) {
      relogio.classList.add('pausado')
      clearInterval(timer)
    }
  })

  /*iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciarRelogio()
  })
  
  pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado')
    clearInterval(timer)
  })
  zerar.addEventListener('click', function (event) {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
  })*/
}
relogio()
