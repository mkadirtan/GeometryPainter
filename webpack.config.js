const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        //contentBase: '',
        public: '192.168.1.46:8080',
        port: '8080',
        host: '192.168.1.46',
        //host: '0.0.0.0',
        disableHostCheck: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};