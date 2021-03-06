import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Home from '@/pages/home'
import AboutUs from '@/pages/aboutus'
import FindPartner from '@/pages/findpartner'
import PartnerInfo from '@/pages/findpartner/partnerinfo'
import LoveStory from '@/pages/lovestory'
import News from '@/pages/news'
import NewsInfo from '@/pages/news/newsinfo'

import MyInfo from '@/pages/myInfo'
import BasicInfo from '@/pages/myInfo/basicInfo'
import DatingRecords from '@/pages/myInfo/datingRecords'

import AboutUsSubRoute from './sub/aboutus'
import NewsSubRoute from './sub/news'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      redirect: '/aboutus/company',
      component: AboutUs,
      children: AboutUsSubRoute.routes
    },
    {
      path: '/findpartner',
      name: 'findpartner',
      component: FindPartner
    },
    {
      path: '/findpartner/partnerinfo',
      name: 'partnerinfo',
      component: PartnerInfo
    },
    {
      path: '/lovestory',
      name: 'lovestory',
      component: LoveStory
    },
    {
      path: '/news',
      name: 'news',
      redirect: '/news/notification',
      component: News,
      children: NewsSubRoute.routes
    },
    {
      path: '/news/newsinfo',
      name: 'newsinfo',
      component: NewsInfo
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: MyInfo,
      redirect: '/myinfo/basicInfo',
      children: [
        {
          path: '/myinfo/basicInfo',
          name: 'myinfo-basicinfo',
          component: BasicInfo
        }, {
          path: '/myinfo/datingRecords',
          name: 'myinfo-datingrecords',
          component: DatingRecords
        }
      ]
    }
  ]
})
