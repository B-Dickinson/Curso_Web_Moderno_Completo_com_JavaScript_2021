/* 

Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.

Seu programa deve mostrar apenas as notas utilizadas.

Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação 
(note que não foram exibidas informações sobre as demais cédulas): 

1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

*/

function monetario(x=0){
    return x.toLocaleString('pt-br',{style:'currency',currency:'BRL'});
}

const informaNotas = (qtd1,qtd2,qtd3,qtd4,qtd5) => { 
        let msg1R$ = '';
        let msg5R$ = '';
        let msg10R$ = '';
        let msg50R$ = '';
        let msg100R$ = '';

        let um = 0;
        let cinco = 0;
        let dez = 0;
        let cinquenta = 0;
        let cem = 0;
        let totalQtdNotas = (qtd1+qtd2+qtd3+qtd4+qtd5);

    for(let i = 0; i <= totalQtdNotas; i++){  

        if(qtd5 > 0){
            cem++;
            qtd5--;
            msg100R$ = ` ${cem} nota(s) de ${monetario(100)}.`;
            continue;
        } else if(qtd4 > 0){
            cinquenta++;
            qtd4--;
            msg50R$ = ` ${cinquenta} nota(s) de ${monetario(50)}.`;
            continue; 
        } else if(qtd3 > 0){
            dez++;
            qtd3--;
            msg10R$ = ` ${dez} nota(s) de ${monetario(10)}.`; 
            continue;
        } else if(qtd2 > 0){
            cinco++;
            qtd2--;
            msg5R$ = ` ${cinco} nota(s) de ${monetario(5)}.`;
            continue; 
        } else if(qtd1 > 0){
            um++;
            qtd1--;
            msg1R$ = ` ${um} nota(s) de ${monetario(1)}.`;
            continue;
        } else {
            break;
        } 
    }

        console.log(msg100R$,msg50R$,msg10R$,msg5R$,msg1R$);

}

function contagemNotas(valor=0) {
    let qtd1 = 0;
    let qtd5 = 0;
    let qtd10 = 0;
    let qtd50 = 0;
    let qtd100 = 0;
    let sobra = valor;


    for(let i = 0; i < valor; i++){
        if(sobra > 0 && sobra < 5){
            sobra -= 1;
            qtd1++;
            continue;
        } else if(sobra > 0 && sobra < 10){
            sobra -= 5;
            qtd5++;
            continue;
        } else if(sobra > 0 && sobra < 50){
            sobra -= 10;
            qtd10++;
            continue
        } else if(sobra > 0 && sobra < 100){
            sobra -= 50;
            qtd50++;
            continue;
        } else if(sobra > 0 && sobra >= 100){
            sobra -= 100;
            qtd100++;
            continue;
        } else {
            break;
        }        
    }
    

    console.log();
    informaNotas(qtd1,qtd5,qtd10,qtd50,qtd100);

    }

//contagemNotas(18);
contagemNotas(85);
//contagemNotas(155);