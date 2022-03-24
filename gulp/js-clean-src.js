const gulp = require("gulp")
const deleteFile = require('gulp-delete-file');

module.exports = function (SOURCE_DIR) {
    gulp.task('js-clean-src', function () {
        const stream = gulp.src(['./' + SOURCE_DIR + '/**/*.js']);
        const regexp = /.*\.js$/;
        return stream.pipe(deleteFile({reg: regexp, deleteMatch: true}));
    });
}
