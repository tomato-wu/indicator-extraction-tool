import { httpDelete, httpGet, httpPost } from "./index";

// 输入文本 - 语种识别接口
export const getLanguageApi = (data = {}) =>
  httpPost({ url: "/api/langrc", data });

// TTR
export const getTTRApi = (data = {}) => httpPost({ url: "/common/ttr", data });

// R1
export const getR1Api = (data = {}) => httpPost({ url: "/common/r1", data });

// RR
export const getRRApi = (data = {}) => httpPost({ url: "/common/rr", data });

// RRMC
export const getRRMCApi = (data = {}) =>
  httpPost({ url: "/common/rrmc", data });

// TCValue
export const getTCValueApi = (data = {}) =>
  httpPost({ url: "/common/tc", data });

// SecondaryTC
export const getSecondaryTCApi = (data = {}) =>
  httpPost({ url: "/common/secondtc", data });

// Activity
export const getActivityApi = (data = {}) =>
  httpPost({ url: "/common/activity", data });

// Descriptivity
export const getDescriptivityApi = (data = {}) =>
  httpPost({ url: "/common/descriptivity", data });

// lvalue
export const getlvalueApi = (data = {}) =>
  httpPost({ url: "/common/lvalue", data });

// CurveLength
export const getCurveLengthApi = (data = {}) =>
  httpPost({ url: "/common/curveLength", data });

// lambda
export const getLambdaApi = (data = {}) =>
  httpPost({ url: "/common/lambda", data });

// adjustModule
export const getAdjustModuleApi = (data = {}) =>
  httpPost({ url: "/common/adjustModule", data });

// Gini 系数
export const getGiniApi = (data = {}) =>
  httpPost({ url: "/common/gini", data });

// R4
export const getR4Api = (data = {}) => httpPost({ url: "/common/r4", data });

// Hpax Percentage
export const getHapaxApi = (data = {}) =>
  httpPost({ url: "/common/hapax", data });

// 作者视野
export const getWriterViewApi = (data = {}) =>
  httpPost({ url: "/common/writerView", data });

// 动词间距
export const getVerbDistanceApi = (data = {}) =>
  httpPost({ url: "/common/verbDistance", data });

//Dicts 词典数
export const getDictsApi = (data = {}) =>
  httpPost({ url: "/common/dictWords", data });

//Words 总词数
export const getWordsApi = (data = {}) =>
  httpPost({ url: "/common/totalWords", data });

// HPoint h点
export const getHPointApi = (data = {}) =>
  httpPost({ url: "/common/hpoint", data });

//Entropy 文本熵
export const getEntropyApi = (data = {}) =>
  httpPost({ url: "/common/entrop", data });

// 一键提取所有通用
export const getAllTagApi = (data = {}) =>
  httpPost({ url: "/common/all", data });

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 获取历史记录
export const getHistoryApi = () => httpGet({ url: "/getUserHistory" });

// 删除历史记录
export const deleteHistoryApi = (data = {}) =>
  httpDelete({ url: "/getUserHistory", data });

// 登录
export const UserNameLoginApi = (data = {}) =>
  httpPost({ url: "/user/username/login", data });
export const EmailLoginApi = (data = {}) =>
  httpPost({ url: "/user/email/login", data });

// 注册
export const registerApi = (data = {}) =>
  httpPost({ url: "/user/regist", data });
// 发送验证码
export const sendCodeApi = (data = {}) => httpPost({ url: "/user/mail", data });

// 退出
export const logoutApi = () => httpPost({ url: "/user/logout" });

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 获取用户 appid
export const getAppidApi = () => httpGet({ url: "/getAppid" });

// 创建 appid
export const createAppidApi = (data = {}) =>
  httpPost({ url: "/generateAppid", data });
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//上传文件列表
export const getUploadFileListApi = (data = {}) =>
  httpPost({ url: "/open/common", data });

// 导出 excel
export const exportExcelApi = (data = {}) =>
  httpPost({ url: "/common/download", data, responseType: "blob" });
