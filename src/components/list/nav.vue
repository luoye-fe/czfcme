<template>
	<ul class="nav">
		<li>123</li>
	</ul>
</template>
<script>
import metaJSON from '../../metadata.json';
console.log(metaJSON);
export default {
	name: 'List-nav',

};
</script>
<style scoped>
.nav {
	position: absolute;
	top: 0;
	left: 0;
	background-color: #ff5151;
	width: 150px;
	margin-bottom: 100%;
	/*padding-bottom: 100%;*/
}
</style>
