const validator = {
    require: (fields) => {
        return (req, res, next) => {
            // 请求体所有的keys
            const paramKeys = Object.keys(req.body)
            // 必传但不包含的keys
            const notExistKeys = fields.filter(field => !paramKeys.includes(field))
            if (notExistKeys.length) {
                res.status(200).send({
                    code: 400,
                    message: `缺少${notExistKeys.join(',')}参数`,
                    success: false
                })
            } else {
                next()
            }
        }
    }
}

module.exports = validator
