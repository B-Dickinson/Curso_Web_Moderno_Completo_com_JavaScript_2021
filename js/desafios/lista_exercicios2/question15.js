/* 

Elabore uma função que receba um array de números 
e retorne um array que tenha todos os números que são
pares e que também tenham índices pares

*/

const somenteValoresPares = (valor,indice) => {
    if(valor % 2 == 0){
        return valor;
    } else {
        return
    }
}
const somenteIndicesPares = (valor,indice) =>{
    if(indice % 2 === 0){
        return valor
    } else {
        return 
    }
};

const receberSomenteOsParesDeIndicesPares = (array) => 
    array.filter(somenteIndicesPares).filter(somenteValoresPares);

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));
console.log(receberSomenteOsParesDeIndicesPares([1,2,3,8,5,9]));