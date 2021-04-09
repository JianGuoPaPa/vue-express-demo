const express = require('express')
const app = express()
const router = require('./router')
const history = require('connect-history-api-fallback')
const { setHeader, setSession } = require('./conf')
const { accessLog, errorLog } = require('./middleware/logger')


// 解决vue history路由刷新404
app.use(history())
// public文件静态资源托管
app.use(express.static('public'))
// 需要使用urlencoded包才能读取post body
// true: querystring内置模块
// false: qs 第三方模块
// qs: 是用来解析键值对字符串为对象格式的包
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// 设置请求头
app.all('*', setHeader)

// 设置session
app.use(setSession)

// 日志
app.use(accessLog)
app.use(errorLog)

// 路由
app.use(router)

app.listen(3000, function () {
  console.log('server start at http://0.0.0.0:3000')
})
