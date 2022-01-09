/* 

Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.


*/


function isDivisivelPor3(x=0){
    if(x % 3 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(isDivisivelPor3(5));
console.log(isDivisivelPor3(7));
console.log(isDivisivelPor3(6));
console.log(isDivisivelPor3(3));
console.log(isDivisivelPor3(9));
console.log(isDivisivelPor3(168));