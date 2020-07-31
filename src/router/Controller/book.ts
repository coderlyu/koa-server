import { Context } from 'koa'
export default class BookRouter {
  public static async create(ctx: Context) {
    ctx.body = 'book create'
  }
  public static async find(ctx: Context) {
    ctx.body = 'book find'
  }
  public static async update(ctx: Context) {
    ctx.body = 'book update'
  }
  public static async delete(ctx: Context) {
    ctx.body = 'book delete'
  }
}
