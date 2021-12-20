/* 

 Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

*/


const v = [20,15,-2,-597,0,1,900,-80];

const confereQtdNumerosNegativos = (v=[]) => {
        let qtdNegativos = 0;
    for(let i of v){
        if(i < 0){
            qtdNegativos++;
        }
    }
        console.log(`Quantidade de números negativos: ${qtdNegativos}.`);
}

confereQtdNumerosNegativos(v);