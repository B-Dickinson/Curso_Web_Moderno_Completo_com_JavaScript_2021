/* 

As regras para o cálculo dos anos bissextos são as seguintes:

De 4 em 4 anos é ano bissexto;

De 100 em 100 anos não é ano bissexto;

De 400 em 400 anos é ano bissexto;

Prevalecem as últimas regras sobre as primeiras.

Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.


*/

const verificaBissexto = (ano = 0) => {
    if((ano % 4 === 0 || ano % 400 === 0) && ano % 100 !== 0){
        console.log(`${ano} é um ano bissexto!`);
        return true;
    } else if((ano % 4 === 0 && ano % 400 === 0) && ano % 100 === 0) {
        console.log(`${ano} é um ano bissexto!`)
        return false;
    } else {
        console.log(`${ano} não é bissexto!`);
        return false;
    } 

}

verificaBissexto(2021);
verificaBissexto(2023);
verificaBissexto(2000);
verificaBissexto(2100);
verificaBissexto(2200);
verificaBissexto(2020);
verificaBissexto(2024);
verificaBissexto(1900);
verificaBissexto(1856);
verificaBissexto(2200);
verificaBissexto(2204);
verificaBissexto(2400);
verificaBissexto(2404);
verificaBissexto(100);
verificaBissexto(104);