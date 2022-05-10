const pessoas = [
  { id: 3, nome: 'LUIZ' },
  { id: 2, nome: 'MARIA' },
  { id: 1, nome: 'HELENA' }
]

/*const novasPesssoas = {}
for (const pessoa of pessoas){
  const {id} = pessoa
  novasPesssoas[id] = {...pessoa}
}*/

const novasPesssoas = new Map()
for (const pessoa of pessoas) {
  const { id } = pessoa
  novasPesssoas.set(id, { ...pessoa })
}
console.log(novasPesssoas)
