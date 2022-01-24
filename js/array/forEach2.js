const aprovados = ['Agatha','Aldo','Daniel','Raquel'];

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this);
        // elemento atual/ indice atual/ array atual        
    }
};


aprovados.forEach2((nome) => {console.log(nome)});