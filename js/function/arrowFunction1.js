let dobro = function(a) {
    return 2*a;
}

dobro = (a) => {
    return 2*a;
};

dobro = a => 2 * a;

console.log(dobro(2));

let soma = (a=0,b=0) => a+b;
let subtracao = (a=0,b=0) => a-b;
let multi = (a=0,b=0) => a*b;

console.log(soma(10,10));
console.log(subtracao(10,10));
console.log(multi(10,10));