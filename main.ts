import chalk = require('chalk')
import http = require('http')
import https = require('https')
import Koa = require('koa')
import { Context } from 'koa'
import cors = require('@koa/cors')
import bodyParser = require('koa-bodyparser')
import router from './src/router/index'
const app = new Koa()
app.use(cors())
app.use(bodyParser({}))
router(app)

app.use((ctx: Context) => {
  ctx.body = 'Hello Koa'
})

http.createServer(app.callback()).listen(3000, () => {
  console.log(chalk.blue('server is run at http://localhost:3000'))
  console.log(chalk.blue('server is run at http://127.0.0.1:3000'))
})
https.createServer(app.callback()).listen(3001, () => {
  console.log(chalk.blue('server is run at https://localhost:3001'))
  console.log(chalk.blue('server is run at https://127.0.0.1:3001'))
})
