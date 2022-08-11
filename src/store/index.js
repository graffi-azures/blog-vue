// 引入Vue才能使用Vue.use(vuex)
import Vue from 'vue'
// 引入Vuex文件
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)
// 准备actions对象,用于响应组件触发的动作
const actions = {}
// 准备mutations对象,用于操作数据state
const mutations = {
    TOKEN(state, value) {
        console.log('Store:' + value)
        state.token = value
        window.localStorage.setItem('token', state.token)
    }
}
// 准备state对象,用于保存数据
const state = {
    token: '',
}
// 准备store对象
export default new Vuex.Store({
    actions,
    mutations,
    state
})