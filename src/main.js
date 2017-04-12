import Vue from 'vue';
import App from './App';
import router from './router';

var attachFastClick = require('fastclick');
new attachFastClick(document.body, {});

import { Menu, MenuItem, MenuItemGroup } from 'element-ui';
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
});
