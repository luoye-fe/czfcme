import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
	routes: [{
		path: '/',
		name: 'Index',
		component: require('../components/index')
	}, {
		path: '/index',
		component: require('../components/index')
	}, {
		path: '/list',
		name: 'List',
		component: require('../components/list')
	}, {
		path: '/detail',
		redirect: '/detail/1'
	}, {
		path: '/detail/:id',
		name: 'Detail',
		component: require('../components/detail')
	}, {
		path: '/contact',
		name: 'Contact',
		component: require('../components/contact')
	}, {
		path: '/download',
		name: 'Download',
		component: require('../components/download')
	}]
});


export default router;
