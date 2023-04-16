import service from "./service";
import qs from "qs";

// get 请求
export function httpGet({ url, params = {} }) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// post请求
//在使用FormData上传文件时，浏览器会自动识别并添加请求头 “Content-Type: multipart/form-data”，无需手动设置。

export function httpPost({ url, data = {}, params = {}, responseType }) {
  return new Promise((resolve, reject) => {
    service({
      url,
      method: "post",
      // transformRequest: [
      //   function (data) {
      //     let ret = "";
      //     for (let it in data) {
      //       ret +=
      //         encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
      //     }
      //     return ret;
      //   },
      // ],
      // 发送的数据
      data,
      //url参数
      params,
      responseType,
    }).then((res) => {
      resolve(res.data);
    });
  });
}

// put请求
export function httpPut({ url, data = {}, params = {} }) {
  return new Promise((resolve, reject) => {
    service({
      url,
      method: "put",
      transformRequest: [
        function (data) {
          let ret = "";
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
          }
          return ret;
        },
      ],
      // 发送的数据
      data,
      //url参数
      params,
    }).then((res) => {
      resolve(res.data);
    });
  });
}

// delete请求
// https://blog.csdn.net/qq383366204/article/details/80268007
export function httpDelete({ url, data = {} }) {
  let sq = "";
  for (const item in data) {
    sq += sq === "" ? "" : "&";
    sq += `${item}=${data[item]}`;
  }
  return new Promise((resolve, reject) => {
    service({
      url,
      method: "delete",
      // 发送的数据
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: sq,
    }).then((res) => {
      resolve(res.data);
    });
  });
}
