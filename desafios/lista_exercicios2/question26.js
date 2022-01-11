/* 

Desenvolva uma função que receba uma string como parâmetro e retorne essa string 
somente com as consoantes, ou seja, sem as vogais.

*/

const buscaVogais = (word) => {
    const vogais = 'aeiou';
    const lettersWord = word.split('');
    return lettersWord.filter(letra => !(vogais.includes(letra))).join('');
}

const removerVogais = (word) => buscaVogais(word);

console.log(removerVogais('Cod3r'));
console.log(removerVogais("Fundamentos"));
console.log(removerVogais('Inconstitucionalissimamente'));