process.env.NODE_ENV = 'production'

const path = require('path');

const ora = require('ora');
const chalk = require('chalk');
const shell = require('shelljs');
const webpack = require('webpack');

const config = require('../config/common.conf.js');
const webpackConfig = require('../config/webpack.prod.conf.js');

const renderer = require('vue-server-renderer').createRenderer();

const spinner = ora('building for production...');
spinner.start();

// shell.rm('-rf', config.assetsRoot);
// shell.mkdir('-p', config.assetsRoot);
shell.config.silent = true;
shell.config.silent = false;

function ssr(key) {
	return renderer.renderToString(require(path.join(__dirname, `../src/page/${key}/app.js`))());
}

// for (let item in webpackConfig.entry) {
// 	console.log(ssr(key));	
// }

// console.log(ssr('index'));

renderer.renderToString(require(path.join(__dirname, `../dist/js/index.fce7e79bcd3bd82492e0.js`))(), (error, html) => {
	if (error) throw error
	console.log(html);
});

// webpack(webpackConfig, function(err, stats) {
// 	spinner.stop();
// 	if (err) throw err;
// 	process.stdout.write(stats.toString({
// 		colors: true,
// 		modules: false,
// 		children: false,
// 		chunks: false,
// 		chunkModules: false
// 	}) + '\n\n');

// 	console.log(chalk.cyan('  Build complete.\n'));
// 	console.log(chalk.yellow(
// 		'  Tip: built files are meant to be served over an HTTP server.\n' +
// 		'  Opening index.html over file:// won\'t work.\n'
// 	));
// })
