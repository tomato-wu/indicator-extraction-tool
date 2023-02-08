import { Steps, message, Upload, Select, Button } from "antd";
import {
  UploadOutlined,
  SyncOutlined,
  MonitorOutlined,
  SubnodeOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import "./documentProcessing.css";

import ChineseBar from "../components/chinese/chineseBar";
import EnglishBar from "../components/english/englishBar";
import JapaneseBar from "../components/japanese/JapaneseBar";
import IndonesianBar from "../components/indonesian/indonesianBar";
import FilipinoBar from "../components/filipino/filipinoBar";

// 导入文件上传状态组件
import UploadFileInit from "../components/uploadFileComponent/UploadFileInit";
import UploadFileSuccess from "../components/uploadFileComponent/UploadFileSuccess";
import UploadingFile from "../components/uploadFileComponent/UploadingFile";
import UploadFileError from "../components/uploadFileComponent/UploadFileError";

// 文档上传
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  maxCount: 1, //限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件
  action: "http://120.77.245.193:3500/api/langrc",
};

// 上传之前判断上传的文件格式问题
const beforeUpload = (file) => {
  console.log("file" + file.type);
  const isFileFormat =
    file.type === "application/msword" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    file.type === "text/plain" ||
    file.type === "" ||
    file.type === "application/pdf";
  if (!isFileFormat) {
    message.error("文件格式不符合");
  }
  return isFileFormat;
};

// 切换不同语种的组件
function MenuItem({ menu, lgType, lgText }) {
  switch (menu) {
    case "zh":
      return <ChineseBar lgType={lgType} lgText={lgText} />;
    case "en":
      return <EnglishBar lgType={lgType} lgText={lgText} />;
    case "ja":
      return <JapaneseBar lgType={lgType} lgText={lgText} />;
    case "id":
      return <IndonesianBar lgType={lgType} lgText={lgText} />;
    case "tl":
      return <FilipinoBar lgType={lgType} lgText={lgText} />;
    default:
      return null;
  }
}

// 文件上传的不同状态
function LoadingStatusFn({ status, fileName }) {
  switch (status) {
    case "init":
      return <UploadFileInit />;
    case "uploading":
      return <UploadingFile />;
    case "done":
      return <UploadFileSuccess fileName={fileName} />;
    case "error":
      return <UploadFileError />;
    default:
      return null;
  }
}

function DocumentProcessing() {
  // 切换不同语种的变量
  const [menu, setMenu] = useState("zh");

  const [loadingStatus, setLoadingStatus] = useState("init");

  const [fileName, setFileName] = useState("");

  const [lgType, setLgType] = useState("");

  const [lgText, setLgText] = useState("");

  // 点击选择器自助选择需要解析的语种
  const changeLanguages = (e) => {
    setMenu(e);
  };
  // 弹窗提示目前处于什么语种下
  const handleChange = (e) => {
    // 切换组件
    setMenu(e);
    let messageStr = "";
    switch (e) {
      case "zh":
        messageStr = "检测到汉语";
        break;
      case "en":
        messageStr = "检测到英语";
        break;
      case "ja":
        messageStr = "检测到日语";
        break;
      case "id":
        messageStr = "检测到印度尼西亚语";
        break;
      case "tl":
        messageStr = "检测到菲律宾语";
        break;
      default:
        messageStr = "暂不支持该语种的处理";
    }
    message.info(messageStr);
  };

  const uploadHandleChange = (info) => {
    //上传文件改变时的回调
    const { status } = info.file;
    if (status === "uploading") {
      setLoadingStatus(status);
    }
    if (status === "done") {
      message.success(`${info.file.name} 上传成功`);
      setLoadingStatus(status);
      handleChange(info.file.response.data.lg_type);
      setFileName(info.file.name);
      setLgType(info.file.response.data.lg_type);
      setLgText(info.file.response.data.lg_text);
    } else if (status === "error") {
      message.error(`${info.file.name} 上传失败.`);
      setLoadingStatus(status);
    }
  };
  const onDrop = (e) => {
    //	当文件被拖入上传区域时执行的回调功能
    console.log("Dropped files", e.dataTransfer.files);
  };

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
      <div className="cardBox" style={{ height: "28vh" }}>
        <div className="titleBox">
          <h3 className="titleText">文件上传</h3>
        </div>
        <div>
          <Dragger
            {...props}
            beforeUpload={beforeUpload}
            onChange={uploadHandleChange}
            onDrop={onDrop}
            showUploadList={false}
            style={{ borderStyle: "none", background: "white" }}
          >
            <LoadingStatusFn status={loadingStatus} fileName={fileName} />
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
                marginLeft: "3.5vw",
              }}
              onChange={changeLanguages}
              value={menu}
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
            {/* 指标提取 */}

            <MenuItem menu={menu} lgType={lgType} lgText={lgText} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DocumentProcessing;
