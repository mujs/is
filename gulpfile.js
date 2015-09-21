var gulp   = require('gulp'),
    concat = require('gulp-concat-sourcemap'),
    eslint = require('gulp-eslint'),
    mocha  = require('gulp-mocha'),
    del    = require('del');

gulp.task('clean', function () {
  return del('dist');
});

gulp.task('lint', ['clean'], function () {
  var src = [
    './src/**/*.js',
    './test/**.spec.js'
  ];

  return gulp.src(src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('scripts', ['lint'], function () {
  return gulp.src('./src/**/*.js')
    .pipe(concat('scripts.js', { sourcesContent: true }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('test-dependencies', ['lint'], function () {
  var src = [
    'define/src/define.js'
  ].map(function (path) { return 'dependencies/' + path; });

  return gulp.src(src)
    .pipe(concat('test-dependencies.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('test-suite', ['scripts', 'test-dependencies'], function () {
  var src = [
    'dist/test-dependencies.js',
    'dist/scripts.js',
    'test/**.spec.js'
  ];

  return gulp.src(src)
    .pipe(concat('test-suite.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('test', ['test-suite'], function () {
  return gulp.src('dist/test-suite.js')
    .pipe(mocha());
});