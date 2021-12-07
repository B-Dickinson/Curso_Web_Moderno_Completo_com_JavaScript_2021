/* 

Escreva um algoritmo que leia o código de um aluno e suas três notas.

Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3.

Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" 
se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. 

Repita a operação até que o código lido seja negativo.

*/
const calculaMediaPonderada = (n1,n2,n3) => {
    let peso1 = 0;
    let peso2 = 0;
    let peso3 = 0;

    if(n1 > n2 && n1 > n3){
        peso1 = 4;
        peso2 = 3;
        peso3 = 3;
    } else if(n2 > n3){
        peso2 = 4;
        peso1 = 3;
        peso3 = 3;
    } else {
        peso3 = 4;
        peso2 = 3;
        peso1 = 3;
    }

    let mediaPonderada = ((n1*peso1)+(n2*peso2)+(n3*peso3))/(peso1+peso2+peso3);

    return mediaPonderada;
}

const situacaoAluno = (media=0) => {
    if(media >= 5){
        return 'APROVADO';
    } else {
        return 'REPROVADO';
    }
}

const criarAluno = (codigo,n1=0,n2=0,n3=0) => {
        let media = calculaMediaPonderada(n1,n2,n3);
        let situacao = situacaoAluno(media);
    if(codigo < 0 ){
        return 'Código inválido';
    }
    return {
        codigo,
        nota1: n1,
        nota2: n2,
        nota3: n3,
        media,
        situacao
    }
}

const c1 = criarAluno(1,8,10,7);
const c2 = criarAluno(2,10,10,10);
const c3 = criarAluno(-5,10,10,10);
const c4 = criarAluno(3,4,5,2);



