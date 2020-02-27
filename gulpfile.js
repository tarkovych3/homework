var gulp = require('gulp') ; 
var rename = require('gulp-rename') ; 
var less = require('gulp-less');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

function css(done){
  gulp.src("./less/*.less")
  .pipe(less({
    errLogToConsole:true,
    outputStyle:'compressed'
  }))
  .on('error',console.error.bind(console))
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./css/'))
  gulp.src("./scss/*.scss")
  .pipe(sass({
    errLogToConsole:true,
    outputStyle:'compressed'
  }))
  .on('error',console.error.bind(console))
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./css/'))
}
function wcss(done){
  gulp.src("./less/*.less")
  .pipe(watch("./less/*.less"))
  .pipe(less({
    errLogToConsole:true,
    outputStyle:'compressed'
  }))
  .on('error',console.error.bind(console))
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./css/'))
  gulp.src("./scss/*.scss")
  .pipe(sass({
    errLogToConsole:true,
    outputStyle:'compressed'
  }))
  .on('error',console.error.bind(console))
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./css/'))

}


gulp.task(css) ; 
gulp.task(wcss) ; 

