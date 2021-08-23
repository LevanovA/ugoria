"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const concat = require('gulp-concat');
const del = require("del");

//Преобразование sass в css
gulp.task("css", function () {
    return gulp.src("source/sass/style.scss")
        .pipe(plumber()) //Не останавливает автоматизацию при возникновении ошибок
        .pipe(sourcemap.init()) //Инициализируем отслеживаение изменения для создания карты
        .pipe(sass()) //Преобразовываем sass в css
        .pipe(postcss([ autoprefixer() ])) //Расставляем префиксы
        .pipe(csso()) //Минимизируем файл стилей
        .pipe(rename("style.min.css")) //Переименовываем файл стилей
        .pipe(sourcemap.write(".")) //Записываем изменения для создания карты
        .pipe(gulp.dest("build/css")) //Копируем файл в build
        .pipe(server.stream()); //Перезагружаем страницу
});

//Преобразование sass в css без минификации
gulp.task("full", function () {
    return gulp.src("source/sass/style.scss")
        .pipe(plumber()) //Не останавливает автоматизацию при возникновении ошибок
        .pipe(sourcemap.init()) //Инициализируем отслеживаение изменения для создания карты
        .pipe(sass()) //Преобразовываем sass в css
        .pipe(postcss([ autoprefixer() ])) //Расставляем префиксы
        .pipe(sourcemap.write(".")) //Записываем изменения для создания карты
        .pipe(gulp.dest("build")) //Копируем файл в build
});

//Собираем все js файлы в один
gulp.task("js", function () {
    return gulp.src("source/js/*.js")
        .pipe(sourcemap.init())
        .pipe(concat('main.js'))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("build/js"))
        .pipe(server.stream());
});

//Собираем все js библиотеки в одну.
gulp.task("vendor", function () {
    return gulp.src("source/js/vendor/*.js")
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest("build/js"))
        .pipe(server.stream());
});

//Запуск сервера
gulp.task('server', function () {
    server.init({
        server: 'build/',
        notify: false,
        open: true,
        cors: true,
        ui: false,
    });

    //Где отслеживаем изменения
    gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('css'));
    gulp.watch('source/img/icon-*.svg', gulp.series('sprite', 'html', 'refresh'));
    gulp.watch('source/*.html', gulp.series('html', 'refresh'));
    gulp.watch('source/js/*.js', gulp.series('js', 'refresh'));
});

//Перезагрузка страницы
gulp.task('refresh', function (done) {
    server.reload();
    done();
});

//Создание svg спрайта
gulp.task('sprite', function () {
    return gulp.src('source/img/icon-*.svg')
        .pipe(svgstore({inlineSvg: true}))
        .pipe(rename('sprite_auto.svg'))
        .pipe(gulp.dest('build/img'));
});

//Добавление спрайта в тег include
gulp.task('html', function () {
    return gulp.src('source/*.html')
        .pipe(posthtml([
            include(),
        ]))
        .pipe(gulp.dest('build'));
});

//Оптимизация изображений
gulp.task('images', function () {
    return gulp.src('source/img/**/*.{png,jpg,svg}')
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.mozjpeg({progressive: true}),
            imagemin.svgo(),
        ]))

        .pipe(gulp.dest('source/img'));

});

//Копирование файлов в папку build
gulp.task('copy', function () {
    return gulp.src([
        'source/fonts/**/*.{woff,woff2}',
        'source/img/**',
        'source//*.ico',
    ], {
        base: 'source',
    })
        .pipe(gulp.dest('build'));
});

//Очистка папки build
gulp.task('clean', function () {
    return del('build');
});

gulp.task('build', gulp.series('clean', 'copy', 'sprite', 'js', 'vendor', 'html', 'css'));
gulp.task('start', gulp.series('build', 'server'));
