import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
	routes: [{
		path: '/',
		name: 'Index',
		component: require('../components/index.vue')
	}, {
		path: '/index',
		component: require('../components/index.vue')
	}, {
		path: '/list',
		name: 'List',
		component: require('../components/list.vue')
	}, {
		path: '/detail',
		redirect: '/detail/1'
	}, {
		path: '/detail/:id',
		name: 'Detail',
		component: require('../components/detail.vue')
	}, {
		path: '/contact',
		name: 'Contact',
		component: require('../components/contact.vue')
	}, {
		path: '/download',
		name: 'Download',
		component: require('../components/download.vue')
	}]
});


export default router;
