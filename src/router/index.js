import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '../components/Home'
import VideoDetail from "../components/home/VideoDetail";
import WritingHome from "../components/WritingHome";
import WritingCenterIndex from "../components/WritingCenter/WritingCenterIndex";
import UpLoad from "../components/WritingCenter/UpLoad";
import UpLoadTest from "../components/WritingCenter/UpLoadTest";
import WriterFrom from "../components/WritingCenter/WriterFrom";
import VideoNavBar from "../components/WritingCenter/VideoNavBar";
import InCome from "../components/WritingCenter/InCome";


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // 下面都是固定的写法
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
      redirect:'/index',
      children:[
        {
        path: '/index',
        name: 'AppIndex',
        component: AppIndex,
          meta:{
            requireAuth:true
          },

        },
        {
          path:'/videodetail/:id',
          name:VideoDetail,
          component: VideoDetail
        }
      ]
    },
    {
      path:'/writinghome',
      name:'WritingHome',
      component:WritingHome,
      redirect:'/writingindex',
      children:[
        {
          path:'/writingindex',
          name:'WritingIndex',
          redirect:'/writingindex/uploadtest',
          component: WritingCenterIndex,
          meta: {
            requireAuth: true
          },
          children:[
            {
              path:'/writingindex/uploadtest',
              name:'UpLoadTest',
              component:UpLoadTest
            },
            {
              path:'/writingindex/videonavbar',
              name:'VideoNavBar',
              component: VideoNavBar
            },
            {
              path:'/writingindex/writerfrom',
              name:'WriterFrom',
              component: WriterFrom
            },
            {
              path:'/writingindex/income',
              name:'InCome',
              component: InCome
            }
          ]
        },

      ]
    },
    {
      path:'/upload',
      name:'UpLoad',
      component:UpLoad
    },

  ]
})

