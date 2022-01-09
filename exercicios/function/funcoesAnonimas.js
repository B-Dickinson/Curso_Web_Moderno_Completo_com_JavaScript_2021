const soma = function(a=0,b=0){
    return a + b;
}

const imprimirResultado = function(a=0,b=0, operacao = soma){
    console.log(operacao(a,b));
}

imprimirResultado(5,3);
imprimirResultado(5,3, function(x=0,y=0){
    return x-y
});

imprimirResultado(5,3, (a=0,b=0) => a*b);

const pessoa = {
    falar: function(){
        console.log('Opa');
    }
}

pessoa.falar();