/* 

Crie uma função que receba uma array e retorne o primeiro 
e o último elemento desse array como um novo array:

*/

const primeiroEUltimoElemento = (array = []) => {
    return array.filter((valor,indice,array) => {
        if(indice === 0 || indice === (array.length -1)){
            return valor;
        }
    });
}

console.log(primeiroEUltimoElemento([7,14,'Olá']));
console.log(primeiroEUltimoElemento([-100, "aplicativo", 16]));
console.log(primeiroEUltimoElemento([1,2,3,4,5,6,7,8,9,10]));