const carrinho = [
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Caderno","preco": 13.90}',
    '{"nome": "Kit de Lapis","preco": 41.22}',
    '{"nome": "Caneta","preco": 7.50}'
];

// crie um map que retorne um array apenas com os precos

const precos = carrinho.map((json) => JSON.parse(json)).map((precos) => precos.preco);

console.log(precos)