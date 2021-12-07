/* 

Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:


Plano   Aumento
 A       10%
 B       15%
 C       20%


Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. 

Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function monetario(x=0){
    return x.toLocaleString('pt-br',{style:'currency',currency:'BRL'});
}

const calcularNovoSalario = function(planoDeTrabalho = '',salario = 0){
    let novoSalario = 0;
    switch(planoDeTrabalho){
        case 'A':
            novoSalario = (salario + (salario * 0.1));
            console.log(`Plano: ${planoDeTrabalho}\nSalário atual: ${monetario(salario)}\nNovo Salário: ${monetario(novoSalario)}`);
        break;
        case 'B':
            novoSalario = (salario + (salario * 0.15));
            console.log(`Plano: ${planoDeTrabalho}\nSalário atual: ${monetario(salario)}\nNovo Salário: ${monetario(novoSalario)}`);
        break;
        case 'C':
            novoSalario = (salario + (salario * 0.2));
            console.log(`Plano: ${planoDeTrabalho}\nSalário atual: ${monetario(salario)}\nNovo Salário: ${monetario(novoSalario)}`);
        break;
        default:
            console.log(`Plano de trabalho inválido!\nSalário: ${monetario(salario)}`);
    }
}

calcularNovoSalario('A',1200);

console.log();

calcularNovoSalario('B', 1200);

console.log();

calcularNovoSalario('C', 1200);

console.log();

calcularNovoSalario('G', 1200);