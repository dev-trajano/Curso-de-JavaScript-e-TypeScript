const fs = require('fs').promises;

module.exports = (caminho, dados) =>{
    fs.writeFile(caminho,dados,json,{flag: 'w'});

}