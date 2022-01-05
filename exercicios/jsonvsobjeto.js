const obj = {a: 1, b:2, c:3, soma(){return a+b+c}};

const jsonObj = JSON.stringify(obj);

console.log(jsonObj);

/* criando um novo json */
const jsonPessoa = `{
    "nome":"Raphael",
    "idade": 29,
    "pets": ["Eddie","Heitor","Hulk","Iara"]}`;

//convertendo json para object e atribuindo a pessoa    
const pessoa = JSON.parse(jsonPessoa);

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.pets);


