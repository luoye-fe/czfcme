<template>
	<div class="sidenav" :style="{left: showMenu ? '0' : '-200px'}">
		<ul class="nav">
			<li v-for="item in metaJSON.productList"><router-link :class="{active: $route.query.type === item.id}" :to="{name: 'List', query: { type: item.id}}">{{item.name}}</router-link></li>
		</ul>
		<span class="menu" @click="toggleMenu">菜单</span>
	</div>
</template>
<script>
import { IsPC } from '../../utils/index.js';

import metaJSON from '../../metadata.json';

export default {
	name: 'List-nav',
	data() {
		return {
			showMenu: true,
			left: 0,
			metaJSON: metaJSON
		};
	},
	created() {
		if (IsPC()) {
			this.showMenu = true;
			this.left = '-200px';
		} else {
			this.showMenu = false;
			this.left = '-150px';
		}
	},
	methods: {
		toggleMenu() {
			this.showMenu = !this.showMenu;
		}
	}
};
</script>
<style scoped>
.sidenav {
	position: fixed;
	top: 0;
	left: 0;
	width: 200px;
	height: 100%;
	padding-top: 80px;
	box-sizing: border-box;
	transition: all ease 0.2s;
}
.nav {
	position: relative;
	width: 100%;
	left: 0;height: 100%;
	overflow: auto;
	border-right: 1px solid #ddd;
	padding: 0;
	margin: 0;
	background: #fff;
}
.nav li {
	padding: 0;
	margin: 0;
	display: block;
}
.nav li a{
	font-size: 14px;
	color: #666;
	transition: all ease 0.3s;
	line-height: 40px;
	padding-left: 20px;
	box-sizing: border-box;
	font-weight: 700;
	display: block;
}
.nav li a:hover {
	background: #d1dbe5;
}
.nav li a.active {
	color: #20a0ff;
}
.menu {
	position: absolute;left: 100%;
	top: 85px;margin-left: 10px;
	background-image: url('../../assets/images/menu.png');
	background-size: 100%;
	display: block;
	width: 24px;
	height: 24px;
	text-indent: -999px;
	cursor: pointer;
}
@media screen and (max-width: 700px) {
	.sidenav {
		padding-top: 94px;
	}
	.menu {
		top: 98px;
		margin-left: 5px;
		width: 18px;
		height: 18px;
	}
	.nav li a:hover {
		background: none;
	}
}
</style>
