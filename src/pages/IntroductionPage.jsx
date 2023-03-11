import { Button, Space, Card } from "antd";
import { useNavigate } from "react-router-dom";

import backGroundImage from "../assets/backgrounfImage.png";
const title = {
  fontSize: "2.7rem",
  textAlign: "center",
  marginTop: "8vh",
  fontWeight: "bolder",
};
const introduntion = {
  textAlign: "center",
  fontSize: "1.3rem",
  fontWeight: "lighter",
};
const firstIntroduntion = {
  textAlign: "center",
  fontSize: "1.3rem",
  fontWeight: "lighter",
  marginTop: "4vh",
};
const letsBegin = {
  marginLeft: "50%",
  marginTop: "30px",
  transform: "translate(-50%)",
};
const buttonStyle = {
  marginRight: "30px",
};

const CardStyle = {
  marginTop: "70px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};
const CardShadow = {
  width: 250,
  height: 110,
};
function IntroductionPage() {
  const navigate = useNavigate();
  const LinkToHome = () => {
    navigate("/home");
  };
  return (
    <>
      <img
        src={backGroundImage}
        alt="图片无法显示"
        style={{ width: "100%", height: "23vh" }}
      />
      <h1 style={title}>计量语言学指标提取工具 1.0 </h1>
      <p style={firstIntroduntion}>
        本网站是面向计量语言学学科构建的指标提取工具，并且面向多个不同的语种
      </p>
      <p style={introduntion}>
        对于输入的语言文本，
        网站能够识别不同的语种，并且能够根据不同语种进行计量指标的提取
      </p>
      <p style={introduntion}>
        用于辅助计量语言学的研究， 为计量语言学相关的学者和研究人员提供帮助
      </p>
      <Space wrap style={letsBegin}>
        <Button
          type="primary"
          style={buttonStyle}
          size="large"
          onClick={LinkToHome}
        >
          开始使用
        </Button>
        <Button size="large">了解详情</Button>
      </Space>

      <div>
        <Space style={CardStyle}>
          <Card
            title="汉语"
            style={CardShadow}
            extra={<a href="/#/home">More</a>}
          >
            <p>通用计量指标提取</p>
            <p>汉语计量指标提取</p>
          </Card>

          <Card
            title="英语"
            style={CardShadow}
            extra={<a href="/#/home">More</a>}
          >
            <p>通用计量指标提取</p>
            <p>英语可读性指标提取</p>
          </Card>

          <Card
            title="日语"
            style={CardShadow}
            extra={<a href="/#/home">More</a>}
          >
            <p>通用计量指标提取</p>
            <p>Card content</p>
          </Card>

          <Card
            title="印尼语"
            style={CardShadow}
            extra={<a href="/#/home">More</a>}
          >
            <p>通用计量指标提取</p>
            <p>Card content</p>
          </Card>

          <Card
            title="菲律宾语"
            style={CardShadow}
            extra={<a href="/#/home">More</a>}
          >
            <p>通用计量指标提取</p>
            <p>Card content</p>
          </Card>
        </Space>
      </div>
    </>
  );
}

export default IntroductionPage;
