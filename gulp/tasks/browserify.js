var gulp = require('gulp'),
    argv = require('yargs').argv,
    browserify = require('browserify'),
    gutil  = require('gulp-util'),
    source = require("vinyl-source-stream"),
    buffer = require('vinyl-buffer'),
    handleErrors = require('../utils/handle-errors');
    reactify = require('reactify'),
    brfs = require('brfs'),
    uglify = require('gulp-uglify');

var dest = './build/';

gulp.task('browserify', function(){
    var bundler = browserify({
        entries: ['./src/App.js'],
        debug: !argv.prod,
        cache: {}, packageCache: {}, fullPaths: true
      });

      return bundleShare(bundler, 'bundle.js')
})

function bundleShare(b, s){
    b.transform(reactify)
    .transform(brfs)
    .bundle()
    .on('error', handleErrors)
    .pipe(source(s))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(dest))
    gutil.log('Finished '+ s +' bundler');
}
