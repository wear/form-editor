var gulp = require('gulp');

gulp.task('default', ['clean','browserify', 'peg:compile']);
