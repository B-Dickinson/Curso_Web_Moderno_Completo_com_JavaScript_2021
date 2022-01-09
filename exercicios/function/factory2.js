/*crie uma funciton para criarProduto passando como parametro nomeProd, preço e criar um novo objeto passando os valores a essa funcao */

/*Minha forma de fazer*/ 

function criarProduto(nomeProd,preco = 0){
    const nomeProduto = nomeProd;
    const valor = preco;
    function detalhes(){
        console.log(`Nome do produto: ${this.nomeProduto}\nPreço: ${preco.toLocaleString('BRL',{style:'currency',currency:'BRL'})}`);
    }
    const produto = {nomeProduto, valor, detalhes}

    return produto;
}

const caneta = criarProduto('Bic Cristal',2.50);
const oculos = criarProduto('Juju',350);

caneta.detalhes();
console.log();
oculos.detalhes();
console.log(); m
/* ------------------------------------------------------------------------------------------------------------------------ */
/* Forma do professor */


function criarProduto2(nome,preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

const notebook = criarProduto2('Notebook lenovo', 2199.49);
const ipad = criarProduto2('Ipad', 1199.49);

console.log(notebook);
console.log(ipad);