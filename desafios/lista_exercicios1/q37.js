/* 

Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo),
a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.

*/

function pa(n=0,a1=0,r=0){
    let a = a1; 
    let an = (a1 + (n-1)*r);
    let sn = (((a1+an)*n)/2);
    const numeros = [];

    for(let i = 1; i <= n; i++){
        if(i == 1){
            a *= 1;
        } else {
            a += r;
        }
            numeros.push(a);
    }
        console.log(numeros);
        console.log();
        console.log(`Soma: ${sn}`);
}

function pg(a1=0,n=0,r=0){
    let a = a1; 
    let an = (a1 * (r**(n-1)));
    let sn = (a1 * (r**n - 1)) / (r-1);
    const numeros = [];   

    for(let i = 1; i <= n; i++){
        if(i == 1){
            a *= 1;
        } else {
            a *= r;
        }
            numeros.push(a);
    }
        console.log(numeros);
        console.log();
        console.log(`Soma: ${sn}`);
}

pa(7,2,2);
console.log();
pg(1,10,2);