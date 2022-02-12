// operador ... rest (juntat)/ Spread(espalhar)
// usar rest com parâmetro de função

function soma(...numeros) {
    return numeros.reduce((acc,curr)=>acc+curr);
}
   
//usar spread com arrays ou objects
const funcionario = {nome:'Maria', salario: 12348};
const clone = {...funcionario, ativo: true};
console.log(clone);

const grupoA = ['João','Pedro','Gloria'];
const grupoFinal = ['Marcela',...grupoA,'Maria'];
console.log(grupoFinal);