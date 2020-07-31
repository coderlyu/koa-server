const chalk = require('chalk')
const http = require('http')
const https = require('https')
const Koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
// 初始化 Koa 应用实例
const app = new Koa()
const router = new Router()
// 注册中间件
app.use(cors()) // 允许跨域
app.use(bodyParser())

// 响应用户请求
app.use(ctx => {
  ctx.body = 'Hello Koa'
})

// 运行服务器
http.createServer(app.callback()).listen(3000, err => {
  if (!err) {
    console.log(chalk.blue('server is run at http://localhost:3000'))
    console.log(chalk.blue('server is run at http://127.0.0.1:3000'))
  }
})
https.createServer(app.callback()).listen(3001, err => {
  if (!err) {
    console.log(chalk.blue('server is run at https://localhost:3001'))
    console.log(chalk.blue('server is run at https://127.0.0.1:3001'))
  }
})
