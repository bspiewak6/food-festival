const path = require("path");
const webpack = require("webpack");
require("bootstrap");

module.exports = {
    entry: "./assets/js/script.js", // webpack looks to start building module
    output: { 
        path: path.resolve(__dirname, "dist"), 
        filename: "main.bundle.js" // location of this file is in the dist folder
    },
    plugins:[
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
    ],
    mode: "development" // re-loading and de-bugging features
};




