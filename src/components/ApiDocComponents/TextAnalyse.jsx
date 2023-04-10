import { Table, Typography } from 'antd'
import {
  baseColumns,
  baseResponseColumns,
  textAnalyseparamsLists,
  textAnalyseExampleResponseParams,
  wordSplitingExampleResponse,
  textPosExampleResponse,
} from './constant'
import './style/index.css'

const { Paragraph } = Typography

const TextAnalyse = () => {
  return (
    <div className="box-wrapper">
      <Paragraph className="header">
        <h3>文本处理 API 接入文档</h3>
        本文档为多语种计量指标提取工具内部文本处理接口，支持处理文本分词、文本词性标注。
        <a href="https://hanlp.hankcs.com/docs/annotations/pos/ud.html">
          词性标注规则集
        </a>
      </Paragraph>
      <Paragraph className="content">
        <Paragraph className="small-topic-wrapper">
          <h4>接口详情</h4>
          分词HTTPS地址
          <pre>http://192.168.207.233:25001/open/wordSpliting</pre>
          Content-Type
          <pre>mutipart/form-data</pre>
          词性标注HTTPS地址
          <pre>http://192.168.207.233:25001/open/wordPos</pre>
          Content-Type
          <pre>mutipart/form-data</pre>
        </Paragraph>
        <Paragraph className="small-topic-wrapper">
          <h4>参数说明</h4>
          <Table
            columns={baseColumns}
            dataSource={textAnalyseparamsLists}
            pagination={false}
          />
          <blockquote>
            在同时传入 text & files的时候优先以 text作为处理对象
          </blockquote>
        </Paragraph>
        <Paragraph className="small-topic-wrapper">
          <h4>返回结果</h4>
          <Table
            columns={baseResponseColumns}
            dataSource={textAnalyseExampleResponseParams}
            pagination={false}
          />
        </Paragraph>
        <Paragraph className="small-topic-wrapper">
          <h4>输出示例</h4>
          分词成功示例
          <pre>{wordSplitingExampleResponse}</pre>
          词性标注成功示例
          <pre>{textPosExampleResponse}</pre>
        </Paragraph>
      </Paragraph>
      <div className="footer"></div>
    </div>
  )
}

export default TextAnalyse
