"use strict";

// packages
const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create(); // create a browser sync instance.
const htmlbeautify = require('gulp-html-beautify');

//paths
const htmlSources = './*.html';
const cssSources = './css/*.less'

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            //Change address below to load different page with browserSync
            index: "index.html"
        }
    });
});

gulp.task('html', function() {
    gulp.src('./*.html')
      .pipe(htmlbeautify({indentSize: 2}))
      .pipe(gulp.dest('./'))
  });

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(function(file){
            return file.base
        }))
})

gulp.task('watch', function() {
    gulp.watch(htmlSources, ['html']).on('change', browserSync.reload);
    gulp.watch(cssSources, ['css']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch'])