/*

 Construa uma função que receba como parâmetros as alturas e 
 as taxas de crescimento anuais de duas crianças 
 e calcule se existe uma criança menor, caso exista se a criança menor
 ultrapassará a maior e em quantos anos isso acontecerá. 
 Utilize centímetros para as unidades de medida.

*/


function calculaCrescimento(altura1=0,taxa1=0,altura2=0,taxa2=0){
        let tempo = 0;
        let existeMenor = false;
        let alturaDoMenor = 0;
        let taxaDeCrescimento = 0;

    if(altura1 === altura2){
        console.log('As crianças possuem a mesma altura.');
    } else if(altura1 < altura2){
        existeMenor = true;
        alturaDoMenor = altura1;

        if(taxa1 < taxa2){
            while(alturaDoMenor <= altura2){
                alturaDoMenor += taxa1;
                tempo++;
            }
        } else if(taxa1 === taxa2){
            while(alturaDoMenor <= altura2){
                taxaDeCrescimento = (taxa1 / 100)*10;
                alturaDoMenor += taxaDeCrescimento;
                tempo++;
            }
        }

        console.log(`A criança 1 é menor que a 2. Possuindo ${altura1.toFixed(2)}m.`);
        console.log(`Em ${tempo} ano(s) a criança 1 passará da altura da criança 2. Ficando com ${alturaDoMenor.toFixed(2)}m`);

    } else {

        existeMenor = true;
        alturaDoMenor = altura2;

        if(taxa1 > taxa2){
            while(alturaDoMenor <= altura1){
                alturaDoMenor += taxa2;
                tempo++;
            }
        } else if(taxa1 === taxa2){
            while(alturaDoMenor <= altura1){
                taxaDeCrescimento = (taxa1 / 100)*10;
                alturaDoMenor += taxaDeCrescimento;
                tempo++;
            }
        }

        existeMenor = true;
        tempo = (taxa1 - taxa2);

        console.log(`A criança 2 é menor que a 1. Possuindo ${altura2.toFixed(2)} cm.`);
        console.log(`Em ${tempo+1} ano(s) a criança 1 passará da altura da criança 2. Ficando com ${alturaDoMenor.toFixed(2)}m.`);
    }

        
}

calculaCrescimento(1.20,2,1.10,2);