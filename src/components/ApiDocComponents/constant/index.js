export const baseColumns = [
  {
    title: '参数名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '是否必传',
    dataIndex: 'required',
    key: 'required',
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
]
export const baseResponseColumns = [
  {
    title: '字段名',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: '类型',
    key: 'type',
    dataIndex: 'type',
  },
  {
    title: '描述',
    key: 'description',
    dataIndex: 'description',
  },
]
export * from './Language'
export * from './CommonIndicator'
export * from './ReadabilityIndicator'
export * from './TextAnalyse'
