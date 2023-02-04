import logo from "../../assets/uploadFileSuccess.png";

function UploadFileSuccess(props) {
  return (
    <>
      <p className="ant-upload-drag-icon">
        <img src={logo} alt="图片无法显示" style={{ marginTop: "20px" }} />
      </p>
      <p className="ant-upload-hint" style={{ color: "black" }}>
        {props.fileName}
      </p>
      <p className="ant-upload-hint">点击或者拖拽重新上传</p>
    </>
  );
}

export default UploadFileSuccess;
