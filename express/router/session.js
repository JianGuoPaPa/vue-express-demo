const express = require('express');
const router = express.Router();

router.post('/start', function (req, res) {
    res.status(200).send({
        code: 200,
        message: '开启session',
        data: req.session,
        success: true
    })
})

router.post('/requestTimes', function (req, res) {
    if (req.session.requestTime) {
        req.session.requestTime++
        res.status(200).send(req.session)
    } else {
        req.session.requestTime = 1
        res.status(200).send(req.session)
    }
})

router.post('/end', function (req, res) {
    req.session.destroy()
    res.status(200).send({
        code: 200,
        message: 'session已清除',
        success: true
    })
})

module.exports = router
