/* 

Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo)
e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. 

Quando o parâmetro inclusivo for true, tenha "entre" como inlusivo, ou seja, 
considerando se numero é igual a minimo ou a maximo.

Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, 
portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.

*/

const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
    
    if(inclusivo){

    if(minimo > maximo){
        return numero <= minimo && numero >= maximo ? true:false 
    } else {
        return numero >= minimo && numero <= maximo ? true:false;
    }

    } else {
        if(!((numero === minimo) || (numero === maximo))){
            if(minimo > maximo){
                return numero <= minimo && numero >= maximo ? true:false 
            } else {
                return numero >= minimo && numero <= maximo ? true:false;
            } 
        } else {
            return false;
        }
    }
};

console.log(estaEntre(10,100,10));
console.log(estaEntre(10,1,20)); // true
console.log(estaEntre(16,100,160));
console.log(estaEntre(3,150,3));
console.log(estaEntre(3,150,3,true));