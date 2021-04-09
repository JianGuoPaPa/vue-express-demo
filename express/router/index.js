const express = require('express')
const router = express.Router()
const fs = require('fs')
const axios = require('axios')
const validator = require('../middleware/validator')
const sessionRouter = require('./session')

function readLog(date, type) {
    return new Promise((resolve) => {
        fs.readFile(`./log/${date}-${type}.log`, 'utf-8', (err, data) => {
            if (err) {
                resolve([])
                return
            }
            // 过滤掉空行
            resolve(data.split('\n').filter(log => log))
        })
    })
}

router.post('/queryCity', validator.require(['city']),
    function (req, res) {
        if (!req.body.city) {
            res.status(400).send({
                code: 400,
                message: '缺少city参数',
                success: false
            })
        } else {
            axios.get(`https://h5.133.cn/hangban/basic/search_airport?q=${encodeURIComponent(req.body.city)}`).then(cb => {
                cb.data.forEach(airport => {
                    airport.nation = airport.english.split(' ')[0] || 'China'
                })
                res.status(200).send(cb.data)
            })
        }
    })

router.post('/getLog', async function (req, res, next) {
    let date = req.body.date.replaceAll('/', '-')
    const accessLog = await readLog(date, 'access')
    const errorLog = await readLog(date, 'error')
    const data = accessLog.concat(errorLog)
    if (data.length) {
        res.status(200).send(data.map(log => JSON.parse(log)))
    } else {
        res.status(400).send({
            code: 400,
            message: '未查询到日志',
            success: false
        })
    }
})

router.post('/middlewareDemo', validator.require(['param1', 'param2', 'param3']),
    function (req, res, next) {
        res.status(200).send({
            code: 200,
            message: '请求成功',
            success: false
        })
    })

router.use('/session', sessionRouter)

module.exports = router
