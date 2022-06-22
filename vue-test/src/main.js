import Vue from 'vue'
import App from './App.vue'
import router from './router'
import navigation from "./components/navigation/index.vue"

Vue.config.productionTip = false

Vue.component(navigation.name, navigation)

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
