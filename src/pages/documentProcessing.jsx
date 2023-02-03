import { Steps, message, Upload, Select, Button } from "antd";
import {
  UploadOutlined,
  SyncOutlined,
  MonitorOutlined,
  SubnodeOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import "./documentProcessing.css";
import logo from "../assets/uploadFileImage.jpg";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

function DocumentProcessing() {
  return (
    <>
      {/* 步骤条展示流程 */}
      <Steps
        style={{ marginTop: "20px" }}
        current={0}
        items={[
          {
            title: "文件上传",
            status: "finish",
            icon: <UploadOutlined />,
          },
          {
            title: "文档解析",
            status: "finish",
            icon: <SyncOutlined />,
          },
          {
            title: "语种识别",
            status: "finish",
            icon: <MonitorOutlined />,
          },
          {
            title: "指标提取",
            status: "finish",
            icon: <SubnodeOutlined />,
          },
        ]}
      />
      {/* 文件上传 */}
      <div className="cardBox">
        <div className="titleBox">
          <h3 className="titleText">文件上传</h3>
        </div>
        <div>
          <Dragger {...props} style={{ borderStyle: "none" }}>
            <p className="ant-upload-drag-icon">
              <img src={logo} alt="图片无法显示" />

              {/* <InboxOutlined /> */}
            </p>
            <p className="ant-upload-text">点击或者拖拽上传</p>
            <p className="ant-upload-hint">
              支持 txt, md, doc, docx, pdf文件格式
            </p>
          </Dragger>
        </div>
      </div>
      {/* 指标提取 */}
      <div className="cardBox">
        <div className="titleBox">
          <h3 className="titleText">指标提取</h3>
        </div>
        <div className="distinguish">
          <div style={{ margin: "20px 2px" }}>
            <span className="spanText">识别语种：</span>
            <Select
              defaultValue="zh"
              style={{
                width: 120,
                marginLeft: "4vw",
              }}
              options={[
                {
                  value: "zh",
                  label: "汉语",
                },
                {
                  value: "en",
                  label: "英语",
                },
                {
                  value: "ja",
                  label: "日语",
                },
                {
                  value: "id",
                  label: "印度尼西亚语",
                },
                {
                  value: "tl",
                  label: "菲律宾语",
                },
              ]}
            />
          </div>
          <div>
            <span className="spanText">通用计量指标提取：</span>
            <Button type="primary" style={{ marginLeft: "1vw" }} ghost>
              Primary
            </Button>
            <Button type="primary" style={{ marginLeft: "1vw" }} ghost>
              Primary
            </Button>
            <Button type="primary" style={{ marginLeft: "1vw" }} ghost>
              Primary
            </Button>
            <Button type="primary" danger style={{ marginLeft: "1vw" }} ghost>
              一键提取
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocumentProcessing;
