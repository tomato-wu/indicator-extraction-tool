import { Typography, Table } from 'antd'
import {
  baseColumns,
  baseResponseColumns,
  commonIndicatoreparamsLists,
  commonIndicatorExampleResponseParams,
  supportingIndicators,
  supportingIndictorsColumns,
  commonIndicatorCorrectExampleResponse,
  commonIndicatorErrortExampleResponse,
  supportingCumulativeIndicators,
} from './constant'
import './style/index.css'

const { Paragraph } = Typography

const CommonIndicator = () => {
  return (
    <div className="box-wrapper">
      <Paragraph className="header">
        <h3>通用指标 API 接入文档</h3>
        本文档为多语种计量指标提取工具多语种通用指标提取接口，目前支持处理汉语、英语、阿拉伯语、孟加拉语、波斯语、土耳其语、韩语、日语、印尼语、柬埔寨语、老挝语、菲律宾语、泰语、越南语、葡萄牙语、西班牙语、捷克语、法语、德语、俄语、乌克兰语、意大利语、瑞典语。
      </Paragraph>
      <Paragraph className="content">
        <Paragraph className="small-topic-wrapper">
          <h4>接口详情</h4>
          HTTPS地址
          <pre>http://192.168.207.233:25001/open/common</pre>
          Content-Type
          <pre>mutipart/form-data</pre>
        </Paragraph>
        <Paragraph className="small-topic-wrapper">
          <h4>参数说明</h4>
          <Table
            columns={baseColumns}
            dataSource={commonIndicatoreparamsLists}
            pagination={false}
          />
          <h4>支持处理的指标列表</h4>
          <Table
            columns={supportingIndictorsColumns}
            dataSource={supportingIndicators}
            pagination={false}
          />
          <h4>支持增量指标列表</h4>
          <Table
            columns={supportingIndictorsColumns}
            dataSource={supportingCumulativeIndicators}
            pagination={false}
          />
        </Paragraph>
        <Paragraph className="small-topic-wrapper">
          <h4>返回结果</h4>
          <Table
            columns={baseResponseColumns}
            dataSource={commonIndicatorExampleResponseParams}
            pagination={false}
          />
        </Paragraph>
        <Paragraph className="small-topic-wrapper">
          <h4>输出示例</h4>
          成功示例
          <pre>{commonIndicatorCorrectExampleResponse}</pre>
          失败示例
          <pre>{commonIndicatorErrortExampleResponse}</pre>
        </Paragraph>
      </Paragraph>
      <div className="footer"></div>
    </div>
  )
}

export default CommonIndicator
