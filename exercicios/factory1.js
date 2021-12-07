function criarPessoa(){
    return {
        nome: 'Bruce',
        idade: 21,
        sexo: 'M',
        falar(){
            console.log(`Oi, meu nome é ${this.nome}`);
        } 
    }
}

const p1 = criarPessoa();
//const falar = p1.falar.bind(p1);

console.log(p1);
p1.falar();
falar();