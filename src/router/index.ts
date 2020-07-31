// export { default as user } from './user'
// export { default as book } from './book'
import user from './user'
import book from './book'

export default (app: { use: (arg0: any) => { (): any; new(): any; use: { (arg0: any): void; new(): any } } }) => {
  app.use(user.routes()).use(user.allowedMethods())
  app.use(book.routes()).use(book.allowedMethods())
}
