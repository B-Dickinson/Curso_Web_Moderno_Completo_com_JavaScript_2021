const ordemCrescente = {
    _valor: 1, // convençao

    get getValor(){
        return this._valor++;
    },

    set setValor(valor){
        if(valor > this._valor){
            this._valor = valor;
        }
    }
}

console.log(ordemCrescente.getValor);
console.log(ordemCrescente.getValor);
console.log(ordemCrescente.getValor);
console.log(ordemCrescente.getValor);
console.log(ordemCrescente.getValor);