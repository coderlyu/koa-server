import { Context } from 'koa'
export default class UserRouter {
  public static async login(ctx: Context) {
    ctx.body = 'user login'
  }
  public static async create(ctx: Context) {
    ctx.body = 'user create'
  }
  public static async find(ctx: Context) {
    ctx.body = 'user find'
  }
  public static async update(ctx: Context) {
    ctx.body = 'user update'
  }
}
