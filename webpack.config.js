const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//自定义参数，根据serverType选择文件打包
const argv = require('yargs').argv;

module.exports = {
    mode: argv.mode || 'development',
    devtool: 'source-map',
    entry: [
        'babel-polyfill', //兼容ie
        './index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/, // 正则表达式，表示.css后缀的文件
                use: ['style-loader', 'css-loader'], // 针对css文件使用的loader，注意有先后顺序，数组项越靠后越先执行
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                },
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './index.html',
            inject: true, //自动注入
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, '/'),
        host: '0.0.0.0',
        inline: true,
        hot: true,
        //浏览器显示错误信息
        overlay: true,
        proxy: [{
            context: ['/imageDZI', '/fileserver', '/favicon.ico'],
            target: 'http://127.0.0.1:8084',
            changeOrigin: true, // target是域名的话，需要这个参数，
            secure: true, // 设置支持https协议的代理
            // pathRewrite: { '^/imageDZI': '' },
        }]
    },
};