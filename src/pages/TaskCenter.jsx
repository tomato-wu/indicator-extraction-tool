import { useState, useEffect } from 'react'
import { Table, Button, Modal, Collapse, Tag } from 'antd'
import {
  SyncOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { httpPost, httpGet } from '../utils/axios'

const { Column } = Table
const { Panel } = Collapse

// download utils
function downloadExcelFile(filename, binary) {
  const blob = new Blob([binary], { type: 'application/vnd.ms-excel' }) // 创建一个 Blob 对象，将二进制数据转换为文件对象
  const url = URL.createObjectURL(blob) // 创建一个 URL 对象，指向该 Blob 对象
  const a = document.createElement('a') // 创建一个 <a> 标签
  a.href = url // 将 URL 对象赋值给 <a> 标签的 href 属性
  a.download = `${filename}.xlsx` // 指定下载文件的名称
  window.document.body.append(a) //将 <a> 标签添加到文档中
  a.click() // 模拟点击 <a> 标签以下载文件
  document.body.removeChild(a) // 从文档中删除 <a> 标签
  window.URL.revokeObjectURL(blob) // 释放 URL 对象
}

function TaskInfoModal({ files, isModalOpen, setIsModalOpen }) {
  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const _span = {
    color: 'red',
  }

  return (
    <>
      <Modal
        title="任务详情"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Collapse accordion>
          {files.map((item) => (
            <Panel header={item.filename} key={item.filename}>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.content.replace(
                    /[ ]{1}/g,
                    `<span className={_span}> / </span>`
                  ),
                }}
              />
            </Panel>
          ))}
        </Collapse>
      </Modal>
    </>
  )
}

function TaskCenter() {
  const [tasks, setTasks] = useState([])
  const [files, setFile] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getTasks = async () => {
    const tasks = await httpGet({
      url: '/multi/getTasks',
    })
    const data = tasks.data
    setTasks(data?.length ? data : [])
  }
  const getTaskInfo = async (task_id) => {
    const data = await httpGet({
      url: '/multi/getTaskInfo',
      params: {
        id: task_id,
      },
    })
    const infos = []
    for (const item of data.data) {
      infos.push({
        filename: item.filename,
        content: item.content,
      })
    }
    setFile(infos)
    setIsModalOpen(true)
  }
  const downloadTaskInfo = async (task_id) => {
    const data = await httpPost({
      url: '/multi/downloadTask',
      data: {
        id: task_id,
      },
      responseType: 'blob',
    })
    downloadExcelFile(task_id, data)
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <TaskInfoModal
        files={files}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Table dataSource={tasks} rowKey="id">
        <Column width={350} title="任务id" dataIndex="id" key="id" />
        <Column
          title="任务创建时间"
          dataIndex="update_time"
          key="update_time"
        />
        <Column
          title="任务状态"
          dataIndex="status"
          key="status_01"
          render={(_, { status }) =>
            status === 'PENDING' ? (
              <Tag icon={<SyncOutlined spin />} color="processing">
                processing
              </Tag>
            ) : status === 'SUCCESS' ? (
              <Tag icon={<CheckCircleOutlined />} color="success">
                success
              </Tag>
            ) : (
              <Tag icon={<CloseCircleOutlined />} color="error">
                fail
              </Tag>
            )
          }
        />
        <Column
          width={250}
          title="任务详情"
          key="status_02"
          render={(_, { status, id }) => (
            <>
              {status === 'SUCCESS' ? (
                <>
                  <Button
                    style={{ marginRight: '20px' }}
                    onClick={() => getTaskInfo(id)}
                  >
                    查看详情
                  </Button>
                  <Button type="primary" onClick={() => downloadTaskInfo(id)}>
                    下载结果
                  </Button>
                </>
              ) : (
                '暂无处理结果'
              )}
            </>
          )}
        />
      </Table>
    </>
  )
}

export default TaskCenter
