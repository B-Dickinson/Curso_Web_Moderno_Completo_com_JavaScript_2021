/* 

Elabore uma função que recebe um objeto com estudantes e suas notas. 

As notas de cada estudante estarão num array, conforme exemplo abaixo. 

Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.

*/

const calcularMedia = (array=[]) => {
    const retorno = array.reduce((total,nota) => {
        return total += nota;
    },0);

    return retorno / array.length;
};

const alunos = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
};

const receberMelhorEstudante = (object) => {
    const values = Object.values(object);
    const keys = Object.keys(object);
    let melhorMedia = 0;
    const melhorAluno = {nome:'',media:0};

    values.forEach((value,index) => {
        if(melhorMedia < calcularMedia(value)){
            melhorMedia = calcularMedia(value);
            melhorAluno['nome'] = keys[index];
            melhorAluno['media'] = melhorMedia;
        }
    });
            return melhorAluno;
};

console.log(receberMelhorEstudante(alunos));