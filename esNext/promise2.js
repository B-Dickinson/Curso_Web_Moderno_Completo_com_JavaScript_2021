function gerarNumerosEntre(min,max) {
    if(min > max) {
        const [max,min] = [min,max];
    }
    return new Promise((resolve,reject)=>{
        try{
            const fator = max - min + 1;
            const aleatorio = parseInt((Math.random() * fator) + min)
            resolve(aleatorio);
        } catch(e){
            reject(e);
        }
    })
}

gerarNumerosEntre(1,100).then(console.log);