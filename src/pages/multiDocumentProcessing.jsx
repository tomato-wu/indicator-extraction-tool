import { Steps, message, Upload, Button } from "antd";
import {
  UploadOutlined,
  SyncOutlined,
  MonitorOutlined,
  SubnodeOutlined,
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
    onChange: (arg) => {
      // 当文件上传组件的值发生变化时，调用 onChange 函数
      const _fileList = arg.fileList; // 获取文件列表
      _fileList.length < fileList.length // 如果文件列表长度小于之前的长度，说明用户删除了旧的文件
        ? setFileList((fileList) => {
            setUploading(false);
            return fileList.filter((item) => item.uid !== arg.file.uid); // 从 fileList 中移除对应的文件
          })
        : setFileList((fileList) => {
            const isFileFormat =
              arg.file.type === "application/msword" ||
              arg.file.type ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
              arg.file.type === "text/plain" ||
              arg.file.type === "" ||
              arg.file.type === "application/pdf";
            if (!isFileFormat) {
              message.error("文件格式不符合");
              return fileList;
            }
            if (uploading === true) {
              message.error("请等待上一次上传完成");
              return fileList;
            }
            return fileList.concat(arg.file); // 将新的文件添加到 fileList 中
          });
    },
    beforeUpload: (file, _fileList) => {
      return false;
    },
    fileList,
  };
  // 上传文件列表
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files", file);
    });
    setUploading(true);
    getUploadFileListApi(formData).then(
      (res) => {
        if (res.code === 0) {
          message.success("上传成功，处理结果蒋通过您的邮箱发送给您");
          setUploading(false);
          setFileList([]);
        } else {
          message.error("上传失败");
          setUploading(false);
        }
      },
      (err) => {
        message.error("上传失败" + err);
        setUploading(false);
      }
    );
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
            title: "判断文档格式是否符合要求",
            status: "finish",
            icon: <SyncOutlined />,
          },
          {
            title: "确定上传",
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
            multiple
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
        {uploading ? "正在上传中，请稍等..." : "确定上传"}
      </Button>
    </>
  );
}

export default MultiDocumentProcessing;
