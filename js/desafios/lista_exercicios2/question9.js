/* 

Escreva uma função que receba dois parâmetros. 

O primeiro parâmetro é o elemento que repetirá, 
enquanto que o segundo será o número de vezes que haverá repetição. 

Um array será retornado.

*/

function repetir(elemento, qtdVezes){
    let retorno = new Array(qtdVezes);
    retorno.fill(elemento,0,qtdVezes);
    return retorno;
}

console.log(repetir('Código',2));
console.log(repetir(7,3));