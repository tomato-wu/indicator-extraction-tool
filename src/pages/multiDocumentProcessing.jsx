import { Steps, message, Upload, Button } from 'antd'
import {
  UploadOutlined,
  SyncOutlined,
  MonitorOutlined,
  SubnodeOutlined,
} from '@ant-design/icons'
import React, { useState } from 'react'

import './documentProcessing.css'
import UploadFileInit from '../components/uploadFileComponent/UploadFileInit'
import { getUploadFileListApi } from '../utils/axios/api'

function MultiDocumentProcessing() {
  //最终上传的文件列表
  const [fileList, setFileList] = useState([])
  const [uploading, setUploading] = useState(false)

  const props = {
    onChange: (arg) => {
      const _fileList = arg.fileList
      _fileList.length < fileList.length
        ? setFileList((fileList) =>
            fileList.filter((item) => item.uid !== arg.file.uid)
          )
        : setFileList((fileList) => fileList.concat(arg.file))
    },
    beforeUpload: (file, _fileList) => {
      return false
    },
    fileList,
  }
  // 上传文件列表
  const handleUpload = () => {
    const formData = new FormData()
    fileList.forEach((file) => {
      formData.append('files', file)
    })
    setUploading(true)
    getUploadFileListApi(formData).then((res) => {
      if (res?.code === 0) {
        message.success('上传成功')
        setUploading(false)
        setFileList([])
      } else {
        message.error('上传失败')
        setUploading(false)
      }
    })
  }

  return (
    <>
      {/* 步骤条展示流程 */}
      <Steps
        style={{ marginTop: '20px' }}
        current={0}
        items={[
          {
            title: '依次上传文档',
            status: 'finish',
            icon: <UploadOutlined />,
          },
          {
            title: '可通过拖拽文档调整顺序',
            status: 'finish',
            icon: <SyncOutlined />,
          },
          {
            title: '提交处理',
            status: 'finish',
            icon: <MonitorOutlined />,
          },
          {
            title: '邮箱返回结果',
            status: 'finish',
            icon: <SubnodeOutlined />,
          },
        ]}
      />
      {/* 文件上传 */}
      <div className="cardBox" style={{ height: 'auto' }}>
        <div className="titleBox">
          <h3 className="titleText">多文档上传</h3>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingBottom: '40px',
          }}
        >
          {/* 多文档上传 */}
          <Upload
            {...props}
            multiple
            listType="picture"
            style={{
              borderStyle: 'none',
              background: 'white',
            }}
          >
            <UploadFileInit />
          </Upload>
        </div>
      </div>
      {/* 最终上传系统的多文档 */}
      <Button
        type="primary"
        size="large"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {uploading ? 'Uploading' : '确定上传'}
      </Button>
    </>
  )
}

export default MultiDocumentProcessing
