import axios from "axios";

const service = axios.create({
  baseURL: "http://120.77.245.193:6000/",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    // "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
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
