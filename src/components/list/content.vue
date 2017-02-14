<template>
	<div class="content">
		<h1>contetn</h1>
	</div>
</template>
<script>
export default {
	name: 'List-content',
};
</script>
<style scoped>
.content {
	width: 768px;
	margin: 0 auto;
	border: 1px solid #000;
	box-sizing: border-box;
	overflow-x: hidden;
}
@media screen and (max-width: 768px) {
	.content {
		width: 100%;
	}
}
</style>
