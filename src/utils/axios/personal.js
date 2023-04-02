import { httpGet, httpPost, httpPut } from "./index";

// 获取个人信息
export const getPersonApi = () => httpGet({ url: "/getUserInfo" });

// 修改个人信息
export const changeInformationApi = (data) =>
  httpPut({ url: "/updateUserInfo", data });

// 修改密码
export const changePasswordApi = (data) =>
  httpPut({ url: "/updateUserPassword", data });
