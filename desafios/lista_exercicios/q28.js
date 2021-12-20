/*

 Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

*/

const v = [1,2,3,4,5,6,7,8,9,10];
let qtdImpares = 0;
let qtdPares = 0;


for(let i of v){
    if(i % 2 == 0){
        qtdPares++;
    } else {
        qtdImpares++;
    }
}

console.log(`Existem ${qtdPares} números pares no vetor.`);
console.log(`Existem ${qtdImpares} números ímpares no vetor.`);