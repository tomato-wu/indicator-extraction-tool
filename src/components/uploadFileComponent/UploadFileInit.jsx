import logo from "../../assets/uploadFileImage.jpg";

function UploadFileInit() {
  return (
    <>
      <p className="ant-upload-drag-icon">
        <img src={logo} alt="图片无法显示" />
      </p>
      <p className="ant-upload-text">点击或者拖拽上传</p>
      <p className="ant-upload-hint">
        支持 txt, md, docx, pdf文件格式（暂不支持图片扫描件和密码保护的pdf 和
        doc文档）
      </p>
    </>
  );
}

export default UploadFileInit;
