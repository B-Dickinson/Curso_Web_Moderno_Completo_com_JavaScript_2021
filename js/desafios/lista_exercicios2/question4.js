/* 

Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente 
como uma string. 

Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

*/

const nomeDoMes = (numeroDoMes) => {
    let meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    const mesEscolhido = (numeroDoMes > 0 && numeroDoMes <= 12) ? meses[numeroDoMes-1]
    :'Mês inválido';

    return mesEscolhido;
}

console.log(nomeDoMes(1));
console.log(nomeDoMes(4));