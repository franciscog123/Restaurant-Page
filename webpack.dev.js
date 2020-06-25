const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.export = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map', 
});

/* 
There's an issue with running the build in development mode in which the TACOM.ttf file, GitHub mark.png, and map.jpg
throw errors saying theres an unexpected character within the files and that an appropriate loader might be needed.
Everything builds correctly in production mode.
*/