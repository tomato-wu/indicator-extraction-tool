import axios from 'axios'
import { message } from 'antd'
import history from '../history'

console.log(process.env.NODE_ENV)
console.log(process.env)

const service = axios.create({
  baseURL: process.env.REACT_APP_REQUEST_URL, // 在线
  timeout: 100000,
  headers: {
    // get: {
    //   "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    //   // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
    // },
    // post: {
    //   "Content-Type": "application/json;charset=utf-8",
    //   // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
    // },
  },
})

// 添加请求拦截器（Interceptors）
service.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers.authorization = 'Bearer ' + token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    console.log('response', response)
    return response
  },
  function (error) {
    const status = error.response['status']
    const msg = error.response.data.msg
    message.error(msg)
    if (status === 401) {
      // redirect to login page
      localStorage.removeItem('token')
      history.push('/')
      window.location.reload()
    }
    return Promise.reject(error.response)
  }
)

export default service
