<template>
	<div class="">
		页面2的儿子 父组件传过来的参数 {{title}}
		<!-- <slot name="jiegou1"></slot>
		<slot name="jiegou2"></slot> -->
		
		<slot :num="num"></slot>
	</div>
</template>

<script>
	export default{
		name:"pageTwoChildren",
		props:["title"],
		data(){
			return{
				num:1
			}
		}
	}
</script>

<style>
</style>