import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'
import WebView from '../views/WebView.vue'
import NoteView from '../views/NoteView.vue'
import ArticleView from '../views/ArticleView.vue'
import MsgView from '../views/MsgView.vue'
import InfoView from '../views/InfoView.vue'
import adminLogin from '../views/admin/adminLogin.vue'
import adminArticle from '../views/admin/adminArticle.vue'
import CreateArticle from '../views/admin/CreateArticle.vue'
import ListArticle from '../views/admin/ListArticle.vue'
import EditArticle from '../views/admin/EditArticle.vue'
import adminMessage from '../views/admin/adminMessage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        // {
        //     name:'message',
        //     path:'message',
        //     component:MessageCop,
        //     meta:{isAuth:true,title:'消息'},
        //     children:[
        //         {
        //             name:'detail',
        //             path:'detail/:id/:title',
        //             component:DetailCop,
        //             meta:{isAuth:true,title:'详情'},
        //             // props属性值的第一种写法,值为对象时,该对象中所有的key:value都会以props形式传递给该组件
        //             // 对应的组件也要用props选项来接收
        //             // props:{a:1,b:'hello'},
        //             //props属性值的第二种写法,值为布尔值时,就会把该路由组件接收到的所有params参数以props形式传递给该组件
        //             props:true,
        //             // props属性值的第三种写法,值为函数时,该路由组件接收到的query参数会以props形式传递给该组件
        //             // props($route){
        //             //     return {
        //             //         id:$route.query.id,
        //             //         title:$route.query.title
        //             //     }
        //             // },
        //         }
        //     ]
        // },
        {
            name:'index',
            path:'/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: IndexView,
            meta: {
                headerAlive: true,
                keepAlive: true
            }
        },

        {
            path: '/webposts',
            name: 'webposts',
            component: WebView,
            meta: {
                headerAlive: true,
                keepAlive: true
            }
        },

        {
            path: '/message',
            name: 'message',
            component: MsgView,
            meta: {
                headerAlive: true,
                keepAlive: true
            }
        },

        {
            path: '/noteposts',
            name: 'noteposts',
            component: NoteView,
            meta: {
                headerAlive: true,
                keepAlive: true
            }
        },

        {
            path: '/webposts/:id',
            component: ArticleView,
            meta: {
                headerAlive: true,
                keepAlive: false
            }
        },

        {
            path: '/info',
            name: 'info',
            component: InfoView,
            meta: {
                headerAlive: true,
                keepAlive: true
            }
        },

        {
            path: '/admin-login',
            name: 'login',
            component: adminLogin,
            meta: {
                keepAlive: false
            }
        },

        {
            path: '/admin-article',
            component: adminArticle,
            children: [
                {
                    path: '',
                    redirect: 'index'
                },
                {
                    path: 'create',
                    name: 'create-article',
                    component: CreateArticle
                },
                {
                    path: 'index',
                    name: 'list-article',
                    component: ListArticle
                },
                {
                    path: ':id/edit',
                    name: 'edit-article',
                    component: EditArticle
                },
                {
                    path: 'message',
                    name: 'message',
                    component: adminMessage
                }
            ]
        }

    ]
});

export default router;