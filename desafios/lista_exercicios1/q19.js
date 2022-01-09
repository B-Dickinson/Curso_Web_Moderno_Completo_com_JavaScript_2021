/* 

 O cardápio de uma lanchonete é o seguinte:

    Código      Descrição do Produto        Preço
    100         Cachorro Quente             R$ 3,00
    200         Hambúrguer Simples          R$ 4,00
    300         Cheeseburguer               R$ 5,50
    400         Bauru                       R$ 7,50
    500         Refrigerante                R$ 3,50
    600         Suco                        R$ 2,80


Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. 

Considere que a cada execução somente será calculado um item.

Use o comando switch. Crie um caso default para produto não existente.


*/
function monetario(x=0){
    return x.toLocaleString('pt-br',{style:'currency',currency:'BRL'});
}

const comprarLanche = (codigo=0,qtd=0) => {
        let total = 0;
        let valor = 0;

    switch(codigo){
        case 100:
            valor = 3;
            total = (valor * qtd);
            console.log(`Total a pagar: ${monetario(total)}`);
        break;
        case 200:
            valor = 4;
            total = (valor * qtd);
            console.log(`Total a pagar: ${monetario(total)}`);
        break;
        case 300:
            valor = 5.50;
            total = (valor * qtd);
            console.log(`Total a pagar: ${monetario(total)}`);
        break;
        case 400:
            valor = 7.50;
            total = (valor * qtd);
            console.log(`Total a pagar: ${monetario(total)}`);
        break;
        case 500:
            valor = 3.50;
            total = (valor * qtd);
            console.log(`Total a pagar: ${monetario(total)}`);
        break;
        case 600:
            valor = 2.50;
            total = (valor * qtd);
            console.log(`Total a pagar: ${monetario(total)}`);
        break;
        default:
            console.log('Produto não existente.');
    }
}

comprarLanche(100,3);
comprarLanche(700,3);
comprarLanche(300,5);