function meuObjeto(){}

console.log(meuObjeto.prototype);

const obj1 = new meuObjeto();
const obj2 = new meuObjeto();

console.log(obj1.__proto__ === obj2.__proto__);

console.log(meuObjeto.prototype === obj1.__proto__);

meuObjeto.prototype.nome = 'Anônimo';
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`);
}

obj1.nome = 'Rafael';
obj1.falar();

obj2.nome = 'Larissa';
obj2.falar();

const obj3 = Object.create(meuObjeto.prototype);
obj3.nome = 'Obj3';
obj3.falar();

// resumindo

console.log((new meuObjeto).__proto__ === meuObjeto.prototype);

console.log(meuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);