function falarDepoisDe(segundos, frase) {
    return new Promise((resolve,reject) => {
        if (!frase){
            reject('[ERROR], é necessário passar uma frase para a execução.')
        } else {
            setTimeout(() => {
                resolve(frase);
            }, segundos * 1000);
        }
    });
}

falarDepoisDe(5,'Olá amigo.').then(frase => frase.concat(' Tudo bem?'))
                             .then(frase => console.log(frase));
                             
falarDepoisDe(3,'Cheguei Primeiro!').then(frase => console.log(frase));

falarDepoisDe(2).then(frase => console.log(frase)).catch(e => console.log(e));
