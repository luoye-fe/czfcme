<template>
	<header>
		<div class="container">
			<h1><router-link :to="{name: 'Index'}">CZFCME</router-link></h1>
			<ul class="nav">
				<li><router-link :to="{name: 'Index'}" :class="{active: $route.path === '/'}">首页</router-link></li>
				<li><router-link :to="{name: 'List'}" :class="{active: $route.path === '/list'}">产品列表</router-link></li>
				<li><router-link :to="{name: 'Download'}" :class="{active: $route.path === '/download'}">资源下载</router-link></li>
				<li><router-link :to="{name: 'Contact'}" :class="{active: $route.path === '/contact'}">联系我们</router-link></li>
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
.container>h1 a {
	color: #fff;
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
export default {
	name: 'head',
	props: ['link']
};
</script>
