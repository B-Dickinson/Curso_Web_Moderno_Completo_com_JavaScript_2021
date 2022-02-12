// com promise...
const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise( (resolve,reject) => {

        http.get(url, res => {
            let resultado = '';
    
            res.on('data', dados => {
                resultado += dados ;
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e);
                }
            })
        }) 
    });
}

// pegar todos os alunos de todas as turmas usando async

const getAlunos = async () => {

    const ta = await getTurma('A');
    const tb = await getTurma('B');
    const tc = await getTurma('C');

    return [].concat(ta,tb,tc);

}

const agruparAlunosEImprimir = async (asyncFunction) => {
    const async = await asyncFunction().then(alunos => alunos.map(aluno => aluno.nome));
    console.log(async);
}

function soma(v){return v + v};

agruparAlunosEImprimir(getAlunos); // aparece depois por ser assíncrona

console.log(soma(10)) // aparece primeiro pois é síncrona




