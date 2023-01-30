import service from "./service";
import qs from "qs";

// post 方法
export function post(url, params) {
  return new Promise(function (resovle, reject) {
    service
      .post(url, params)
      .then(
        (res) => {
          if (!res.data) {
            resovle(res);
          }
          resovle(res.data);
        },
        (err) => {
          reject(err);
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
}

// get 方法
export function get(url, params) {
  let queryStr = qs.stringify(params); //序列化
  return new Promise(function (resovle, reject) {
    service
      .get(url + "?" + queryStr)
      .then(
        (res) => {
          if (!res.data) {
            resovle(res);
          }
          resovle(res.data);
        },
        (err) => {
          reject(err);
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
}
