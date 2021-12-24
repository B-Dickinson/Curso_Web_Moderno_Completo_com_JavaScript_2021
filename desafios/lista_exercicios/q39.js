/* 

Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB
e vice versa e assim sucessivamente.

Faça a troca sem utilizar uma variável auxiliar.


*/

function trocaValoresArray(vA = new Array(5), vB = new Array(5)){
        const tamanho = vA.length;
       
    if(vA.length == vB.length){
        for(let i = 0; i < tamanho; i++){
            vA.push(vB[i]);
            vB.push(vA[i]);
            vA.shift();
            vB.shift();
        }    
        console.log(`Vetor A: ${vA} \n`);
        console.log(`Vetor B: ${vB} \n`);

    } else {
        console.log('Os arrays precisam ter o mesmo tamanho.');
    }    

}

const v1 = [1,2,3,4,5];
const v2 = [10,11,12,13,14];

trocaValoresArray(v1,v2);