const {series} = require('gulp');
const gulp = require('gulp');
const babel  = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

function transformarJS(callback){
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: "env"
        }))
        .pipe(uglify())
        .on('error',err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
    return callback();
}

function fim(cb){
    console.log('Finalizado!!!');
    return cb();
}

exports.default = series(transformarJS,fim);