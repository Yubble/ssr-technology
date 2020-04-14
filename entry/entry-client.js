/*
 * @Author: your name
 * @Date: 2020-04-07 21:08:55
 * @LastEditTime: 2020-04-14 16:30:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/entry/entry-client.js
 */

import { createApp } from '../src/main'

const app = createApp()

// 同步服务端信息
if (window.__INITIAL_STATE__) {
  app.$store.replaceState(window.__INITIAL_STATE__)
}

// 绑定app根元素
window.onload = function() {
  app.$mount('#app')
}
