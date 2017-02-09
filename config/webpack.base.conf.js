const path = require('path');

const webpack = require('webpack');

const { cssLoaders } = require('../build/utils.js');

const env = require('./env.conf');
const config = require('./common.conf.js');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        index: path.join(__dirname, '../src/page/index/app.js'),
        list: path.join(__dirname, '../src/page/list/app.js'),
        detail: path.join(__dirname, '../src/page/detail/app.js'),
        contact: path.join(__dirname, '../src/page/contact/app.js')
    },
    output: {
        path: config.assetsRoot,
        filename: '[name].js',
        publicPath: env === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            'vue': 'vue/dist/vue.common.js',
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src')]
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: cssLoaders({
                    extract: env === 'production'
                })
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: path.join(__dirname, '../dist/img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: path.join(__dirname, '../dist/fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ]
};
