const inputTarefa = document.querySelector('.nova-tarefa')
const addTarefa = document.querySelector('.add-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
  const li = document.createElement('li')
  return li
}
inputTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return
    criarTarefa(inputTarefa.value)
  }
})

function limpaInput() {
  inputTarefa.value = ''
  inputTarefa.focus() //foco no input html
}

function criarBotaoApagar(li) {
  li.innerHTML += ' '
  //cria a button apagar no html
  const botaoApagar = document.createElement('button')
  botaoApagar.innerHTML = 'Apagar'
  //cria a class apagar no html
  botaoApagar.setAttribute('class', 'apagar')
  botaoApagar.setAttribute('title', 'Apagar essa tarefa')
  li.appendChild(botaoApagar)
}

function criarTarefa(textoInput) {
  const li = criaLi()
  li.innerHTML = textoInput
  tarefas.appendChild(li)
  limpaInput()
  criarBotaoApagar(li)
  salvarTarefas()
}

addTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return
  criarTarefa(inputTarefa.value)
})

document.addEventListener('click', function (e) {
  const el = e.target
  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    salvarTarefas()
  }
})

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li')
  const listaDeTarefas = []

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
    listaDeTarefas.push(tarefaTexto)
  }

  const tarefaJSOM = JSON.stringify(listaDeTarefas)
  localStorage.setItem('tarefas', tarefaJSOM)
}

function adicionarTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas)

  for (let tarefa of listaDeTarefas) {
    criarTarefa(tarefa)
  }
}
adicionarTarefasSalvas()
