/* 

Desenvolva uma função que receba como parâmetro um número de 1 a 10. 

Internamente, na função, será gerado um número aleatório de 1 a 10.

A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, 
retorne "Parabéns! O número sorteado foi o X". 

Se não for igual, retorne "Que pena! O número sorteado foi o X".

X é o número que foi sorteado.

*/

const sortearNumero  = () => Number.parseInt((1 + (Math.random()) * (11-1)));

const funcaoDaSorte  = (numero) =>  {
    const numeroSorteado = sortearNumero();
    if(numero === numeroSorteado){
        return `Parabéns! O número sorteado foi o ${numeroSorteado}.`;
    } else {
        return `Que pena! O número sorteado foi o ${numeroSorteado}.`
    }
}

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(5));