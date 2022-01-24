/* 

Criar uma função que receba um array de números e retorne o menor número desse array.

*/

const menorNumero = (array = []) => array.reduce((prev, curr) => prev < curr ? prev:curr);

console.log(menorNumero([1,2,3,4,5]));
console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));