//Get WordPress default webpack config
const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");

const path = require('path');

//Merge our entry point with default
module.exports = {
    ...defaultConfig,
    //https://webpack.js.org/concepts/entry-points/
    entry: {
        //Block editor, what WordPress does by default
        index: path.resolve( process.cwd(), 'src', 'index.js' ),
        //Create a front-end JavaScript bundle
        front: path.resolve( process.cwd(), 'src', 'front.js' ),
    },

};
