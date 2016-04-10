'use strict';

var gulp = require('gulp');
var del = require('del');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var umdify = require('module.umdify');

gulp.task('clean', function () {
  return del('dist');
});

gulp.task('lint', ['clean'], function () {
  var sources = [
    'src/**/*.js',
    'test/**/*.js'
  ];

  return gulp.src(sources)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('umdify', ['lint'], function () {
  return gulp.src('src/**/*.js')
    .pipe(umdify())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['umdify'], function () {
  return gulp.src('test/**/*.js')
    .pipe(mocha());
});
