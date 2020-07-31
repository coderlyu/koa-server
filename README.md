# run

- 首先你电脑上得安装 mysql
- `npm install`
- `npm start`

## REST Client

- `vscode` 搜索 `REST Client`插件并安装
- 用来模拟接口请求
- 具体可看 `client` 文件夹

## mysql

- 本项目当前连接端口号 `port: 3306`
- 本项目当前连接用户名 `username: root`
- 本项目当前连接密码 `password: 123456`
- 本项目当前连接数据库名字 `database: book`

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
