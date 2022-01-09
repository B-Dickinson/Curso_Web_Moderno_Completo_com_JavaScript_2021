/* 

Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

*/


const maiorOuIgual = (primeiro,segundo) => (primeiro >= segundo && 
                     (typeof(primeiro) === (typeof(segundo))) 
                     ) ? true: false;

console.log(maiorOuIgual(0,0));
console.log(maiorOuIgual(0,"0"));
console.log(maiorOuIgual(5,1));