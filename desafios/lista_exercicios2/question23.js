/* 

Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

*/

const palavraEmArray = (word) => word.split(' ');
const contarPalavras = (word) => palavraEmArray(word).length;

console.log(contarPalavras('Sou uma frase'));
console.log(contarPalavras("Me divirto aprendendo a programar"));