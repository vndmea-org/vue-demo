const gulp = require('gulp');

gulp.task('src', function() {
  return gulp.src(['src/*.html']).pipe(gulp.dest('release/src'));
});

gulp.task('dist', function() {
  return gulp.src('dist/**/*').pipe(gulp.dest('release/dist'));
});

gulp.task('public', function() {
  return gulp.src('public/**/*').pipe(gulp.dest('release/public'));
});

gulp.task('env', function() {
  return gulp
    .src(['.babelrc', '.yarnrc', '.npmrc', 'package.json', 'yarn.lock', 'server.js', 'app.json'])
    .pipe(gulp.dest('release'));
});

gulp.task('default', ['env', 'src', 'dist', 'public']);
