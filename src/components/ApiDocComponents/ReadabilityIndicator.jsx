import { Table, Typography } from 'antd'
import {
  baseColumns,
  baseResponseColumns,
  readabilityIndicatorExampleResponseParams,
  readabilityIndicatorparamsLists,
  supportingIndictorsColumns,
  supportingReadabilityIndicatorMapping,
  readabilityCorrectExampleResponse,
  readabilityErrorExampleResponse,
} from './constant'
import './style/index.css'

const { Paragraph } = Typography

const ReadabilityIndicator = () => {
  return (
    <div className="box-wrapper">
      <Paragraph className="header">
        <h3>文本可读性指标 API 接入文档</h3>
        本文档为多语种计量指标提取工具多语种文本可读性指标提取接口，目前支持处理语种包括英语、西班牙语、
        葡萄牙语、德语、意大利语、法语。
      </Paragraph>
      <Paragraph className="content">
        <Paragraph className="small-topic-wrapper">
          <h4>接口详情</h4>
          HTTPS地址
          <pre>http://192.168.207.233:25001/open/readability</pre>
          Content-Type
          <pre>mutipart/form-data</pre>
        </Paragraph>
        <Paragraph className="small-topic-wrapper">
          <h4>参数说明</h4>
          <Table
            columns={baseColumns}
            dataSource={readabilityIndicatorparamsLists}
            pagination={false}
          />
          <h4>支持文本可读性指标列表</h4>
          <Table
            columns={supportingIndictorsColumns}
            dataSource={supportingReadabilityIndicatorMapping}
            pagination={false}
          />
        </Paragraph>
        <Paragraph className="small-topic-wrapper">
          <h4>返回结果</h4>
          <Table
            columns={baseResponseColumns}
            dataSource={readabilityIndicatorExampleResponseParams}
            pagination={false}
          />
        </Paragraph>
        <Paragraph className="small-topic-wrapper">
          <h4>输出示例</h4>
          成功示例
          <pre>{readabilityCorrectExampleResponse}</pre>
          失败示例
          <pre>{readabilityErrorExampleResponse}</pre>
        </Paragraph>
      </Paragraph>
      <div className="footer"></div>
    </div>
  )
}

export default ReadabilityIndicator
