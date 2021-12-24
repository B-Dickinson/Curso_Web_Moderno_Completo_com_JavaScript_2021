/* 

Escreva uma função que receba dois parâmetros início e fim. 

Essa função deve imprimir todos os números ímpares que estão entre esses valores.

Por padrão os valores devem ser 0 para início e 100 para fim. 

Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.


*/

function numerosImpares(inicio=0, fim=0) {
    if(inicio < fim){
            console.log(`Todos os ímpares no intervalo de ${inicio} a ${fim}. \n`);
        while(inicio <= fim){
            if(inicio % 2 != 0){
                console.log(inicio);
            }
                inicio++;
        }
    } else if(inicio > fim){
        console.log(`Todos os ímpares no intervalo de ${inicio} a ${fim}. \n`);
        while(inicio >= fim){
            if(inicio % 2 != 0){
                console.log(inicio);
            }
                inicio--;
        }
    } else {
        if(inicio,fim % 2 != 0){
            console.log(inicio);
        } else {
            console.log('O número digitado não é ímpar.');
        }
    }
}

numerosImpares(10,0);