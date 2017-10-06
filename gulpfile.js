var SOURCE_PATH = './src';
var DESTINATION_PATH = './dist';

var gulp  = require('gulp');
var plumber = require('gulp-plumber');
var browserify = require('gulp-browserify');
var babelify = require('babelify');
var del = require('del');
var source = require('vinyl-source-stream');

gulp.task('html:build', ['html:clean'], function () {
    return gulp.src(SOURCE_PATH + '/index.html')
            .pipe(gulp.dest(DESTINATION_PATH));
});
gulp.task('html:clean', function () {
    return del(DESTINATION_PATH + '/index.html');
});
gulp.task('html:watch', function () {
    gulp.watch(SOURCE_PATH + '/index.html', ['html:build']);
});

gulp.task('styles:build', ['styles:clean'], function () {
    return gulp.src(SOURCE_PATH + '/css/*')
            .pipe(gulp.dest(DESTINATION_PATH + '/css'))
});
gulp.task('styles:clean', function () {
    return del(DESTINATION_PATH + '/css');
});
gulp.task('styles:watch', function () {
    gulp.watch(SOURCE_PATH + '/css/*', ['styles:build']);
});

gulp.task('images:build', ['images:clean'], function () {
    return gulp.src(SOURCE_PATH + '/img/*')
            .pipe(gulp.dest(DESTINATION_PATH + '/img'))
});
gulp.task('images:clean', function () {
    return del(DESTINATION_PATH + '/img');
});
gulp.task('images:watch', function () {
    gulp.watch(SOURCE_PATH + '/img/*', ['images:build']);
});

gulp.task('scripts:build', ['scripts:clean'], function () {
    return gulp.src(SOURCE_PATH + '/js/app.js', { read: false })
        .pipe(plumber())
        .pipe(browserify({
            transform: babelify.configure({
                presets: ['env']
            })
        }))
        .pipe(gulp.dest(DESTINATION_PATH + '/js'))
});
gulp.task('scripts:clean', function () {
    return del(DESTINATION_PATH + '/js/app.js');
});
gulp.task('scripts:watch', function () {
    gulp.watch(SOURCE_PATH + '/js/**/*', ['scripts:build']);
});

gulp.task('build', [
    'html:build',
    'styles:build',
    'images:build',
    'scripts:build'
]);

gulp.task('watch', [
    'html:watch',
    'styles:watch',
    'images:watch',
    'scripts:watch'
]);

gulp.task('serve', [
    'watch'
]);
