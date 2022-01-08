const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
];

const soNotas = (a) => a.nota;

console.log(alunos.map(soNotas));

const somatorioDasNotas = alunos.map(soNotas).reduce((acumulador, atual)=>{
    console.log(acumulador,atual);
    return acumulador+atual;
}); 

console.log(somatorioDasNotas);