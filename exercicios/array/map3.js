Array.prototype.map2 = function(callback){
        const array = [];
    for(let i = 0; i < this.length; i++){
        array.push(callback(this[i], i, this));
    }
        return array;
}

const carrinho = [
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Caderno","preco": 13.90}',
    '{"nome": "Kit de Lapis","preco": 41.22}',
    '{"nome": "Caneta","preco": 7.50}'
];

// crie um map que retorne um array apenas com os precos
const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);

console.log(resultado)