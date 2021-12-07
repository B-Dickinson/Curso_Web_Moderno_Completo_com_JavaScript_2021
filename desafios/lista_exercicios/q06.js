/* 

Elabore duas funções que recebem três parâmetros: 

capital inicial, taxa de juros e tempo de aplicação. 

A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

*/

let capitalInicial = 620;
let taxa = 1.5;
let tempo = 24;

function jurosSimples(capInicial = 0, taxaJuros = 0, tempoAplicacao = 0){
    return (capInicial * (taxaJuros/100) * tempoAplicacao) + capInicial;
}

function jurosCompostos(capInicial = 0, taxaJuros = 0, tempoAplicacao = 0){
    return (capitalInicial * (((taxaJuros/100)+1) ** tempoAplicacao));   
}   

let montanteSobJurosSimples = jurosSimples(capitalInicial, taxa , tempo);
let montanteSobJurosCompostos = jurosCompostos(capitalInicial, taxa , tempo);

console.log(`- Capital inicial: ${capitalInicial}`);
console.log(`- Taxa de juros: ${taxa}`);
console.log(`- Tempo de aplicação: ${tempo} meses`);

console.log();
console.log();

console.log('Juros Simpes:');
console.log(montanteSobJurosSimples.toLocaleString('pt-br',{style:'currency',currency:'BRL'}));

console.log();

console.log('Juros Compostos');
console.log(montanteSobJurosCompostos.toLocaleString('pt-br',{style:'currency',currency:'BRL'}));