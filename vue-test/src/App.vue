<template>
	<div id="app">
		<navigation></navigation>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
	export default {
		name: 'App',

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
</style>
