/* 

Escreva um algoritmo que percorre um vetor de inteiros 
e defina o maior e menor valor dentro do vetor.

*/

const v = [10,40,305,78,21,-3,0];

const maiorEMenorElementoDoArray = (v=[]) => {
    let maior = 0;
    let menor = 0;
        for(let i of v){
             if(i < menor){
                 menor = i;
             } else if(i > maior){
                 maior = i;
             }   
        }
    console.log(`Maior número: ${maior}.`);    
    console.log(`Menor número: ${menor}.`);    
}

maiorEMenorElementoDoArray(v);

