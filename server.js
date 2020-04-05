const Vue = require('vue')
const express = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

const app = new Vue({
  template: '<div>Hello world</div>'
})

express.get('/', (req, res) => {
  // 解析vue实例
  renderer.renderToString(app, (err, html) => {
    res.send(`
      <html>
        <head>
          <meta charset="UTF-8">
          <title>测试ssr</title>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `)
  })
})

express.listen(8800, () => {
  console.log('服务器已启动！')
})
