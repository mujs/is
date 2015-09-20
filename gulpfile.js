var gulp   = require('gulp'),
    concat = require('gulp-concat-sourcemap'),
    eslint = require('gulp-eslint')
    del    = require('del');

gulp.task('clean', function () {
  return del('output');
});

gulp.task('lint', ['clean'], function () {
  return gulp.src('./src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('dependencies', ['lint'], function () {
  var dependencies = [];

  return gulp.src(dependencies)
    .pipe(concat('dependencies.js', { sourcesContent: true }))
    .pipe(gulp.dest('./output/'));
});

gulp.task('scripts', ['lint'], function () {
  return gulp.src('./src/**/*.js')
    .pipe(concat('scripts.js', { sourcesContent: true }))
    .pipe(gulp.dest('./output/'));
});

gulp.task('test', ['dependencies', 'scripts']);
