function gerarNumerosEntre(min,max, numerosProibidos) {
    if(min > max) {
        const [max,min] = [min,max];
    }
    return new Promise((resolve,reject)=>{
        try{
            const fator = max - min + 1;
            const aleatorio = parseInt((Math.random() * fator) + min)
            if(numerosProibidos.includes(aleatorio)){
                reject('Número repetido');
            } else {
                resolve(aleatorio);
            }
            resolve(aleatorio);
        } catch(e){
            reject(e);
        }
    })
}

async function gerarMegaSena(qtdNumeros) {

    try{

    const numeros = [];
    for(let i of Array(qtdNumeros).fill()){
        //await gerarNumerosEntre(1,60, numeros);
        numeros.push(await gerarNumerosEntre(1,60,numeros)); 
    }
    return numeros
    }catch(e){
        return 'Que chato!';
    }
}

gerarMegaSena(8).then(console.log).catch(console.log)