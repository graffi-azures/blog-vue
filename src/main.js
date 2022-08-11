import Vue from 'vue'
import App from './App.vue'
//引入完整的element-ui组件库和全部样式
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入axios库
import axios from "axios";
//引入富文本编辑器mavon-editor
import mavonEditor from 'mavon-editor'
//引入dayjs库显示时间
import dayjs from "dayjs";
//引入VueRouter插件
import VueRouter from "vue-router";
// 引入Vuex.Store配置,其中包含引入了Vuex,所以能在vm中使用store选项
import store from './store/index'
// 引入路由器Vuerouter配置
import router from './router/index'

//关闭生产提示
Vue.config.productionTip = false

// 应用ElementUI插件
Vue.use(Element);
//应用mavon-editor插件
Vue.use(mavonEditor);
//应用router插件
Vue.use(VueRouter);

new Vue({
  render: h => h(App),//render函数是在runtime版本的vue.js环境下解析模板的函数
  router:router,
  store:store,
  beforeCreate() {
    //封装ajax提交的url前缀
    Vue.prototype.$http = axios.create({
      baseURL: 'http://localhost:3001/api'
    });
    Vue.prototype.dayjs = dayjs;
    // 添加全局总线
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
