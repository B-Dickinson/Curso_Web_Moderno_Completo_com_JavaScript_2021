/* 

Desenvolva uma função que recebe um objeto como parâmetro 
e retorne um outro objeto que corresponde ao ao objeto recebido como parâmetro, 
porém com as posições das chaves e valores invertidas

*/
const inverter = (object) => {
    let keys = Object.keys(object);
    let values =  Object.values(object);
    const retorno = {};

    values.forEach((values,index)=>{
        retorno[values] = keys[index]
    })
        return retorno;
};

console.log(inverter({ a: 1, b: 2, c: 3}));