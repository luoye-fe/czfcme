<template>
	<m-head link="/list"></m-head>
</template>
<script>
require('../../assets/css/reset.css');
const Head = require('../../common/head.vue');
module.exports = {
	name: 'app',
	components: {
		'm-head': Head
	}
};
</script>
