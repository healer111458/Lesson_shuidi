require('babel-core/register');

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');

const fix = false;

function isFixed(file) {
  return file.eslint !== null && file.eslint.fixed;
}

gulp.task('eslint', () =>
  gulp.src([
    'app/index.*.js',
    'app/*.js',
    'app/**/*.js',
    'app/**/**/*.js',
    'app/**/**/**/*.js',
  ])
  .pipe(eslint({ fix }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .pipe(gulpIf(isFixed, gulp.dest('src')))
);
