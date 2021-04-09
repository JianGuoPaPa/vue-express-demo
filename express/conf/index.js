const session = require('express-session')

module.exports = {
  setHeader: function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Credentials', 'true') //配合origin设置，否则无法存储session
    next()
  },
  setSession: session({
    name: 'session-id',
    secret: 'chen',
    saveUninitialized: true,     //强制将未初始化的 session 存储
    resave: false,   //强制保存 session 即使它并没有变化
    cookie: {
      maxAge: 1000 * 30 * 60,    /*过期时间*/
      secure: false
    }
  })
}
