/* 

 Faça um algoritmo que calcule o fatorial de um número.


*/

const fatorial = (x=0) =>{
        let fat = 1;
    for(let i = x; i > 0; i--){
        fat *= i;
    }
        return fat;
}

console.log(fatorial(3));
console.log(fatorial(4));
console.log(fatorial(5));
console.log(fatorial(6));