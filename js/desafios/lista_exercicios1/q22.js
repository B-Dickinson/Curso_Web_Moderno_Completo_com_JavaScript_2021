/* 

Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 

A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) 
que foi paga e o valor da anuidade. 

A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

*/

const valorAnuidade = (mes,valor = 0) => {
    let capital = valor;
    let juros = 0;
    let montante = 0;
    let tempo = 1; // anual

    switch(mes){
        case 1:    
            juros = (5/100);
            montante = capital * ((1 + juros)**tempo);
        break;
        case 2:
            juros = (10/100);
            montante = capital * ((1+ juros)**tempo);
        break;
        case 3:
            juros = (15/100);
            montante = capital * ((1 + juros)**tempo);
        break;
        case 4:
            juros = (20/100);
            montante = capital * ((1 + juros)**tempo);
        break;        
        case 5:
            juros = (25/100);
            montante = capital * ((1+ juros)**tempo);
        break;        
        case 6:
            juros = (30/100);
            montante = capital * ((1+ juros)**tempo);
        break;        
        case 7:
            juros = (35/100);
            montante = capital * ((1+ juros)**tempo);
        break;        
        case 8:
            juros = (40/100);
            montante = capital * ((1+ juros)**tempo);
        break;        
        case 9:
            juros = (45/100);
            montante = capital * ((1+ juros)**tempo);
        break;        
        case 10:
            juros = (50/100);
            montante = capital * ((1+ juros)**tempo);
        break;        
        case 11:
            juros = (55/100);
            montante = capital * ((1+ juros)**tempo);
        break;        
        case 12:
            juros = (60/100);
            montante = capital * ((1+ juros)**tempo);
        break;
        default:
            console.log('Mês inválido');        
    }
        return montante.toLocaleString('pt-br',{style:'currency',currency:'BRL'});
}

console.log(valorAnuidade(1,100));
console.log(valorAnuidade(2,100));
console.log(valorAnuidade(3,100));
console.log(valorAnuidade(12,100));