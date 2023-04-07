import axios from 'axios'
import { message } from 'antd'
import history from '../history'

const service = axios.create({
  baseURL: "http://192.168.207.233:25001", // 在线
  // baseURL: 'http://192.168.128.125:5000', // 本地

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
    // if (response.data.status === 401) {
    //   const navigate = useNavigate();
    //   navigate("/");
    // }
    console.log('response', response)
    return response
  },
  function (error) {
    const status = error.response['status']
    const msg = error.response.data.msg
    message.error(msg)
    if (status === 401) {
      // redirect to login page
      history.push('/')
      window.location.reload()
    }
    return Promise.reject(error.response)
  }
)

export default service
