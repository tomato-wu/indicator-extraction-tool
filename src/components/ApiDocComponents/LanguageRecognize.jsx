import { Typography, Table } from 'antd'
import {
  baseColumns,
  baseResponseColumns,
  languageparamsLists,
  languageResponseParamsLists,
  exampleCorrectRequestBodyStructure,
  exampleErrorRequestBodyStructure
} from './constant'
import './style/index.css'

const { Paragraph } = Typography

const LanguageRecognize = () => {
  return (
    <div className="box-wrapper">
      <Paragraph className="header">
        <h3>语种识别 API 接入文档</h3>
        本文档为多语种计量指标提取工具内部语种识别接口，支持检测语种IOS-639简称列表如下：
        <Paragraph>
          <blockquote>
            af, am, an, ar, as, az, be, bg, bn, br, bs, ca, cs, cy, da, de, dz,
            el, en, eo, es, et, eu, fa, fi, fo, fr, ga, gl, gu, he, hi, hr, ht,
            hu, hy, id, is, it, ja, jv, ka, kk, km, kn, ko, ku, ky, la, lb, lo,
            lt, lv, mg, mk, ml, mn, mr, ms, mt, nb, ne, nl, nn, no, oc, or, pa,
            pl, ps, pt, qu, ro, ru, rw, se, si, sk, sl, sq, sr, sv, sw, ta, te,
            th, tl, tr, ug, uk, ur, vi, vo, wa, xh, zh, zu
          </blockquote>
        </Paragraph>
      </Paragraph>
      <Paragraph className="content">
        <Paragraph className="small-topic-wrapper">
          <h4>接口详情</h4>
          HTTPS地址
          <pre>http://192.168.207.233:25001/open/langRecognize</pre>
          Content-Type
          <pre>application/x-www-form-urlencoded</pre>
        </Paragraph>
        <Paragraph className="small-topic-wrapper">
          <h4>参数说明</h4>
          <Table
            columns={baseColumns}
            dataSource={languageparamsLists}
            pagination={false}
          />
        </Paragraph>
        <Paragraph className="small-topic-wrapper">
          <h4>返回结果</h4>
          <Table
            columns={baseResponseColumns}
            dataSource={languageResponseParamsLists}
            pagination={false}
          />
        </Paragraph>
        <Paragraph className="small-topic-wrapper">
          <h4>输出示例</h4>
          成功示例
          <pre>{exampleCorrectRequestBodyStructure}</pre>
          失败示例
          <pre>{exampleErrorRequestBodyStructure}</pre>
        </Paragraph>
      </Paragraph>
      <div className="footer"></div>
    </div>
  )
}
export default LanguageRecognize
