const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./common.conf.js');
const env = require('./env.conf.js');

const { styleLoaders } = require('../build/utils.js');
const baseWebpackConfig = require('./webpack.base.conf.js');

let webpackConfig = merge(baseWebpackConfig, {
	module: {
		rules: styleLoaders({
			extract: true
		})
	},
	output: {
		path: config.assetsRoot,
		filename: 'js/[name].[chunkhash].js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': env
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin({
			filename: 'css/[name].[contenthash].css'
		}),
	]
});

Object.keys(baseWebpackConfig.entry).forEach(function(name) {
	webpackConfig.plugins.push(
		new HtmlWebpackPlugin({
			filename: `${name}.html`,
			template: path.join(__dirname, '../src/template/main.html'),
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: false,
				removeAttributeQuotes: true
			},
			chunks: [name],
			chunksSortMode: 'dependency'
		}))
})

module.exports = webpackConfig
