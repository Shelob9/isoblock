const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");
const path = require('path');
module.exports = {
    ...defaultConfig,
    entry: {
        index: path.resolve( process.cwd(), 'src', 'index.js' ),
        front: path.resolve( process.cwd(), 'src', 'front.js' ),
    },

};
