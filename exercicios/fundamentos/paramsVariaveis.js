 function soma(){
     let soma = 0;
     for(let i in arguments){
        soma += arguments[i];
     }
        return soma;
 }

 console.log(soma(3,5,2));
 console.log(soma(1));
 console.log(soma(1.5,1.5));
 console.log(soma('a','b','c'));

 // ja existe um operador na linguagem que faz isso chamado rest/spread 

