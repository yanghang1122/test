<template>

	<div class="navigation">
		<router-link :to='v.path' v-for="(v,i) in abc" :key="i" tag='div' activeClass="active">{{v.meta.nm}}
		</router-link>

	</div>
</template>

<script>
	export default {
		name: 'navigation',
		data() {
			return {
				abc: []
			}
		},
		mounted() {
			// console.log(this.$router.options.routes)
			this.abc = this.$router.options.routes.filter((item)=>{
				return Object.keys(item).includes('meta')
			})
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
		width: 100%;
		left: 50%;
		transform: translateX(-50%);
		position: relative;
		top: 0;
		background-color: gainsboro;
		display: flex;
		padding: 20px 100px;
		box-sizing: border-box;
	}

	.navigation div {
		margin-right: 50px;
		cursor: pointer;
	}

	.active {
		color: red;
	}
</style>
