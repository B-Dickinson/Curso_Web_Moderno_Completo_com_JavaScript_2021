/* 

Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.


*/

function resultadoDivisao(dividendo=0,divisor=1){

        let resultadoDivisao = (dividendo/divisor);
        let resto = (dividendo%divisor);

        console.log(`${dividendo} / ${divisor} = ${resultadoDivisao}`);
        console.log(`O resto da divisão é igual a: ${resto}`);
        
}

resultadoDivisao(50,2);
console.log();

resultadoDivisao(50);
console.log();

resultadoDivisao(50,0);
console.log();

resultadoDivisao(80,3);
console.log();