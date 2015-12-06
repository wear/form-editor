var gulp = require('gulp'),
    gutil  = require('gulp-util'),
    peg = require('gulp-peg');

gulp.task("peg:compile", function(){
  gulp
    .src( "./peg/form-parser.peg" )
    .pipe( peg({exportVar:'formParser'}).on( "error", gutil.log ) )
    .pipe( gulp.dest( "build" ) )

  gulp
    .src( "./peg/content-parser.peg" )
    .pipe( peg({exportVar:'contentParser'}).on( "error", gutil.log ) )
    .pipe( gulp.dest( "build" ) )
})
