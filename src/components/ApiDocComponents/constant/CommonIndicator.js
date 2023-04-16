const commonIndicatoreparamsLists = [
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
    type: 'files[]',
    required: 'true',
    description: '需要处理的文件列表',
  },
  {
    key: 3,
    name: 'indicators',
    type: 'string',
    required: '-',
    description:
      '需要处理的通用计量指标简称(不传则默认全部处理)，如"words,dicts"，简称间以","进行分隔',
  },
  {
    key: 4,
    name: 'cumulatives',
    type: 'string',
    required: '-',
    description: '增量计算指标，传入形式如 indicators一致，不传则默认为 indicators'
  }
]

const commonIndicatorExampleResponseParams = [
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
    name: 'data.directory_indicators',
    type: 'object',
    description: '包含指定处理指标{key: value}结果',
  },
  {
    key: 4,
    name: 'data.cumulative_indicators',
    type: 'object',
    description: '包含指定处理指标{key: value}结果',
  },
  {
    key: 5,
    name: 'msg',
    type: 'string',
    description: '必要时的后台提示信息',
  },
]

const supportingIndictorsColumns = [
  {
    key: 'indicator',
    dataIndex: 'indicator',
    title: '指标',
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: '对应指标简称',
  },
]
let supportingIndicators = {
  总词数: 'words',
  词典数: 'dicts',
  单现词数: 'hapaxs',
  型例比: 'ttr',
  h点: 'hpoint',
  文本熵: 'entropy',
  丰富度: 'r1',
  重复率: 'rr',
  相对重复率: 'rrmc',
  主题集中度: 'tc',
  次级主题集中度: 'secondTc',
  活动度: 'activity',
  描写度: 'descriptivity',
  文本中词的秩序分布欧氏距离: 'l',
  文本中词的秩序分布R指数: 'curveLength',
  文本Lambda值: 'lambda',
  校正模数: 'adjustModel',
  基尼系数: 'gini',
  基尼系数补数: 'r4',
  作者视野: 'writerView',
  动词间距: 'verbDistance',
}

const excludes = ['writerView', 'verbDistance', 'adjustModel']
const supportingCumulativeIndicators = Object.keys(supportingIndicators).filter(item => !excludes.includes(supportingIndicators[item])).map(item => {
  return {
    key: supportingIndicators[item],
    indicator: item,
    name: supportingIndicators[item]
  }
})

supportingIndicators = Object.keys(supportingIndicators).map((item) => {
  return {
    key: supportingIndicators[item],
    indicator: item,
    name: supportingIndicators[item],
  }
})

const commonIndicatorCorrectExampleResponse = JSON.stringify(
  {
    code: 0,
    data: {
      directory_indicators: [
        {
          file_name: 'news1.txt',
          words: 215,
          dicts: 153,
          hapaxs: 128,
          ttr: 0.7116279069767442,
          hpoint: 3.5,
        },
        {
          file_name: 'news2.txt',
          words: 182,
          dicts: 110,
          hapaxs: 81,
          ttr: 0.6043956043956044,
          hpoint: 4,
        },
        {
          file_name: 'news5.txt',
          words: 205,
          dicts: 116,
          hapaxs: 85,
          ttr: 0.5658536585365853,
          hpoint: 4.5,
        },
      ],
      cumulative_indicators: {
        words: 602,
        dicts: 333,
        hapaxs: 237,
        ttr: 0.553156146179402,
        hpoint: 6,
      },
    },
    msg: 'success',
  },
  null,
  4
)
const commonIndicatorErrortExampleResponse = JSON.stringify(
  {
    code: -1,
    data: null,
    msg: 'error',
  },
  null,
  4
)

export {
  commonIndicatoreparamsLists,
  commonIndicatorExampleResponseParams,
  supportingIndicators,
  supportingIndictorsColumns,
  supportingCumulativeIndicators,
  commonIndicatorCorrectExampleResponse,
  commonIndicatorErrortExampleResponse,
}
