<template>
	<div class="">
		页面2的儿子 父组件传过来的参数 {{title}}
		<!-- <slot name="jiegou1"></slot>
		<slot name="jiegou2"></slot> -->
		
		<slot :num="num"></slot>
		<button @click="haha">点击给父组件传参数</button>
	</div>
</template>

<script>
	export default{
		name:"pageTwoChildren",
		props:["title"],
		data(){
			return{
				num:1,
				abc:{
					a:1,
					b:2
				}
			}
		},
		methods:{
			haha(){
				this.$emit("canshu",this.num)
			}
		}
	}
</script>

<style>
</style>