// export { default as user } from './user'
// export { default as book } from './book'
import user from './user'
import book from './book'

export default app => {
  app.use(user.routes()).use(user.allowedMethods())
  app.use(book.routes()).use(book.allowedMethods())
}
