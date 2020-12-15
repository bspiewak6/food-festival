const path = require('path');
const webpack = require('webpack');

module.exports = {
    // webpack looks to start building module
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // re-loading and de-bugging features
    mode: 'development',
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
};