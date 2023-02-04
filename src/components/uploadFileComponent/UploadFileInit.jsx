import logo from "../../assets/uploadFileImage.jpg";

function UploadFileInit() {
  return (
    <>
      <p className="ant-upload-drag-icon">
        <img src={logo} alt="图片无法显示" />

        {/* <InboxOutlined /> */}
      </p>
      <p className="ant-upload-text">点击或者拖拽上传</p>
      <p className="ant-upload-hint">
        支持 txt, md, doc, docx,
        pdf文件格式（暂不支持图片扫描件和密码保护的pdf）
      </p>
    </>
  );
}

export default UploadFileInit;
