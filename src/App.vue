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
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
