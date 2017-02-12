<template>
	<div class="container">
		<m-nav></m-nav>
		<m-content></m-content>
	</div>
</template>
<script>
import Nav from './nav.vue';
import Content from './content.vue';

export default {
	name: 'List',
	components: {
		'm-nav': Nav,
		'm-content': Content
	}
};
</script>
<style>
.container {
	width: 100%;
	position: relative;
}
</style>
