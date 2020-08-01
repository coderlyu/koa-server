const Router = require('@koa/router')
import user from './Controller/user'
const router = new Router()
const userApi = 'user'
// 注册 user 路由
router.post(`/${userApi}/login`, user.login)
router.post(`/${userApi}/create`, user.create)
router.get(`/${userApi}/find`, user.find)
router.post(`/${userApi}/update`, user.update)
export default router
