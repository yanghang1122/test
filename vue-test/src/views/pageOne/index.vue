<template>
	<div class="">
		页面1
	</div>
</template>

<script>
	export default{
		name:"pageOne",
		mounted(){
			console.log(this.$route.params)
		}
	}
</script>

<style>
</style>