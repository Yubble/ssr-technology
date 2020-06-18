/*
 * @Author: liuyanbao
 * @Date: 2020-04-07 20:59:07
 * @LastEditTime: 2020-04-15 20:39:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/src/main.js
 */
import Vue from 'vue'
import createRouter from './route.js'
import App from './App.vue'
import createStore from './store'

// 导出一个工厂函数，用于创建新的vue实例
export function createApp() {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
      router,
      store,
      render: h => h(App)
  })

  return app
}
