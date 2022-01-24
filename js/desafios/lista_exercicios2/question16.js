/* 

A fim de manter o calendário anual ajustado com o movimento de translação da Terra,
criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.

Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4.

Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.

Com isso em mente, desenvolva uma função que recebe um número correspondente
a um ano e retorna se ele é bissexto ou não.

*/


const checarAnoBissexto = (ano) => {
    return new Date(ano,1,29).getDate() === 29;
} 

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));
console.log(checarAnoBissexto(600));
console.log(checarAnoBissexto(500));
console.log(checarAnoBissexto(2200));
console.log(checarAnoBissexto(2204));