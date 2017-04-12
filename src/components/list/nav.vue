<template>
    <div class="sidenav" :style="{left: showMenu ? '0' : '-200px'}">
		<el-menu mode="vertical" default-active="1" class="nav">
		    <el-menu-item-group v-for="(item, index) in metaJSON" :title="item.column">
		        <router-link v-for="(detail, key) in item.production" :class="{active: $route.query.id == index + '-' + key}" :to="{name: 'List', query: { id: index + '-' + key}}"><span>{{detail.title}}</span></router-link>
		    </el-menu-item-group>
		</el-menu>
		<span class="menu" @click="toggleMenu">菜单</span>
	</div>
</template>
<script>
import {
    IsPC
} from '../../utils/index.js';

import metaJSON from '../../metadata.js';

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
        	document.documentElement.addEventListener('click', (e) => {
        		if ([...e.target.classList].indexOf('menu') === -1) {
        			this.showMenu = false;
        		}
        	});
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
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    box-sizing: border-box;
    transition: all ease 0.2s;
    z-index: 1;
}

.nav {
    position: relative;
    width: 100%;
    left: 0;
    height: 100%;
    overflow: auto;
    border-right: 1px solid #ddd;
    padding: 0;
    margin: 0;
}

.nav li {
    padding: 0;
    margin: 0;
    display: block;
}

.nav li a {
    font-size: 14px;
    color: #666;
    transition: all ease 0.3s;
    line-height: 20px;
    padding-left: 20px;
    box-sizing: border-box;
    font-weight: 700;
    display: table;
    width: 100%;
    height: 60px;
}

.nav li a span {
    display: table-cell;
    vertical-align: middle;
}

.nav li a:hover {
    background: #d1dbe5;
}

.nav li a.active {
    color: #20a0ff;
}

.menu {
    position: absolute;
    left: 100%;
    top: 2px;
    margin-left: 10px;
    background-image: url('../../assets/images/menu.png');
    background-size: 100%;
    display: block;
    width: 24px;
    height: 24px;
    text-indent: -999px;
    cursor: pointer;
}

@media screen and (max-width: 700px) {
    .menu {
        margin-left: 5px;
        width: 18px;
        height: 18px;
    }
    .nav li a:hover {
        background: none;
    }
}
</style>
