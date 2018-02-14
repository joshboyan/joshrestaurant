"use strict";
//imports
const gulp = require('gulp');
const htmlbeautify = require('gulp-html-beautify');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');

//paths
const htmlSources = './*.html';
const cssSources = './css/*.less'

gulp.task('less', function () {
  return gulp.src(cssSources)
    .pipe(less())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('htmlbeautify', function() {
    gulp.src('./*.html')
      .pipe(htmlbeautify({indentSize: 2}))
      .pipe(gulp.dest('./'))
  });

gulp.task('default', ['htmlbeautify', 'less']);