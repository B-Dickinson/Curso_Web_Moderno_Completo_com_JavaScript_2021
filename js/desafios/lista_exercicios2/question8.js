/* 

Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) 
e realize a multiplicação deles. 

Porém, não utilize o operador de mutiplicação.


*/

const multiplicar = (x=0,y=0) => {
    let resultado = 0;
    for(let i = 0; i < y; i++){
        resultado += x;
    }
        return resultado;
}

console.log(multiplicar(5,5));
console.log(multiplicar(0,7));
console.log(multiplicar(4,2));