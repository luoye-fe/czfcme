<template>
	<div class="sidenav" :style="{left: showMenu ? '0' : '-200px'}">
		<ul class="nav">
			<li>123</li>
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
			left: 0
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
	background-color: #ff5151;
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
	background-color: #ff5151;
	overflow: auto;
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
		padding-top: 95px;
	}
	.menu {
		top: 98px;
		margin-left: 5px;
		width: 18px;
		height: 18px;
	}
}
</style>
