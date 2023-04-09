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

import ChineseBar from "../components/chinese";
import EnglishBar from "../components/english";
import JapaneseBar from "../components/japanese";
import IndonesianBar from "../components/indonesian";
import FilipinoBar from "../components/filipino";

import Vietnamese from "../components/vietnamese/";
import Burmese from "../components/burmese/";
import Thai from "../components/thai/";
import Lao from "../components/lao/";

import Arabic from "../components/arabic/";
import Bengali from "../components/bengali/";
import Korean from "../components/korean/";
import Spanish from "../components/spanish/";
import Turkish from "../components/turkish/";
import Farsi from "../components/farsi/";
import Portuguese from "../components/portuguese/";

import Ukrainian from "../components/Ukrainian/";
import Russian from "../components/Russian/";
import German from "../components/German/";
import French from "../components/French/";
import Italian from "../components/Italian/";
import Czech from "../components/Czech/";
import Swedish from "../components/Swedish/";

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
  action: "http://192.168.207.233:25001/api/langrc", //线上地址
  // action: "http://192.168.128.125:5000/api/langrc", //本地测试
  headers: {
    authorization: "Bearer " + localStorage.getItem("token"),
  },
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
  const isLt2M = file.size / 1024 < 2;
  if (!isLt2M) {
    message.error("文件大小不超过1M!");
  }
  return isFileFormat && isLt2M;
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
    case "th":
      return <Thai lgType={lgType} lgText={lgText} />;
    case "vi":
      return <Vietnamese lgType={lgType} lgText={lgText} />;
    case "km":
      return <Burmese lgType={lgType} lgText={lgText} />;
    case "lo":
      return <Lao lgType={lgType} lgText={lgText} />;
    case "ar":
      return <Arabic lgType={lgType} lgText={lgText} />;
    case "es":
      return <Spanish lgType={lgType} lgText={lgText} />;
    case "pt":
      return <Portuguese lgType={lgType} lgText={lgText} />;
    case "tr":
      return <Turkish lgType={lgType} lgText={lgText} />;
    case "ko":
      return <Korean lgType={lgType} lgText={lgText} />;
    case "bn":
      return <Bengali lgType={lgType} lgText={lgText} />;
    case "fa":
      return <Farsi lgType={lgType} lgText={lgText} />;
    case "ru":
      return <Russian lgType={lgType} lgText={lgText} />;
    case "dr":
      return <German lgType={lgType} lgText={lgText} />;
    case "fr":
      return <French lgType={lgType} lgText={lgText} />;
    case "it":
      return <Italian lgType={lgType} lgText={lgText} />;
    case "cs":
      return <Czech lgType={lgType} lgText={lgText} />;
    case "uk":
      return <Ukrainian lgType={lgType} lgText={lgText} />;
    case "sv":
      return <Swedish lgType={lgType} lgText={lgText} />;
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
      case "th":
        messageStr = "检测到泰语";
        break;
      case "vi":
        messageStr = "检测到越南语";
        break;
      case "km":
        messageStr = "检测到缅甸/柬埔寨（高棉语）";
        break;
      case "lo":
        messageStr = "老挝语";
        break;
      case "ar":
        messageStr = "阿拉伯语";
        break;
      case "es":
        messageStr = "西班牙语";
        break;

      case "pt":
        messageStr = "葡萄牙语";
        break;
      case "tr":
        messageStr = "土耳其语";
        break;
      case "ko":
        messageStr = "韩语";
        break;
      case "bn":
        messageStr = "孟加拉语";
        break;
      case "fa":
        messageStr = "波斯语";
        break;
      case "ru":
        messageStr = "俄语";
        break;
      case "dr":
        messageStr = "德语";
        break;
      case "fr":
        messageStr = "法语";
        break;
      case "it":
        messageStr = "意大利语";
        break;
      case "cs":
        messageStr = "捷克语";
        break;
      case "uk":
        messageStr = "乌克兰语";
        break;
      case "sv":
        messageStr = "瑞典语";
        break;
      default:
        messageStr = "暂不支持该语种的处理";
    }
    message.success(messageStr);
  };

  const uploadHandleChange = (info) => {
    props.headers.authorization = "Bearer " + localStorage.getItem("token");
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
                width: 180,
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
                {
                  value: "th",
                  label: "泰语",
                },
                {
                  value: "vi",
                  label: "越南语",
                },
                {
                  value: "km",
                  label: "缅甸/柬埔寨（高棉语）",
                },
                {
                  value: "lo",
                  label: "老挝语",
                },
                {
                  value: "ar",
                  label: "阿拉伯语",
                },
                {
                  value: "bn",
                  label: "孟加拉语",
                },
                {
                  value: "fa",
                  label: "波斯语",
                },
                {
                  value: "pt",
                  label: "葡萄牙语",
                },
                {
                  value: "es",
                  label: "西班牙语",
                },
                {
                  value: "tr",
                  label: "土耳其语",
                },
                {
                  value: "ko",
                  label: "朝鲜语(韩国)",
                },
                {
                  value: "fr",
                  label: "法语",
                },
                {
                  value: "dr",
                  label: "德语",
                },
                {
                  value: "it",
                  label: "意大利语",
                },
                {
                  value: "ru",
                  label: "俄语",
                },
                {
                  value: "cs",
                  label: "捷克语",
                },
                {
                  value: "sv",
                  label: "瑞典语",
                },
                {
                  value: "uk",
                  label: "乌克兰语",
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
