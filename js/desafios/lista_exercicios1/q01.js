/* 

Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.


*/


function operacoesMatematicas(a=0,b=0) {

    console.log(`${a} + ${b} = ${a+b}`);
    console.log(`${a} - ${b} = ${a-b}`);
    console.log(`${a} * ${b} = ${a*b}`);
    console.log(`${a} / ${b} = ${a/b}`);

}

operacoesMatematicas(5,10);