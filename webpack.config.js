const path = require('path');

module.exports = {
    mode: "production",
    entry: {
        polyfill: "babel-polyfill",
        index: ["./assets/js/index.js", "./assets/js/main.js"],
        product: ["./assets/js/product.js", "./assets/js/main.js"],
        cart: ["./assets/js/cart.js", "./assets/js/form.js", "./assets/js/main.js"],
        confirmation: ["./assets/js/confirmation.js", "./assets/js/main.js"]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    watch: true,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    }
};