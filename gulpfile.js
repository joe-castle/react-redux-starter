'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('lint', () =>
  gulp.src(
    ['**/*.js', '!node_modules/**', '!test/**', '!gulpfile.js', '!webpack/**']
  )
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);

gulp.task('babel', () =>
  gulp.src('./src/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('build'))
);

gulp.task('default', ['lint', 'babel']);