/* 

crie uma promise que retorne o conteudo de dados.txt

*/

const fs = require('fs');

function readFile(fileName){
    return new Promise((resolve,reject)=>{
        const url = `${__dirname}/${fileName}`;
        try{
            fs.readFile(url,'utf8',(err,arquivo)=>{
                resolve(arquivo || err);
            });
        } catch(e){
            reject(e);
        }
    });
}

readFile('walk-lyrics.txt').then(console.log);