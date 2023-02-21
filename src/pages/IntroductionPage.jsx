import backGroundImage from "../assets/backgrounfImage.png";
const title = {
  fontSize: "3.7rem",
  textAlign: "center",
  marginTop: "6vh",
  fontWeight: "bolder",
};
const introduntion = {
  textAlign: "center",
  fontSize: "1.7rem",
  padding: "2px",
  fontWeight: "lighter",
};
function IntroductionPage() {
  return (
    <>
      <img src={backGroundImage} alt="图片无法显示" style={{ width: "100%" }} />
      <h1 style={title}>计量语言学指标提取工具</h1>
      <p style={introduntion}>
        本网站是面向计量语言学学科构建的指标提取工具，并且面向多个不同的语种
      </p>
      <p style={introduntion}>
        对于输入的语言文本，
        网站能够识别不同的语种，并且能够根据不同语种进行计量指标的提取
      </p>
      <p style={introduntion}>
        用于辅助计量语言学的研究， 为计量语言学相关的学者和研究人员提供帮助
      </p>
    </>
  );
}

export default IntroductionPage;
