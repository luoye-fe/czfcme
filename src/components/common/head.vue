<template>
	<header>
		<div class="container">
			<h1><router-link :to="{name: 'Index'}">CZFCME</router-link></h1>
			<ul class="nav">
				<li>
					<router-link :to="{name: 'Index'}" :class="{active: $route.path === '/' || $route.path === '/index'}">首页</router-link>
				</li>
				<li>
					<router-link :to="{name: 'List'}" :class="{active: $route.path === '/list'}">产品列表</router-link>
				</li>
				<li>
					<router-link :to="{name: 'Download'}" :class="{active: $route.path === '/download'}">资源下载</router-link>
				</li>
				<li>
					<router-link :to="{name: 'Contact'}" :class="{active: $route.path === '/contact'}">联系我们</router-link>
				</li>
			</ul>
		</div>
	</header>
</template>
<style scoped>
header {
	width: 100%;
	min-height: 80px;
	background: #20a0ff;
}

.container {
	margin: 0 auto;
	padding: 0 30px;
	box-sizing: border-box;
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
	list-style: none;
	cursor: pointer;
	margin-left: 20px;
	display: inline-block;vertical-align: middle;
	position: relative;
}

.nav li a {
	text-decoration: none;
	color: #fff;
	display: block;
	padding: 0 20px;
	opacity: 0.8;
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

@media screen and (min-width: 1140px) {
	.container {
		max-width: 1140px;
		min-width: 668px;
		width: 90%;
	}
}

@media screen and (max-width: 700px) {
	header {
		float: none;
		display: block;
		text-align: center;
	}
	.container {
		width: 100%;
		padding: 0;
	}
	.container>h1 {
		float: none;
	}
	.nav {
		float: none;
	}
	.nav li {
		margin-left: 0;
		line-height: 40px;
		font-size: 14px;
	}
	.nav li a {
		padding: 0 10px;
	}
	.nav li a.active::before {
		height: 2px;
	}
}
</style>
<script>
export default {
	name: 'head',
	props: ['link']
};
</script>
