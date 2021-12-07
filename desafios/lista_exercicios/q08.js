/* 
 Pedro joga N jogos de basquete por temporada.
 Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo.
 Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho.
 
 Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, 
 
 escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor 
 com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. 
 
 (Número do pior jogo).
*/

function comparaValores(lista = []){
     let recorde;
     let piorJogo = 0;
     let piorPontuação;
     let qtdVezesQueBateuORecorde = 0;

        recorde = Number(lista[0]);
        piorPontuação = Number(lista[0]);

     for(let i in lista){

         if(Number(lista[i]) > recorde){
            recorde = lista[i]; 
            qtdVezesQueBateuORecorde++;
         }
         
         if(Number(lista[i]) < piorPontuação){
            piorPontuação = lista[i];
            piorJogo = Number(i);
         }
     }   
         return [`Quantidade de vezes que bateu o recorde: ${qtdVezesQueBateuORecorde} vezes.`,
         `Jogo ${++piorJogo} foi seu pior jogo, tendo feito apenas ${piorPontuação} pontos`];
}

let lista = ['10','20','20','8','25','3','0','30','1'];

console.log(lista);

console.log();


console.log(comparaValores(lista));

