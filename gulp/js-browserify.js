const gulp = require('gulp');
const jsBrowserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require("tsify");

module.exports = function (SOURCE_DIR, ENTRY_FILE_NAME, BUILD_DIR, OUT_FILE_NAME) {
    gulp.task('js-browserify', function () {
        return jsBrowserify({ entries: [SOURCE_DIR + '/' + ENTRY_FILE_NAME] })
            .plugin(tsify)
            .bundle()
            .pipe(source(OUT_FILE_NAME))
            .pipe(gulp.dest(BUILD_DIR));
    });
}
