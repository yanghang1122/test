<template>
	<div class="">
		页面2
		<pageTwoChildren title="爹给你传的">
			<!-- <template>
				爹给你传的模板1
			</template>
			
			<template slot="jiegou2">
				爹给你传的模板2
			</template> -->
			<!-- a 1aa-->
			<template scope="num">
				{{num.num}}
			</template>
			
		</pageTwoChildren>
	</div>
</template>

<script>
	import pageTwoChildren from './pageTwoChildren/index.vue'
	export default{
		name:"pageTwo",
		components:{
			pageTwoChildren
		}
	}
</script>

<style scoped>
</style>