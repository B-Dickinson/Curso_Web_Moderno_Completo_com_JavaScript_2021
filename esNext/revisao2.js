// arrow function
const soma = (a,b) => a + b;
console.log(soma(2,3));

// arrow function (this)

const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// parametros default
function log(texto = 'Node') {
    console.log(texto);
}

log('Sou mais forte!');

// operador rest/spread

function total(...numeros){

    let tot = numeros.reduce((acc,curr) => {
        return acc + curr;
    });
    
    return tot;
}

console.log(total(2,3,4,5));