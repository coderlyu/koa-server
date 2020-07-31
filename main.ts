import chalk = require('chalk')
import http = require('http')
import https = require('https')
import Koa = require('koa')
import { Context } from 'koa'
import cors = require('@koa/cors')
import bodyParser = require('koa-bodyparser')

// 初始化 Koa 应用实例
const app = new Koa()

// 注册中间件
app.use(cors()) // 允许跨域
app.use(bodyParser({}))

// 响应用户请求
app.use((ctx: Context) => {
  ctx.body = 'Hello Koa'
})

// 运行服务器
http.createServer(app.callback()).listen(3000, () => {
  console.log(chalk.blue('server is run at http://localhost:3000'))
  console.log(chalk.blue('server is run at http://127.0.0.1:3000'))
})
https.createServer(app.callback()).listen(3001, () => {
  console.log(chalk.blue('server is run at https://localhost:3001'))
  console.log(chalk.blue('server is run at https://127.0.0.1:3001'))
})
