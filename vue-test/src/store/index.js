import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

import {
	reqCategoryList
} from "../api/index.js"


export default new Vuex.Store({
	state: {
		num: 1,
		categoryList: []
	},

	mutations: {
		GETCATEGORYLIST(state, data) {
			state.categoryList = data
		}

	},

	actions: {
		async getCategoryList({
			commit
		}) {
			let result = await reqCategoryList()
			console.log(result)
			if (result.code == 200) {
				commit("GETCATEGORYLIST", result.data)
			}
		}
	},

	getters: {
		categoryList(state) {
			return state.categoryList
		}
	}
})
