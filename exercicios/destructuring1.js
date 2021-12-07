const pessoa = {
    nome:'Ana',
    idade: 20, 
    endereco: {
        logradouro:'Rua ABC',
        numero: 200
}}

// criar variaveis pegando os valores do OBJETO  pessoa

const {nome: nom, idade: ida, endereco: { logradouro: log, numero: num}} = pessoa;

console.log(nom);
console.log(ida);
console.log(log);
console.log(num);

// criar variaveis pegando os valores do ARRAY vet

const vet = [10,20,30,40,50];

let [ x, y, z ] = vet;

console.log(x);
console.log(y);
console.log(z);