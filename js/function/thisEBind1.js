const pessoa = {
    saudacao: 'Bom Dia!',
    falar(){
        console.log(this.saudacao);
    }
};

console.log( typeof pessoa)  

pessoa.falar();

const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();


/* 

Bind: objeto responsavel por amarrar o objeto
para ele ser o dono da execucao de um metodo sempre que 
ele for chamado, no caso acima, o bind aponta para o objeto pessoa
que tem o metodo falar() como um de seus atributos

"pessoa.falar do objeto pessoa"

ou


O metodo bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.

*/