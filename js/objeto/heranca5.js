console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

/* Podemos criar novas funcoes aos prototipos existentes na linguagem */

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function() {
    return this[0];
}

console.log([1,2,3,4,5].first());

/* Podemos também sobrescrever metodos existentes -- NAO RECOMENDADO -- */

String.prototype.toString = function(){
    return 'LASCOU TUDO';
}

console.log(String.prototype.toString());