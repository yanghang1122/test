import Vue from 'vue'
import router from 'vue-router'
import home from '../views/home'
import pageone from '../views/pageOne'
import pagetwo from '../views/pageTwo'
import pagethree from '../views/pagethree'

Vue.use(router)

export default new router({
	routes: [{
			path: "/",
			redirect: '/home',
		},
		{
			path: "/home",
			component: home,
			meta: {
				nm: 'home1'
			}
		},
		{
			path: "/pageOne",
			component: pageone,
			meta: {
				nm: '页面1'
			}
		},
		{
			path: "/pageTwo",
			component: pagetwo,
			meta: {
				nm: '页面2'
			}
		},
		{
			path: "/pagethree",
			component: pagethree,
			meta: {
				nm: '页面3'
			}
		},
	]
})
