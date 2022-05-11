// const mod1 = require('./mod1')

// console.log(mod1.falaNome())
//////////
// const {Pessoa} = require('./mod1')
// const p1 = new Pessoa("Luiz")
// console.log(p1)

/////////////

const path = require('path')
const axios = require('axios')
const {Pessoa} = require('./mod1')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json').then(reponse => console.log(reponse.data))
.catch(er => console.log(e));