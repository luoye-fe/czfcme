const path = require('path');

module.exports = {
	port: 8080,
	autoOpenBrowser: true,
	assetsRoot: path.resolve(__dirname, '../dist'),
	dev: {
		assetsPublicPath: '/',
		assetsSubDirectory: 'static'
	},
	build: {
		assetsPublicPath: './',
	}
};
