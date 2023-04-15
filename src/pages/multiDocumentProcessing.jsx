import { Steps, message, Upload, Select, Button, Checkbox } from "antd";
import {
  UploadOutlined,
  SyncOutlined,
  MonitorOutlined,
  SubnodeOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

import "./documentProcessing.css";
import UploadFileInit from "../components/uploadFileComponent/UploadFileInit";
import { getUploadFileListApi } from "../utils/axios/api";

function MultiDocumentProcessing() {
  //最终上传的文件列表
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const props = {
    // 移除文件
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    // 文件上传前的钩子
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  // 上传文件列表
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file);
    });
    setUploading(true);
    console.log("formData" + formData);
    console.log("fileList" + fileList);
  };

  return (
    <>
      {/* 步骤条展示流程 */}
      <Steps
        style={{ marginTop: "20px" }}
        current={0}
        items={[
          {
            title: "依次上传文档",
            status: "finish",
            icon: <UploadOutlined />,
          },
          {
            title: "可通过拖拽文档调整顺序",
            status: "finish",
            icon: <SyncOutlined />,
          },
          {
            title: "提交处理",
            status: "finish",
            icon: <MonitorOutlined />,
          },
          {
            title: "邮箱返回结果",
            status: "finish",
            icon: <SubnodeOutlined />,
          },
        ]}
      />
      {/* 文件上传 */}
      <div className="cardBox" style={{ height: "auto" }}>
        <div className="titleBox">
          <h3 className="titleText">多文档上传</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          {/* 多文档上传 */}
          <Upload
            {...props}
            listType="picture"
            style={{
              borderStyle: "none",
              background: "white",
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
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {uploading ? "Uploading" : "确定上传"}
      </Button>
    </>
  );
}

export default MultiDocumentProcessing;
