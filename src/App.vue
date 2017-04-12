<template>
	<div id="app">
		<m-head></m-head>
		<router-view></router-view>
	</div>
</template>
<script>
import './assets/css/reset.css';

import Head from './components/common/head.vue';
export default {
	name: 'app',
	components: {
		'm-head': Head
	}
};
</script>
<style>
html, body {
	width: 100%;
	height: 100%;
}
body {
	display: flex;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	flex: 1;
	width: 100%;
	flex-direction: column;
}
</style>
