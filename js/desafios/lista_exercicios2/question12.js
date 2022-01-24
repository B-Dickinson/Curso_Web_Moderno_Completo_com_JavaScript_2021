/* 

Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os,
estamos apenas modificando-o, mas, em essência, o objeto continua o mesmo,
ou seja a sua referência de memória é a mesma.

Num projeto que você está trabalhando, você foi designado a refatorar diversas funções
para que façam cópias de objetos e manipulem os dados dessas cópias, com o intuito de 
evitar efeitos indesejáveis em algumas situações devido a referências a objetos.

Abaixo, está a descrição de uma dessas funções.

Você escreverá uma função que recebe um objeto como primeiro parâmetro e, 
como segundo parâmetro, o nome de uma propriedade contida nesse objeto. 

Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro


*/

const obj1 = {nome:'Yusuke', idade: 14, sexo: 'M'};

const procuraAtributo = (object,property) => {
    for(let key in object){
        if(key == property){
            delete object[key];
        }
    }
}
const removerPropriedade = (object, property) => {
    procuraAtributo(object,property); // nao retorna nada, so modifica o object passado
    return object;
}  

//console.log(Object.is(removerPropriedade(obj1,'nome'),obj1));

console.log(removerPropriedade(obj1,'sexo'));

console.log(removerPropriedade({a: 1, b: 2}, "a"));

console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao"));

