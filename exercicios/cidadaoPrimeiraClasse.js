// Função em JS é First-Class Object (Citizens)
// Higher-order function 

// forma literal de criacao
function fun1(){ }

// Armazenar em uma variável
const fun2 = function() { };

// Armazenar em um array

const array = [()=>{return true},2,3];

console.log(array[0]());
console.log(array[1],array[2]);

// armazenar em um atributo de objeto
const obj = {};
obj.falar = () => { return 'Opa'};
console.log(obj.falar());

// passar uma funçao como parametro

function run(fun){
    fun();
}
run(()=>{console.log('Executando...')});

// Uma funçao pode retornar uma funcao

function soma(a,b){
    return function(c){
        console.log(a + b + c);
    }
}

//soma(10,15)(10);
const cincoMais = soma(5,2);
cincoMais(3);