<template>
	<div class="">
		页面1
		
		<router-link to='/pageOne/pageOneChildren'>去页面1</router-link> 
		<!-- <keep-alive><router-view></router-view></keep-alive> -->
		<router-view></router-view>
		
	</div>
</template>

<script>
	export default{
		name:"pageOne",
		mounted(){
			console.log(this.$route.params)
		},
		
	}
</script>

<style>
</style>