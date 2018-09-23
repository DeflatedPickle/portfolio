const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    target: "node",
    entry: "./src/coffee/index.coffee",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    "html-loader",
                    "pug-html-loader"
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "stylus-loader"
                ]
            },
            {
                test: /\.coffee$/,
                use: ["babel-loader", "coffee-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: "./src/pug/index.pug"
        }),

        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],
    resolve: {
        extensions: [".coffee", ".js"]
    }
};