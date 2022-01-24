/* 

Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. 

Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro.

A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.


*/

function funcao1(v = Number([]), n = 0){
     const array = [];
     for(let i of v){
        array.push(i*n);
     }   
        return array;
}

function funcao2(v = Number([]), n = 0){
    const array = [];
    for(let i of v){
       if(i > 5){
          array.push(i*n);
       }
    }   
       return array;
}

const v1 = [1,2,3,4,5];
const v2 = [5,6,7,8,9];

console.log(funcao1(v1,2));
console.log(funcao2(v2,2));