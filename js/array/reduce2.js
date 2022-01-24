const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
];

const saoBolsistas = (a) => a.bolsista ? true:false;

// Desafio 1: Todos os alunos são bolsistas? //Use Reduce

const resposta1 = alunos.map(saoBolsistas).reduce((prev, current)=> prev && current);

console.log(`1) Todos os alunos são bolsistas? ${resposta1}\n`);

// Desafio 2: Algum aluno é bolsista?

const resposta2 = alunos.map(saoBolsistas).reduce((prev, current)=> prev || current);

console.log(`2) Algum aluno é bolsista? ${resposta2}`);

/* 

    RESPOSTA DO PROFESSOR 

                        prev       curr 
const todosBolsistas = (resultado, bolsista) => resultado && bolsista 

console.log(alunos.map(a => a.bolsita).reduce(todosBolsistas))

                        prev       curr
const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

*/