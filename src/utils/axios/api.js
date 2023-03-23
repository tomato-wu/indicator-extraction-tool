import { httpGet, httpPost } from "./index";

// 输入文本 - 语种识别接口
export const getLanguageApi = (data = {}) =>
  httpPost({ url: "/api/langrc", data });

// TTR 指标
export const getTTRApi = (data = {}) => httpPost({ url: "/common/ttr", data });

// R1 指标
export const getR1Api = (data = {}) => httpPost({ url: "/common/r1", data });

// RR 指标
export const getRRApi = (data = {}) => httpPost({ url: "/common/rr", data });

// RRMC 指标
export const getRRMCApi = (data = {}) =>
  httpPost({ url: "/common/rrmc", data });

// TCValue 指标
export const getTCValueApi = (data = {}) =>
  httpPost({ url: "/common/tc", data });

// SecondaryTC 指标
export const getSecondaryTCApi = (data = {}) =>
  httpPost({ url: "/common/secondtc", data });

// Activity 指标
export const getActivityApi = (data = {}) =>
  httpPost({ url: "/common/activity", data });

// Descriptivity 指标
export const getDescriptivityApi = (data = {}) =>
  httpPost({ url: "/common/descriptivity", data });

// lvalue 指标
export const getlvalueApi = (data = {}) =>
  httpPost({ url: "/common/lvalue", data });

// CurveLength 指标
export const getCurveLengthApi = (data = {}) =>
  httpPost({ url: "/common/curveLength", data });

// lambda 指标
export const getLambdaApi = (data = {}) =>
  httpPost({ url: "/common/lambda", data });

// adjustModule 指标
export const getAdjustModuleApi = (data = {}) =>
  httpPost({ url: "/common/adjustModule", data });

// Gini 系数
export const getGiniApi = (data = {}) =>
  httpPost({ url: "/common/gini", data });

// R4 指标
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

// 齐普夫检验
// export const getZipfApi = (data = {}) =>
//   httpPost({ url: "/common/zipf", data });

// 一键提取所有通用指标
export const getAllTagApi = (data = {}) =>
  httpPost({ url: "/common/all", data });

// 登录
export const loginApi = (data = {}) => httpPost({ url: "/user/login", data });
// 注册
export const registerApi = (data = {}) =>
  httpPost({ url: "/api/register", data });
// 发送验证码
export const sendCodeApi = (data = {}) => httpPost({ url: "/user/mail", data });
