import Vue from 'vue'
import router from 'vue-router'

import home from '../views/home'
import pageone from '../views/pageOne'
import pagetwo from '../views/pageTwo'
import pagethree from '../views/pagethree'

Vue.use(router)

export default new router({
	routes: [{
			path: "/home",
			component: home,
			children:[
				{
					path: "/pageOne",
					component: pageone,
				},
				{
					path: "/pageTwo",
					component: pagetwo,
				},
				{
					path: "/pagethree",
					component: pagethree,
				},
			]
		},
	


	]
})
