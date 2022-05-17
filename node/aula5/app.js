const path =require('path')
const caminhoAquivo = path.resolve(__dirname,'teste.json');

const escreve =require('./modules/escrever')
const ler = require('./modules/ler')

// const pessoas= [
//     {nome: 'joanderson'},
//     {nome: 'Mateus'},
//     {nome: 'Ravi'},
//     {nome: 'Emerson'},
// ];
// const json = JSON.stringify(pessoas,'',2);
// escreve(caminhoAquivo,json)

async function lerArquivo( caminho){
    const dados = await ler(caminho)
    rederizaDados(dados)
}
function rederizaDados(){
    console.log(dados)
}
lerArquivo(caminhoAquivo)