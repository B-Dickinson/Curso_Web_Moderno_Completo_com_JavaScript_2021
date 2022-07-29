const gulp = require('gulp')
//const {series,parallel} = require('gulp')
const series = gulp.series;
const parallel = gulp.parallel;

const inicio = callback => {
    console.log('Tarefa Inicial!');
    return callback();
}

const antes2 = callback => {
    console.log('Tarefa antes 2');
    return callback();
}

const fim = callback => {
    console.log('Tarefa Fim!');
    return callback();
}

function copiar(callback){
       gulp.src('pastaA/**/*.txt')
       .pipe(gulp.dest('pastaB'));
        return callback();
}

module.exports.default = series(
    parallel(inicio,antes2),
    copiar,
    fim
);