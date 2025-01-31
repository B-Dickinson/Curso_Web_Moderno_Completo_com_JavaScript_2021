const gulp = require('gulp');
const {watch} = require('gulp');
const webserver = require('gulp-webserver');
const { appHTML, appCSS, appJS, appIMG } = require('./app');

function servidor(){
    return gulp.src('build')
        .pipe(webserver({
            port:8080,
            open: true,
            livereload:true
        }))
}

function monitorarArquivos(cb){

    watch('src/**/*.html', gulp.series('appHTML'))
    watch('src/**/*.css', gulp.series('appCSS'))
    watch('src/**/*.js', gulp.series('appJS'))
    watch('src/assets/imgs/**/*.*', gulp.series('appIMG'))
    
    return cb();
}

module.exports = {
    monitorarArquivos,
    servidor
}