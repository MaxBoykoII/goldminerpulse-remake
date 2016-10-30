const gulp = require('gulp');
const tscConfig = require('./tsconfig.json');
const del = require('del');
const $ = require('gulp-load-plugins')({
    lazy: true
});

const runSequence = require('run-sequence');

gulp.task('clean', () => {
    return del('./public');
});

gulp.task('copy', () => {
    return gulp.src(['./client/app/**/*.html', './client/app/systemjs.config.js'])
        .pipe(gulp.dest('./public'));
});

gulp.task('dependencies', () => {
    return gulp.src('./client/node_modules/**/*')
        .pipe(gulp.dest('./public/node_modules'));
});

gulp.task('clean:dist', () => {
    return del('./public/dist');
});

gulp.task('compile:ts', ['clean:dist'], () => {
    return gulp.src(['./client/app/**/*.ts', './client/typings/index.d.ts'])
        .pipe($.tslint({
            formatter: 'verbose',
            configuration: './tslint.json'
        }))
        .pipe($.tslint.report())
        .pipe($.typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('build', () => {
    runSequence('clean',
        'copy',
        'dependencies',
        'compile:ts');
});
