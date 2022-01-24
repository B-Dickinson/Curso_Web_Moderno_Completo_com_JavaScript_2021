/* 

Crie uma função que recebe um array de números e retorna o segundo maior número 
presente nesse array.

*/

function segundoMaior(array) {
    let menor = array[0];
    let maior = array[0];
    let segundoMaior = 0;

    for(let i = 0; i < array.length;i++){
        if(array[i] < menor){
            menor = array[i];
        } else if(array[i] > maior){
            segundoMaior = maior;
            maior = array[i];
        }

        if(array[i] >= menor && array[i] < maior && array[i] > segundoMaior){
            segundoMaior = array[i];
        }
    }

        return segundoMaior;

}

console.log(segundoMaior([12,16,1,5]));
console.log(segundoMaior([8,4,5,6]));
console.log(segundoMaior([10,4,500,64]));
console.log(segundoMaior([8000,44,5,0]));