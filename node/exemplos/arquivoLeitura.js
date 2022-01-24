const fs = require('fs');
const caminho = __dirname + '/arquivo.json';

// assincrono...
fs.readFile(caminho,'utf-8',(erro,conteudo) =>{
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port} ||||||| SOU ASSINCRONO`);
});

// sincrono...
const conteudo = fs.readFileSync(caminho,'utf-8');
console.log(conteudo + ' ||||| SOU SINCRONO\n');


// se for json podemos usar apenas o require
const config = require('./arquivo.json');
console.log(`${config.db.host}:${config.db.port}:${config.db.user}`);


// ler diretamente
fs.readdir(__dirname,(erro,arquivos) =>{
    console.log(arquivos);
});