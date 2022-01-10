/* 

Crie uma função que receba um array de elementos 
e retorne um array somente com os números presentes no
array recebido como parâmetro.

*/

const fitrarNumeros = (array) => array.filter(valor => typeof valor === 'number' ? valor:false)

console.log(fitrarNumeros(["Javascript", 1, "3", "Web", 20]));
console.log(fitrarNumeros(['a','b','c']));