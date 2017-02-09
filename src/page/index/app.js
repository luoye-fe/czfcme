const Vue = require('vue');

const AppComponent = require('./app.vue');

let App = new Vue({
	name: 'index',
	template: '<m-app></m-app>',
	components: {
		'm-app': AppComponent
	}
});

window.App = App;

module.exports = App;