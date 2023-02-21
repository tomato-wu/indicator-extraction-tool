import { Button, Space, Card } from "antd";
import { useNavigate } from "react-router-dom";

import backGroundImage from "../assets/backgrounfImage.png";
const title = {
  fontSize: "3.7rem",
  textAlign: "center",
  marginTop: "10vh",
  fontWeight: "bolder",
};
const introduntion = {
  textAlign: "center",
  fontSize: "1.7rem",
  fontWeight: "lighter",
};
const firstIntroduntion = {
  textAlign: "center",
  fontSize: "1.7rem",
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
  marginTop: "100px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};
function IntroductionPage() {
  const navigate = useNavigate();

  const LinkToHome = () => {
    navigate("/home");
  };
  return (
    <>
      <img src={backGroundImage} alt="图片无法显示" style={{ width: "100%" }} />
      <h1 style={title}>计量语言学指标提取工具</h1>
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
            title="汉语计量指标提取"
            extra={<a href="#">More</a>}
            style={{
              width: 400,
              height: 200,
            }}
          >
            <p>Card content</p>
          </Card>

          <Card
            title="英语计量指标提取"
            extra={<a href="#">More</a>}
            style={{
              width: 400,
              height: 200,
            }}
          >
            <p>Card content</p>
          </Card>

          <Card
            title="日语计量指标提取"
            extra={<a href="#">More</a>}
            style={{
              width: 400,
              height: 200,
            }}
          >
            <p>Card content</p>
          </Card>

          <Card
            title="印尼语计量指标提取"
            extra={<a href="#">More</a>}
            style={{
              width: 400,
              height: 200,
            }}
          >
            <p>Card content</p>
          </Card>

          <Card
            title="菲律宾计量指标提取"
            extra={<a href="#">More</a>}
            style={{
              width: 400,
              height: 200,
            }}
          >
            <p>Card content</p>
          </Card>
        </Space>
      </div>
    </>
  );
}

export default IntroductionPage;
