const {src,dest} = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concat = require ('gulp-concat');
const uglify = require('gulp-uglify-es').default;

sass.compiler = require('dart-sass');
function css() {
    return src("css/*.scss")
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename('main.min.css'))
    .pipe(dest("bundle/scss"));
}
function js(){
    return src(['js/bootstrap.min.js','js/jquery.js','js/main.js'])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest('bundle/js'));
}

exports.js = js;
exports.css = css;
exports.default = ()=>{};