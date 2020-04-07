/*
 * @Author: your name
 * @Date: 2020-04-07 20:59:07
 * @LastEditTime: 2020-04-07 21:36:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/webpack/webpack.server.js
 */
const path = require('path')
const projectRoot = path.resolve(__dirname, '..')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
  process.noDeprecation = true
}

module.exports = {
  target: 'node',
  // entry: ['babel-polyfill', path.join(projectRoot, 'entry/test.js')],
  entry: ['babel-polyfill', path.join(projectRoot, 'entry/entry-server.js')],
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(projectRoot, 'dist'),
    filename: 'bundle.server.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/,
        options: {
            presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  },
  plugins: [],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js'
    }
  }
}
