// estrategia 1 para gerar valor padrao
function soma(a,b,c){

     a = a || 1;
     b = b || 1;
     c = c || 1;
    return (a+b+c);
    
} // usando o ou, o parametro recebe um valor se for passado como argumento, se nao, recebe 1

console.log(soma(2), soma(2,4), soma(0,0,0));

// estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a,b,c){

    a = a !== undefined ? a : 1; //1 utiliza um operador ternario para adicionar um valor
    b = 1 in arguments ? b: 1 // 2 verifica se existe algum valor em argumentos em um determinado indice
    c = isNaN(c) ? 1 : c; // 3 verifica se o valor é um número ou nao

    return (a + b + c);
}

console.log(soma2(10,15,5),soma2(0,0,0), soma2(null, null, null));

// valor padrao do es2015

function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1,2,3) ,soma3(0,0,0));

