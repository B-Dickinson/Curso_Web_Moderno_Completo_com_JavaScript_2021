const brasileirao = new Set();

brasileirao.add('Flamengo');
brasileirao.add('Vasco');
brasileirao.add('Fluminense');
brasileirao.add('São Paulo');
brasileirao.add('Corinthians');

brasileirao.forEach((value) => {
    if(value.toLowerCase() === 'flamengo'){
        console.log(value);
    }
});

console.log(brasileirao);

const nomes = ['Pedro','Jorge','Maria','João', 'Jorge'];
const nomesSet = new Set(nomes).add('Marcelo');
console.log(nomesSet);