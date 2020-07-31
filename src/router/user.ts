const Router = require('@koa/router')
import user from './Controller/user'
const router = new Router()
// 注册 user 路由
router.post('/user/login', user.login)
router.post('/user/create', user.create)
router.get('/user/find', user.find)
router.post('/user/update', user.update)
export default router
