const {src, dest, watch, series } = require('gulp') 
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('per.scss')
    .pipe(sass())
    .pipe(dest('css'))
}
function watchTask() {
    watch(['per.scss'], buildStyles)
}
export.default = series(buildStyles, watchTask)