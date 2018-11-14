import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state.js'
// import mutations from './mutation.js'
import home from './modules/home.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		home
	}
})

export default store;
