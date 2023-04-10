const readabilityIndicatorparamsLists = [
  {
    key: 1,
    name: 'appid',
    type: 'string',
    required: 'true',
    description: '用户appid',
  },
  {
    key: 2,
    name: 'files',
    type: 'file[]',
    required: 'true',
    description: '需要处理的files列表',
  },
  {
    key: 3,
    name: 'indicators',
    type: 'string',
    required: '-',
    description:
      '需要处理的文本可读性指标简称(不传则默认全部处理)，如"ari,rix"，简称间以","进行分隔',
  },
]

const readabilityIndicatorExampleResponseParams = [
  {
    key: 1,
    name: 'code',
    type: 'number',
    description: '0：处理成功；\n -1：处理异常',
  },
  {
    key: 2,
    name: 'data',
    type: 'list',
    description: '-',
  },
  {
    key: 3,
    name: 'data[0]',
    type: 'object',
    description: '包含指定文本可读性指标{key: value}结果',
  },
  {
    key: 5,
    name: 'msg',
    type: 'string',
    description: '必要时的后台提示信息',
  },
]

const supportingReadabilityIndicatorColumns = [
  {
    key: 'indicator',
    dataIndex: 'indicator',
    title: '可读性指标',
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: '对应可读性指标简称',
  },
]
let supportingReadabilityIndicatorMapping = {
  ARI: 'ari',
  RIX: 'rix',
  FleschReading: 'fleschreading',
  FleschKincaidGrade: 'fleschkincaid',
  GunningFog: 'gunning',
  Smog: 'smog',
  ColemanliauIndex: 'colemanliau',
  DaleChallIndex: 'dalechall',
  LWIndex: 'lwIndex',
}
supportingReadabilityIndicatorMapping = Object.keys(
  supportingReadabilityIndicatorMapping
).map((item) => {
  return {
    indicator: item,
    name: supportingReadabilityIndicatorMapping[item],
  }
})

const readabilityCorrectExampleResponse = JSON.stringify(
  {
    code: 0,
    data: [
      {
        ari: 17.42960552268245,
        rix: 10.166666666666666,
        fleschreading: 44.58784516765286,
        fleschkincaid: 14.03760355029586,
        gunning: 11.661932938856017,
        smog: 31.89636655359978,
        colemanliau: 14.08,
        dalechall: 20.636702761341226,
        lwIndex: 251.5,
      },
      {
        ari: 22.54322580645161,
        rix: 15.6,
        fleschreading: 26.71248387096773,
        fleschkincaid: 18.774989247311833,
        gunning: 15.275698924731186,
        smog: 36.2264954516723,
        colemanliau: 15.0804,
        dalechall: 21.101835053763445,
        lwIndex: 277.0,
      },
    ],
    msg: 'success',
  },
  null,
  4
)

const readabilityErrorExampleResponse = JSON.stringify(
  {
    code: -1,
    data: null,
    msg: 'missing required param files',
  },
  null,
  4
)

export {
  readabilityIndicatorparamsLists,
  readabilityIndicatorExampleResponseParams,
  supportingReadabilityIndicatorColumns,
  supportingReadabilityIndicatorMapping,
  readabilityCorrectExampleResponse,
  readabilityErrorExampleResponse
}
