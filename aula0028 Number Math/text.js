const numero = Number(prompt('Digite um numero'))
//numero = Number(numero)
const titulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

titulo.innerHTML = numero
texto.innerHTML += `<p>Raiz quadrada é: ${numero ** 0.5}.</p>`
texto.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}.</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.<p>`
texto.innerHTML += `<p>Arredodando para baixo: ${Math.floor(numero)}.</p>`
texto.innerHTML += `<p>Arredodando para cima: ${Math.ceil(numero)}.</p>`
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}.</p>`
