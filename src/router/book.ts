const Router = require('@koa/router')
import book from './Controller/book'
const router = new Router()
const bookApi = 'book'
// 注册登录路由
router.post(`/${bookApi}/create`, book.create)
router.post(`/${bookApi}/update`, book.update)
router.get(`/${bookApi}/delete`, book.delete)
router.get(`/${bookApi}/find`, book.find)
export default router
