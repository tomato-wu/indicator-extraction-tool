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
    name: 'data[0]',
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
supportingIndicators = Object.keys(supportingIndicators).map((item) => {
  return {
    indicator: item,
    name: supportingIndicators[item],
  }
})

const commonIndicatorCorrectExampleResponse = JSON.stringify(
  {
    code: 0,
    data: [
      {
        words: 215,
        dicts: 153,
        hapaxs: 128,
        ttr: 0.7116279069767442,
        hpoint: 3.5,
        entropy: 6.587934979072887,
        r1: 0.916860465116279,
        rr: 0.010859924283396348,
        rrmc: 0.9745790890250252,
        tc: 0.7161904761904762,
        secondTc: -0.022857142857142857,
        activity: 0.8783783783783784,
        descriptivity: 0.12162162162162163,
        l: 162.7067298706133,
        curveLength: 0.9208496000373919,
        lambda: 1.7651322531968265,
        adjustModel: 18.831736870579647,
        gini: 0.26763945888432894,
        r4: 0.7323605411156711,
        writerView: -0.22873840635658252,
        verbDistance: 3.15625,
      },
      {
        words: 182,
        dicts: 110,
        hapaxs: 81,
        ttr: 0.6043956043956044,
        hpoint: 4,
        entropy: 6.006881851470348,
        r1: 0.8901098901098901,
        rr: 0.014068349233184414,
        rrmc: 0.9742842899509416,
        tc: 0.5,
        secondTc: 0,
        activity: 0.9183673469387755,
        descriptivity: 0.08163265306122448,
        l: 117.48768087758589,
        curveLength: 0.9127990261281842,
        lambda: 1.458959043912929,
        adjustModel: 12.252435773602388,
        gini: 0.34665334665334663,
        r4: 0.6533466533466534,
        writerView: -0.3429399739025931,
        verbDistance: 3.840909090909091,
      },
    ],
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
  commonIndicatorCorrectExampleResponse,
  commonIndicatorErrortExampleResponse,
}
