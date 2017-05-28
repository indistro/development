var gulp = require('gulp');
var less = require('gulp-less');

// memasukkan fungsi untuk compile file stylus ke css
// terminal --> $ gulp styles
gulp.task('styles', function () {
    gulp.src('./less/core.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

// memasukkan fungsi untuk watching dan compile
// terminal --> $ gulp watch:styles
gulp.task('watch:styles', function () {
    gulp.watch('**/*.less', ['styles']);
})