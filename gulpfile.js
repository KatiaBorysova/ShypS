let gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css'),
    clean = require('gulp-clean'),
    sftp = require('gulp-sftp'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    notify = require('gulp-notify');

//connect server
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});

//SCSS
gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename('main.css'))
        .pipe(gulp.dest('app/css/'))
        .pipe(connect.reload())
        /*.pipe(notify("Done CSS, Alex!"));*/
});

//HTML
gulp.task('html', function () {
    gulp.src('app/*.html')
        .pipe(connect.reload());
    /*.pipe(notify("Done HTML, Alex!"));*/
});

//JS
gulp.task('js', function () {
    gulp.src('app/js/**/*.js')
        .pipe(connect.reload());
    /*.pipe(notify("Done JS, Alex!"));*/
});

//Fonts Build
gulp.task('fonts', function () {
    return gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts/'));
});
/*
gulp.task('icons', function() {
    return gulp.src('app/bower_components-/Font-Awesome/webfonts/**.*')
        .pipe(gulp.dest('dist/fonts/'));
});
*/
//Images Build
gulp.task('images', function () {
    return gulp.src('app/images/*')
        .pipe(gulp.dest('dist/images/'));
});

//Sftp
gulp.task('sftp', function () {
    return gulp.src('dist/**/*')
        .pipe(sftp({
            host: 'website.com',
            user: 'johndoe',
            pass: '1234',
            remotePath: ''
        }));
});

//Clean
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});



//Build
gulp.task('build', ['clean', 'fonts', 'images'], function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});

//Wiredep
gulp.task('wiredep', function () {
    gulp.src('./app/index.html')
        .pipe(wiredep({
            directory: "app/bower_components"
        }))
        .pipe(gulp.dest('./app'));
});

//watch
gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', ['html']);
    gulp.watch('app/js/**/*.js', ['js']);
});
//default
gulp.task('default', ['connect', 'sass', 'html', 'js', 'watch']);