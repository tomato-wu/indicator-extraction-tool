import logo from "../../assets/UploadFileError.png";

function UploadFileError() {
  return (
    <>
      <p className="ant-upload-drag-icon">
        <img src={logo} alt="图片无法显示" />

        {/* <InboxOutlined /> */}
      </p>
      <p className="ant-upload-hint">文件上传失败，点击或者拖拽重新上传</p>
    </>
  );
}

export default UploadFileError;
