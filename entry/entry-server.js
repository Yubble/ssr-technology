/*
 * @Author: your name
 * @Date: 2020-04-07 20:59:07
 * @LastEditTime: 2020-04-09 22:09:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/entry/entry-server.js
 */
import { createApp } from '../src/main'

export default context => {
  return new Promise((resolve, reject) => {
    const app = createApp()
    // 更改路由
    app.$router.push(context.url)

    // 获取相应路由下的组件
    const matchedComponents = app.$router.getMatchedComponents()

    if (!matchedComponents.length) { return reject({ code: 404 }) }

    resolve(app)
  })
}
