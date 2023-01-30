import { httpGet, httpPost } from "./index";

// 输入文本 - 语种识别接口
export const getLanguageApi = (data = {}) =>
  httpPost({ url: "api/langrc", data });
