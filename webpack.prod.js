const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExrtactPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new CleanWebpackPlugin(), new MiniCssExrtactPlugin({
        filename: '[name].[contentHash].css'
    })],
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [
                    MiniCssExrtactPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ]
    }
})

