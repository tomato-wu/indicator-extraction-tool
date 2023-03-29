import { httpGet, httpPost } from "./index";

// ARI
export const getARIApi = (data = {}) =>
  httpPost({ url: "/readability/ari", data });

// ARIGradeLevels
export const getARIGradeLevelsApi = (data = {}) =>
  httpPost({ url: "/readability/ariGrade", data });

// RIX
export const getRIXApi = (data = {}) =>
  httpPost({ url: "/readability/rix", data });

// FlsechKincaidGrade
export const getFlsechKincaidGradeApi = (data = {}) =>
  httpPost({ url: "/readability/flsechkincaid", data });

//GunningFog
export const getGunningFogApi = (data = {}) =>
  httpPost({ url: "/readability/gunningfog", data });

// Smog
export const getSmogApi = (data = {}) =>
  httpPost({ url: "/readability/smog", data });

// ColemanLiauIndex
export const getColemanLiauIndexApi = (data = {}) =>
  httpPost({ url: "/readability/colemanLiauIndex", data });

// DaleChallIndex
export const getDaleChallIndexApi = (data = {}) =>
  httpPost({ url: "/readability/daleChallIndex", data });

// LWIndex
export const getLWIndexApi = (data = {}) =>
  httpPost({ url: "/readability/lwIndex", data });

// 一件获取所有值
export const getAllTagsApi = (data = {}) =>
  httpPost({ url: "/readability/all", data });
