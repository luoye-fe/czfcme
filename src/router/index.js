import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
	routes: [{
		path: '/',
		name: 'Index',
		component: resolve => require(['../components/index'], resolve)
	}, {
		path: '/index',
		component: resolve => require(['../components/index'], resolve)
	}, {
		path: '/list',
		name: 'List',
		component: resolve => require(['../components/list'], resolve)
	}, {
		path: '/detail',
		redirect: '/detail/1'
	}, {
		path: '/detail/:id',
		name: 'Detail',
		component: resolve => require(['../components/detail'], resolve)
	}, {
		path: '/contact',
		name: 'Contact',
		component: resolve => require(['../components/contact'], resolve)
	}, {
		path: '/download',
		name: 'Download',
		component: resolve => require(['../components/download'], resolve)
	}]
});


export default router;
