class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome,profissao = 'Professor'){
        super();
        this.sobrenome = sobrenome;
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor(nome, sobrenome, profissao){
        super(sobrenome, profissao);
        this.nome = nome;
        this.idade = 20;
    }

    toString(){
        return `\nNome: ${this.nome} ${this.sobrenome} \nProfissão: ${this.profissao}`;
    }
}

const avo = new Avo('Moreira');
const pai = new Pai('Silva');
const filho = new Filho('Eduardo', 'Ribeiro','Dev');

console.log(avo);
console.log(pai);
console.log(filho.toString());