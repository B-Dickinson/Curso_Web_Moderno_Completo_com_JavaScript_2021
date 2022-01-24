const nums = [1,2,3,4,5];

let resultado = nums.map(function(valor){
    return valor * 2;
});

//let resultado = nums.map((valor)=> valor * 2);

console.log(resultado)

console.log();

const soma10 = (x=0) => x + 10;
const triplo = (x=0) => x * 3;
const paraReal = (x = '') => `${x.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`;

// maps aninhados/ encadeados
resultado = nums.map(soma10).map(triplo).map(paraReal);

console.log(resultado);