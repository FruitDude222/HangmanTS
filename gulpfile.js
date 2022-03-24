const SOURCE_DIR = 'src';
const BUILD_DIR = 'build';

require('./gulp/js-browserify')(SOURCE_DIR, 'main.js', BUILD_DIR, 'bundle.js');
require('./gulp/js-clean-src')(SOURCE_DIR);
