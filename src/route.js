/*
 * @Author: your name
 * @Date: 2020-04-07 20:59:07
 * @LastEditTime: 2020-06-18 22:05:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/src/route.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default function createRouter() {
  let router = new VueRouter({
    // 要记得增加mode属性，因为#后面的内容不会发送至服务器，服务器不知道请求的是哪一个路由
    mode: 'history',
    routes: [
      {
        path: '/',
        component: require('./views/cashier.vue')
      },
      {
        path: '/success',
        component: require('./views/success1.vue')
      }
    ]
  })

  return router
}
