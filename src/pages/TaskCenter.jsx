import { useState, useEffect } from 'react'
import { Table, Button, Modal, Collapse, Tag } from 'antd'
import {
  SyncOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { httpPost, httpGet } from '../utils/axios'
import './index.css'

const { Column } = Table
const { Panel } = Collapse

function downloadFile(filename, binary, miniType, suffix) {
  const blob = new Blob([binary], { type: miniType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${filename}.${suffix}`
  window.document.body.append(a)
  a.click()
  document.body.removeChild(a)
  window.URL.revokeObjectURL(blob)
}

function TaskInfoModal({ files, isModalOpen, setIsModalOpen, taskId }) {
  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const _modal_body_style = {
    padding: '20px 0',
  }

  const downloadDict = async () => {
    const data = await httpPost({
      url: '/multi/downloadDict',
      data: {
        id: taskId,
      },
      responseType: 'blob',
    })
    downloadFile(taskId, data, 'text/plain', 'txt')
  }

  return (
    <>
      <Modal
        width={1200}
        bodyStyle={_modal_body_style}
        title="任务详情"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="dict-wrapper">
          <Button type="primary" ghost onClick={downloadDict}>
            导出词典
          </Button>
        </div>
        <Collapse accordion>
          {files.map((item) => (
            <Panel header={item.filename} key={item.filename}>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.content.replace(
                    /[ ]{1}/g,
                    `<span class="split_word"> / </span>`
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
  const [tasks, setTasks] = useState(null)
  const [files, setFile] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [taskId, setTaskId] = useState('')

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
    setTaskId(task_id)
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
    downloadFile(task_id, data, 'application/vnd.ms-excel', 'xlsx')
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      {tasks && (
        <>
          <TaskInfoModal
            files={files}
            taskId={taskId}
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
                      <Button
                        type="primary"
                        onClick={() => downloadTaskInfo(id)}
                      >
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
      )}
    </>
  )
}

export default TaskCenter
