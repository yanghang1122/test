import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import navigation from "./components/navigation/index.vue"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.component(navigation.name, navigation)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
