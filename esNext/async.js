const resolverDepoisDe2Segundos = (x) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(x);
        },2000)
    })
}

async function adicionar1(x){
    let a = resolverDepoisDe2Segundos(20);
    let b = resolverDepoisDe2Segundos(30);
    return x + await a + await b;
}

// exibe 60 dps de 2 segundos
adicionar1(10).then(r => console.log(r,'depois de 2s.'))

async function adicionar2(x){
    let a = await resolverDepoisDe2Segundos(20)
    let b = await resolverDepoisDe2Segundos(30)
    return a + b + x;
}

adicionar2(100).then(r => console.log(r,'depois de 4s.'));