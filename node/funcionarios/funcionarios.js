const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');


const verificaMulherChinesa = (object) => object.pais === 'China' && object.genero === 'F' ? true:false;

/* Qual a mulher chinesa com o menor salário ? */

axios.get(url).then(funcionarios =>{
    const func = funcionarios.data;
    const filtrado = func.filter(verificaMulherChinesa);
    const reduzido = filtrado.reduce((retorno,pessoaAtual) => retorno = pessoaAtual.salario < retorno.salario ? pessoaAtual: retorno);

    //console.log(filtrado);
    console.log(`Nome: ${reduzido.nome}\nPaís: ${reduzido.pais}\nSalário: ${reduzido.salario}`);
});

