/* 

Desenvolva uma função que recebe um caractere e uma string como parâmetros
e retorne a quantidade de vezes que o caractere se repete na string. 

A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.

*/

const contarCaractere = (char, word) => {
    let x = 0;
    for(let i of word){
        if(i.includes(char)){
            x++;
        }
    } 
        return x;
};

console.log(contarCaractere('r','A sorte favorece os audazes'));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));
console.log(contarCaractere("r", "O rato roeu a roupa do rei de Roma"));
console.log(contarCaractere("R", "O rato roeu a roupa do rei de Roma"));