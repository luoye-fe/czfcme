<template>
	<header>
		<div class="container">
			<h1>CZFCME</h1>
			<ul class="nav">
				<li><a href="/" :class="{active: link === '/'}">首页</a></li>
				<li><a href="/list" :class="{active: link === '/list'}">产品列表</a></li>
				<li><a href="/download" :class="{active: link === '/download'}">资源下载</a></li>
				<li><a href="/contact" :class="{active: link === '/contact'}">联系我们</a></li>
			</ul>
		</div>
	</header>
</template>
<style scoped>
header {
	width: 100%;
	height: 80px;
	background: #20a0ff;
}

.container {
	width: 1140px;
	margin: 0 auto;
	padding: 0 30px;
}

.container>h1 {
	float: left;
}

.nav {
	float: right;
	height: 100%;
	line-height: 80px;
	background: transparent;
	padding: 0;
	margin: 0;
}

.nav li {
	margin: 0;
	float: left;
	list-style: none;
	position: relative;
	cursor: pointer;
	margin-left: 20px;
}

.nav li a {
	text-decoration: none;
	color: #fff;
	display: block;
	padding: 0 20px;
	opacity: .8;
}

.nav li a:hover {
	opacity: 1;
}

.nav li a.active {
	font-weight: 700;
	opacity: 1;
}

.nav li a.active::before {
	content: "";
	display: block;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 4px;
	background: #99d2fc;
}
</style>
<script>
module.exports = {
	name: 'head',
	props: ['link']
};
</script>
