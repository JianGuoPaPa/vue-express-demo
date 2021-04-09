import request from '@/utils/service'

// 查询日志
export function getLog(data) {
  return request({
    url: '/getLog',
    method: 'post',
    data
  })
}

// 中间件demo
export function middlewareDemo(data) {
  return request({
    url: '/middlewareDemo',
    method: 'post',
    data
  })
}

// 根据城市查询机场
export function queryCity(data) {
  return request({
    url: '/queryCity',
    method: 'post',
    data
  })
}

// 开启session会话
export function sessionStart(data) {
  return request({
    url: '/session/start',
    method: 'post',
    data
  })
}

// 查询session请求次数
export function requestTimes(data) {
  return request({
    url: '/session/requestTimes',
    method: 'post',
    data
  })
}

// 销毁session
export function sessionEnd(data) {
  return request({
    url: '/session/end',
    method: 'post',
    data
  })
}
