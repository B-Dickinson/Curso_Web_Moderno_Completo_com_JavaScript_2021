/* 

A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.

Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings.

A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

*/


const buscarPalavrasSemelhantes = (word,array)=>array.filter(x => x.toLowerCase().includes(word));

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]));
console.log(buscarPalavrasSemelhantes('ovo',['Novo','Povo','Povoado','Sessão']));