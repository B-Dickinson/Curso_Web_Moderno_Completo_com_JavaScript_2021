function real(partes,...valores){
    const result = []
    valores.forEach((valor,indice)=>{
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
        result.push(partes[indice], valor);
    });
        return result.join('');
}

const preco = 29.99;
const precoParcela = 11;

console.log(real `${preco}`);
console.log(real `${precoParcela}`);