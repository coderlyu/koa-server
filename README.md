# run

- 首先你电脑上得安装 `mysql`
- `windows`环境安装 `mysql` 可以看这篇文章：<a href="https://www.cnblogs.com/reyinever/p/8551977.html" target="_blank">https://www.cnblogs.com/reyinever/p/8551977.html</a>
- `npm install`
- `npm start`

## REST Client

- `vscode` 搜索 `REST Client`插件并安装
- 用来模拟接口请求
- 模拟请求写在了 `client` 文件夹
- `REST Client` 如何使用可以阅读这篇文文章： <a href="https://zhuanlan.zhihu.com/p/54266685" target="_blank">https://zhuanlan.zhihu.com/p/54266685</a>

## mysql

- 本项目当前连接端口号 `port: 3306`
- 本项目当前连接用户名 `username: root`
- 本项目当前连接密码 `password: 123456`
- 本项目当前连接数据库名字 `database: book`

## typeorm

- 根据模型自动创建数据库表
- 可以透明的插入/更新/删除数据库对象
- 映射数据库 `table` 到 `Javascript` 对象，映射表列到 `Javascript` 对象属性
- 提供表的一对一，多对一，一对多，多对多关系处理
- 具体使用可以参看官网： <a href="https://typeorm.io/#/" target="_blank">https://typeorm.io</a>

## ormconfig 说明

```js
{
  "type": "mysql",
  "host": "localhost", // 连接主机
  "port": 3306, // 连接端口号
  "username": "root", // 登录用户
  "password": "123456", // 登录密码
  "database": "book", // 要连接的数据库名字
  "synchronize": true, // 设为 true 能够让我们每次修改模型定义后都能自动同步到数据库（如果你接触过其他的 ORM 库，其实就是自动数据迁移）
  "entities": ["src/model/*.ts"], // model 字段定义了模型文件的路径
  "cli": {
    "entitiesDir": "src/model"
  }
}
```
