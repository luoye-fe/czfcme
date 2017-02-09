const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const { styleLoaders } = require('../build/utils.js');

const baseWebpackConfig = require('./webpack.base.conf.js');

let devWebpackConfig = merge(baseWebpackConfig, {
	devtool: 'eval',
	module: {
		rules: styleLoaders()
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrorsPlugin()
	]
});

Object.keys(baseWebpackConfig.entry).forEach(function(name) {
	devWebpackConfig.entry[name] = [path.join(__dirname, '../build/dev-client.js')].concat(devWebpackConfig.entry[name])
	devWebpackConfig.plugins.push(new HtmlWebpackPlugin({
		filename: `${name}.html`,
		template: path.join(__dirname, '../src/template/main.html'),
		inject: true,
		chunks: [name]
	}))
})

module.exports = devWebpackConfig;
