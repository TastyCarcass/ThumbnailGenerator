
var gulp  = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch');

gulp.task('scripts', function(){
    return gulp.src('pregulp/scripts/**/**.*')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('.build/scripts'));
});

gulp.task('html', function(){
    return gulp.src('pregulp/**/**.html')
        .pipe(gulp.dest('.build'));
});

gulp.task('css', function(){
    return gulp.src('pregulp/CSS/**.css')
        .pipe(gulp.dest('.build'));
});

gulp.task('partials', function(){
    return gulp.src('pregulp/html/partials/**.html')
        .pipe(gulp.dest('.build/partials/'));
});

gulp.task('images', function(){
    return gulp.src('pregulp/images/**/**.*')
        .pipe(gulp.dest('.build/images'));
});

gulp.task('fonts', function(){
    return gulp.src('pregulp/fonts/**/**.*')
        .pipe(gulp.dest('.build/fonts'));
});

gulp.task('bowerFiles', function(){
    return gulp.src('bower_components/**/*.*')
        .pipe(gulp.dest('.build/bower_components'))
});

gulp.task('packageFile', function(){
    return gulp.src('package.json')
        .pipe(gulp.dest('.build/'))
});

gulp.task('watch', function(){
    gulp.watch('pregulp/**/*.js',['scripts']);
    gulp.watch('pregulp/**/*.html',['html']);
});

gulp.task('dostuff', ['scripts', 'html', 'css', 'partials', 'images', 'fonts', 'bowerFiles']);

gulp.task('setup', ['dostuff', 'packageFile', 'watch']);