<template>
	<div class="home">
		<div class="content">
			<div v-for="(item1,index) in categoryList" :key="index" class="item1">{{item1.categoryName}}

				<div class="item2">
					<div class="" v-for='(item2,index) in item1.categoryChild'>
						{{item2.categoryName}}
					</div>
				</div>

			</div>
		</div>



		<router-link :to="{name:'pageone',params:{categoryList:categoryList}}"> 跳到页面1 </router-link>
		
		
		<el-cascader-panel :options="options"></el-cascader-panel>
		
		
	</div>
</template>

<script>
	import {
		mapGetters
	} from "vuex"
	export default {
		name: "home",
		mounted() {
			this.$store.dispatch("getCategoryList")
		},

		computed: {
			...mapGetters(["categoryList"])
		}

	}
</script>

<style>
	.content {
		width: 20vw;
	}

	.item2 {
		position: absolute;
		top: 100px;
		left: 20vw;
		display: none;
	}

	.item1:hover div {
		display: block;
	}
</style>
