const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    }),  new FaviconsWebpackPlugin('./src/assets/favicon-32x32.png')],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|jpeg|git)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:'[name].[hash].[ext]',
                        outputPath: 'assets'
                    }
                }
            }
        ]
    }
}