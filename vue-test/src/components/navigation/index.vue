<template>

	<div class="navigation">
		
		<router-link to='/home'>首页</router-link>
		<div class="item"><router-link to='/home/pageone'>页面1</router-link></div>
		<div class="item"><router-link to='/home/pagetwo'>页面2</router-link></div>
		<div class="item"><router-link to='/home/pagethree'>页面3</router-link></div>
	</div>
</template>

<script>
	export default {
		name: 'navigation',
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.navigation {
		width: 80%;
		left: 50%;
		transform: translateX(-50%);
		position: fixed;
		top: 0;

	}

	.navigation >div {
		width: 200px;
		display: inline-block;
	}
</style>
