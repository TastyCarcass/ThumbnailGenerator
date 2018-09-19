
var gulp  = require('gulp'),
    electron      = require('electron-prebuilt'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    runElectron = require("gulp-run-electron");

gulp.task('scripts', function(){
    return gulp.src('pregulp/scripts/**/**.*')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('.build/app/scripts'));
});

gulp.task('html', function(){
    return gulp.src('pregulp/html/**.html')
        .pipe(gulp.dest('.build/app/'));
});

gulp.task('css', function(){
    return gulp.src('pregulp/CSS/**.css')
        .pipe(gulp.dest('.build/app/'));
});

gulp.task('partials', function(){
    return gulp.src('pregulp/html/partials/**.html')
        .pipe(gulp.dest('.build/app/partials/'));
});

gulp.task('images', function(){
    return gulp.src('pregulp/images/**/**.*')
        .pipe(gulp.dest('.build/app/images'));
});

gulp.task('fonts', function(){
    return gulp.src('pregulp/fonts/**/**.*')
        .pipe(gulp.dest('.build/app/fonts'));
});

gulp.task('bowerFiles', function(){
    return gulp.src('bower_components/**/*.*')
        .pipe(gulp.dest('.build/bower_components'))
});

gulp.task('nodeFiles', function(){
    return gulp.src('node_modules/**/*.*')
        .pipe(gulp.dest('.build/node_modules'))
});

gulp.task('packageFile', function(){
    return gulp.src('package.json')
        .pipe(gulp.dest('.build/'))
});

gulp.task('mainJSFile', function(){
    return gulp.src('pregulp/main.js')
        .pipe(gulp.dest('.build/app/'))
});

gulp.task('watch', function(){
    gulp.watch('pregulp/**/*.js',['scripts']);
    gulp.watch('pregulp/**/*.html',['html']);
});

gulp.task('dostuff', ['scripts', 'html', 'css', 'partials', 'images', 'fonts']);

gulp.task('setup', ['dostuff', 'packageFile', 'mainJSFile', 'watch']);

gulp.task('run', function () {
    gulp.src("app")
    .pipe(runElectron(["--cli-argument", "--another"], {cwd: ".build/app"}));
});