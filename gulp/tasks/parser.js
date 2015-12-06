var gulp = require('gulp'),
    gutil  = require('gulp-util'),
    peg = require('gulp-peg');

gulp.task("peg:compile", function(){
  gulp
    .src( "./peg/form-parser.peg" )
    .pipe( peg().on( "error", gutil.log ) )
    .pipe( gulp.dest( "build" ) )

  gulp
    .src( "./peg/row-parser.peg" )
    .pipe( peg().on( "error", gutil.log ) )
    .pipe( gulp.dest( "build" ) )
})

