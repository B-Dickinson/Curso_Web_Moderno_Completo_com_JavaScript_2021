function Pessoa(nome){ // constructor 
    this.nome = nome;
    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const criarPessoa = nome => {
    return {
        falar(){
            console.log(`Meu nome é ${nome}`);
        }
    }
}

const p1 = new Pessoa('João');
const p2 = criarPessoa('Bruce');

p1.falar();
p2.falar();