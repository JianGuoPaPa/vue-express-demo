import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000,
  withCredentials: true
})

// request interceptor
// service.interceptors.request.use(
//     config => {
//     },
//     error => {
//     }
// )
//
// service.interceptors.response.use(
//     response => {
//     },
//     error => {
//     }
// )

export default service
