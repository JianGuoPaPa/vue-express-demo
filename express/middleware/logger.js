const fs = require('fs')
const morgan = require('morgan')

const DATE = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
// 记录日志，成功和错误区分记录，提供日志查询接口
const accessLogStream = fs.createWriteStream(`./log/${DATE}-access.log`, {flags: 'a'})
const errorLogStream = fs.createWriteStream(`./log/${DATE}-error.log`, {flags: 'a'})
const accessFormat = '{"type":"access","date":":date", "method":":method", "url":":url", "status":":status", "contentLength":":res[content-length]", "referrer":":referrer", "requestBody"::requestBody, "time":":response-time ms"}'
const errorFormat = '{"type":"error","date":":date", "method":":method", "url":":url", "status":":status", "contentLength":":res[content-length]", "referrer":":referrer", "requestBody"::requestBody, "time":":response-time ms"}'
// morgan不提供请求参数记录，自定义requestBody字段
morgan.token('requestBody', function (req, res) {
    return JSON.stringify(req.body) || '-';
})

module.exports = {
    accessLog: morgan(accessFormat, {
        stream: accessLogStream,
        // 非options请求且code非200 的跳过
        skip: function (req, res) {
            console.log(res.statusCode)
            return req.method === 'OPTIONS' || res.statusCode !== 200
        }
    }),
    errorLog: morgan(errorFormat, {
        stream: errorLogStream,
        // options和成功请求跳过
        skip: function (req, res) {
            return res.statusCode === 200 || req.method === 'OPTIONS'
        }
    })
}
