<template>

	<div class="navigation">
		<ul>
			<router-link :to='v.path' v-for="(v,i) in abc" :key="i" tag='li' activeClass="active">{{v.meta.nm}}</router-link>
		</ul>
		
	</div>
</template>

<script>
	export default {
		name: 'navigation',
		data(){
			return{
				abc:[]
			}
		},
	mounted(){
			console.log(this.$router)
		  this.abc= this.$router.options.routes.filter(item=>Object.keys(item).includes('meta'))
		  	// this.abc= this.$router.options.routes.splice(1)
			 // this.abc= this.$router.options.routes.slice(1)
	},

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
		position: relative;
		top: 0;

	}

	.navigation >div {
		width: 200px;
		display: inline-block;
	}
	.active{
		color: red;
	}
</style>
