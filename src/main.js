import Vue from 'vue';
import App from './App';
import router from './router';

var attachFastClick = require('fastclick');
new attachFastClick(document.body, {});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
});
