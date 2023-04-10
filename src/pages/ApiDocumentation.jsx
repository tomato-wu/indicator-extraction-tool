import { useState } from 'react'

import { Layout, Menu } from 'antd'

import ChangePassword from '../components/personal/changePassword.jsx'
import ApiDocIntroduction from '../components/ApiDocComponents/ApiDocIntroduction.jsx'
import ChatWithUs from '../components/ApiDocComponents/ChatWithUs.jsx'
import GetAppId from '../components/ApiDocComponents/GetAppId.jsx'
import LanguageRecognize from '../components/ApiDocComponents/LanguageRecognize.jsx'
import CommonIndicator from '../components/ApiDocComponents/CommonIndicator.jsx'
import ReadabilityIndicator from '../components/ApiDocComponents/ReadabilityIndicator.jsx'
import TextAnalyse from '../components/ApiDocComponents/TextAnalyse.jsx'

const { Sider, Content } = Layout

const contentStyle = {
  minHeight: 120,
  // lineHeight: '120px',
  // color: '#fff',
  backgroundColor: 'rgb(237,241,249)',
  paddingLeft: 20,
}
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  height: 'inhert',
  backgroundColor: '#fff'
}

const items = [
  {
    label: '接入服务介绍',
    key: 'ApiDocIntroduction',
  },
  {
    label: '获取AppID',
    key: 'GetAppId',
  },
  {
    label: '开发者文档',
    key: 'changePassword',
    children: [
      {
        label: '语种识别',
        key: 'LanguageRecognize',
      },
      {
        label: '通用指标',
        key: 'CommonIndicator',
      },
      {
        label: '可读性指标',
        key: 'ReadabilityIndicator',
      },
      {
        label: '分词&词性标注',
        key: 'TextAnalyse',
      },
    ],
  },
  {
    label: '联系我们',
    key: 'ChatWithUs',
  },
]

function MenuItemPage({ currentPage }) {
  switch (currentPage) {
    case 'ApiDocIntroduction':
      return <ApiDocIntroduction />
    case 'GetAppId':
      return <GetAppId />
    case 'changePassword':
      return <ChangePassword />
    case 'ChatWithUs':
      return <ChatWithUs />
    case 'LanguageRecognize':
      return <LanguageRecognize />
    case 'CommonIndicator':
      return <CommonIndicator />
    case 'ReadabilityIndicator':
      return <ReadabilityIndicator />
    case 'TextAnalyse':
      return <TextAnalyse />
    default:
      return null
  }
}

function Personal() {
  const [current, setCurrent] = useState('ApiDocIntroduction')

  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <>
      <Layout>
        <Sider style={siderStyle} width={256}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="inline"
            items={items}
            style={{
              width: 256,
              height: 900,
            }}
          />
        </Sider>
        <Layout>
          <Content style={contentStyle}>
            <MenuItemPage currentPage={current} />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Personal
