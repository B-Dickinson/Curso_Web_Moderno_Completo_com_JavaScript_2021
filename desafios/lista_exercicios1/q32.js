/* 

Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.


*/

const v = [10,15,35,90,47];

const mediaAritmetica = (v=[]) => {
    let soma = 0;
    let qtdValores = 0;
    let media = 0;

    for(let i of v){
        soma += i;
        qtdValores++; 
    }
        media = (soma/qtdValores);

    return media.toLocaleString({style:'decimal'});    
}

console.log(mediaAritmetica(v));