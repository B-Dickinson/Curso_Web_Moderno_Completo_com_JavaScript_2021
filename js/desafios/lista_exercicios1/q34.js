/* 

Construa uma função que receberá duas Strings de tamanhos variados
e que retornará True ou False caso todos os caracteres
(independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras

*/

const verificarSePossuiAsMesmasLetras = (word1 = '', word2 = '') => {
    /* pegamos somente os caracteres*/
    let lettersWord1 = word1.toLowerCase().split('');
    let lettersWord2 = word2.toLowerCase().split('');
    let qtdLetrasExistentes = 0;

    /*criamos algoritmos de acordo com a maior palavra*/

    if(lettersWord1.length === lettersWord2.length){
        for(let i = 0; i < lettersWord1.length ; i++){
            if(lettersWord1[i] == lettersWord2[i]){
                qtdLetrasExistentes++;
            }
        }
            // verifica de acordo com o tamanho da palavra
            if(qtdLetrasExistentes === lettersWord1.length){
                return true;
            } else {
                return false;
            }

    } else if(lettersWord1.length > lettersWord2.length){
            /*nesse caso a primeira word é maior, entao...*/
            let positionWord2 = 0;

            for(let i = 0; i < lettersWord1.length; i++){
                if(lettersWord1[i] == lettersWord2[positionWord2]){
                    qtdLetrasExistentes++;
                    positionWord2++;
                }
            }
                // verifica de acordo com o tamanho da palavra
                if(qtdLetrasExistentes === lettersWord2.length){
                    return true;
                } else {
                    return false;
                }

    } else {
            let positionWord1 = 0;

        for(let i = 0; i < lettersWord2.length; i++){
        if(lettersWord2[i] == lettersWord1[positionWord1]){
            qtdLetrasExistentes++;
            positionWord1++;
        }
    }
            // verifica de acordo com o tamanho da palavra
            if(qtdLetrasExistentes === lettersWord1.length){
                return true;
            } else {
                return false;
            }

    }
}

console.log(verificarSePossuiAsMesmasLetras('Novo','Ovo'));
console.log(verificarSePossuiAsMesmasLetras('Ana','Banana'));

