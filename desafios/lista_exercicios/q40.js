/* 

Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A

*/

function imprimirConceitosENotas(notas = [] , conceitos = []){
        const tamanho = conceitos.length;
    for(let i = 0; i < tamanho; i++){
        console.log(`Nota: ${notas[i]} \tConceito: ${conceitos[i]} \n`);
    }
}

function conceitos(notas = []){
        const conceito = [];

    for(let i of notas){
        if(i >= 0.0 && i <= 4.9){
            conceito.push('D');
        } else if(i <= 6.9) {
            conceito.push('C');
        } else if(i <= 7.0 && i <= 8.9) {
            conceito.push('B');
        } else if(i <= 10) {
            conceito.push('A');
        }
    }
            imprimirConceitosENotas(notas, conceito);
}

const notas = [4.5,3,10,9,7,6,5];

conceitos(notas);