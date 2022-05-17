const express = require('express')

const app = express()

//            criar    lerArquivo   atualizar    apagar
// CRUD   ->  CREATE,  READ,        UPDATE,      DELETE
//            POST     GET          PUT          DELETE

// http://meusitest.com/  <- GET -> Entrega a pagina/
// http://meusitest.com/sobre  <- GET -> Entrega a pagina/sobre
// http://meusitest.com/contato  <- GET -> Entrega a pagina/contato

app.get('/', (req, res) => {
  res.send(`

    <form action="/" method="post">
    Nome do cliente: <input type="text" name="nome">
    <button>formulário</button>
    </form>

    `)
})

app.get('/testes/:idUsuario?', (req, res) => {
  console.log(req.params)
  res.send(req.params.idUsuario)
})

app.post('/', (req, res) => {
  res.send('Recebi o formulário')
})

app.get('/test', (req, res) => {
  console.log(req.params)
  res.send('oi')
})

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000')
  console.log('listening on port 3000')
})
