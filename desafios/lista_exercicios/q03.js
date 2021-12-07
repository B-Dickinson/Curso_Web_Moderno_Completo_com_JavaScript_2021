/* 

Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.


*/

function exp(base=0,expoente=0){
    return base**expoente;
}

let resultado = exp(10,10);

console.log(exp(2,2));
console.log();

console.log(exp(2,4));
console.log();

console.log(exp(2,5));
console.log();

console.log(exp(10,1));
console.log();

console.log(`10 com expoente 10 é igual a: ${resultado}`);