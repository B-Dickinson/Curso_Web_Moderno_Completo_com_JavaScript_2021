/* 

Escreva uma função que receba um array de números e retorna a soma de todos os números desse array.

*/

const somarNumeros = (array = []) => array.reduce((total,valor) => valor + total);

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));
