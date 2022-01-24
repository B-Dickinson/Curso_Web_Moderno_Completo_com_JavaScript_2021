/* 

Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. 

Cada um destes vetores deverá conter quatro valores, 
sendo o primeiro com valores inteiros, o segundo com strings
e o terceiro com valores decimais.

Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console.

Todos os elementos do vetor resultado deverão aparecer no console.

*/

const vetorInteiro = [1,2,3,4];
const vetorString = ['5','6','7','8'];
const vetorDouble = [9.0,10.0,11.0,12.0];

/* fazer direto no console */
console.log('Primeira maneira:');
console.log();
console.log(vetorInteiro.concat(vetorString,vetorDouble));
console.log();

/* criar um array que recebe os valores dos outros arrays*/
let vetorUniversal = [].concat(vetorInteiro,vetorString,vetorDouble);

console.log('Segunda maneira:');
console.log();
console.log(vetorUniversal);