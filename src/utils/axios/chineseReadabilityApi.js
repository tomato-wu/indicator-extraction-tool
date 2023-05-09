import { httpPost } from "./index";

// 基于18个特征文本可读性
export const getFeature18 = (data = {}) =>
  httpPost({ url: "/zh_readability/feature18", data });

// 基于22个特征文本可读性
export const getFeature22 = (data = {}) =>
  httpPost({ url: "/zh_readability/feature22", data });
