/* 

 Utilizando a estrutura de repetição for, faça uma função que percorra um vetor 
 e conte quantos números deste vetor estão no intervalo [10,20] 
 (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) 
 e quantos deles estão fora do intervalo, escrevendo estas informações.

*/

const v = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

let qtdNumerosDentroDoIntervalo = 0;
let qtdNumerosForaDoIntervalo = 0;

function confereNumerosDentroEForaDoIntervalo(v = []){
    for(let i of v){
        if(i >= 10 && i <= 20){
            qtdNumerosDentroDoIntervalo++;
        } else {
            qtdNumerosForaDoIntervalo++;
        }
    }
        console.log(`Dentro do intervalo: ${qtdNumerosDentroDoIntervalo}.`);
        console.log(`Fora do intervalo: ${qtdNumerosForaDoIntervalo}.`);
}

confereNumerosDentroEForaDoIntervalo(v);