<template>
	<header>
		<div class="container">
			<h1>
				<router-link :to="{name: 'Index'}">
					<img src="http://onk96vraq.bkt.clouddn.com/logo.png">
				</router-link>
			</h1>
			<ul class="nav">
				<li>
					<router-link :to="{name: 'Index'}" :class="{active: $route.path === '/' || $route.path === '/index'}">首页</router-link>
				</li>
				<li>
					<router-link :to="{name: 'List', query: { id: '0-1' }}" :class="{active: $route.path === '/list'}">产品列表</router-link>
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
	background: #20a0ff;
	z-index: 999;
}

.container {
	margin: 0 auto;
	padding: 0 30px;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
}

.container>h1 {
	display: block;
	flex: 1;
}

.container>h1 a {
	color: #fff;
	display: flex;
	height: 100%;
	align-items: center;
}

.container>h1 a img {
	display: block;
	width: 260px;
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
/*
@media screen and (min-width: 1140px) {
	.container {
		max-width: 1140px;
		min-width: 668px;
		width: 90%;
	}
}
*/
@media screen and (max-width: 768px) {
	header {
		float: none;
		display: block;
		text-align: center;
	}
	.container {
		width: 100%;
		padding: 0;
		flex-direction: column;
	}
	.container>h1 {
		float: none;
		margin-top: 10px;
	}
	.container>h1 a {
		justify-content: center;
	}
	.container>h1 a img {
		width: 200px;
	}
	.nav {
		float: none;
		line-height: 50px;
	}
	.nav li {
		margin-left: 0;
		line-height: 30px;
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
