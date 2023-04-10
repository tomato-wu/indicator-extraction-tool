const languageparamsLists = [
  {
    key: 1,
    name: 'appid',
    type: 'string',
    required: 'true',
    description: '用户appid',
  },
  {
    key: 2,
    name: 'text',
    type: 'string',
    required: 'true',
    description: '需要进行语种检测的文本',
  },
]

const languageResponseParamsLists = [
  {
    key: 1,
    name: 'code',
    type: 'number',
    description: '0：处理成功；\n -1：处理异常',
  },
  {
    key: 2,
    name: 'data',
    type: 'object',
    description: '-',
  },
  {
    key: 3,
    name: 'data.lg_type',
    type: 'string',
    description: '语种识别简称',
  },
  {
    key: 4,
    name: 'data.lg_text',
    type: 'string',
    description: '传入原文本',
  },
  {
    key: 5,
    name: 'data.lg_name',
    type: 'string',
    description: '语种中文名',
  },
  {
    key: 5,
    name: 'msg',
    type: 'string',
    description: '必要时的后台提示信息',
  },
]

const exampleCorrectRequestBodyStructure = JSON.stringify({
  code: 0,
  data: {
    lg_type: 'zh',
    lg_name: '中文',
    lg_text: '本文档为多语种计量指标提取工具内部语种识别接口',
  },
  msg: null,
}, null, 4)

const exampleErrorRequestBodyStructure = JSON.stringify({
  code: -1,
  data: null,
  msg: 'api不支持该语种处理',
}, null, 4)

export {
  languageparamsLists,
  languageResponseParamsLists,
  exampleCorrectRequestBodyStructure,
  exampleErrorRequestBodyStructure
}
