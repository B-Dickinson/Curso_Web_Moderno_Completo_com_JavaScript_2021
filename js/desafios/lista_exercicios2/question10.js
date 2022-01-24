/* 

Elabore uma função que recebe um número como parâmetro e retorne uma string 
com o símbolo "+" na quantidade especificada no parâmetro.

*/

function simboloMais(numero){
    let retorno = '';
    for(let i = 0; i < numero; i++){
        retorno += '+';
    }
        return retorno;
}

console.log(simboloMais(2));
console.log(simboloMais(4));
console.log(simboloMais(6));
console.log(simboloMais(8));
console.log(simboloMais(12));