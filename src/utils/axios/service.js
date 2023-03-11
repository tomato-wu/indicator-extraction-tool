import axios from "axios";

const service = axios.create({
  baseURL: "http://192.168.207.233:25001",
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
});

// 添加请求拦截器（Interceptors）
service.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default service;
