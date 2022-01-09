const array = ['Mercedes','Audi','BMW'];


function imprimir(nome,indice){
    console.log(`${indice+1}. ${nome}`);
}

array.forEach(imprimir);

function falar(funcao = ()=>{}){
    console.log('Comecei aqui...');

    funcao();

    console.log('Terminei aqui');

}

const falando = () => console.log('Falando.....');

falar(falando);