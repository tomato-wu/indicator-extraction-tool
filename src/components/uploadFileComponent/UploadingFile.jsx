import logo from "../../assets/uploadingImage.png";

function UploadingFile() {
  return (
    <>
      <p className="ant-upload-drag-icon" style={{ marginTop: "30px" }}>
        <img src={logo} alt="图片无法显示" />
      </p>
    </>
  );
}

export default UploadingFile;
