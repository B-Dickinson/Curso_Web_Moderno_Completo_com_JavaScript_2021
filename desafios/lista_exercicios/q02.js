/* 

Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. 

(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

*/

function classificacaoTriangulo(a=0,b=0,c=0){

      if(a === b && b == c){

           return 'Triângulo Equilátero';

      } else if((a === b || b === c)||(b === c || c == a)) {

           return 'Triângulo Isósceles';

      } else if(a !== b && b !== c) {

           return 'Triângulo Escaleno'; 

      } 
}

console.log(classificacaoTriangulo(10,10,10));

console.log(classificacaoTriangulo(10,20,10));
console.log(classificacaoTriangulo(20,10,10));
console.log(classificacaoTriangulo(10,10,20));

console.log(classificacaoTriangulo(10,20,30));

console.log(classificacaoTriangulo(null));