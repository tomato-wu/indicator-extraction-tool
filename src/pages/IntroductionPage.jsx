import { Button, Space, Col, Row, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import backGround from "../assets/background.png";
import backGroundDown from "../assets/backGroundDown.png";
import LoginPage from "../components/LoginPage";
const backGroundCss = {
  backgroundImage: `url(${backGround})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};
// 偏左侧布局
const TitleTextBox = {
  padding: "40px",
  textAlign: "left",
  marginTop: "40px",
};
// 标题变大
const TitleText = {
  fontSize: "2.2rem",
  fontWeight: "bolder",
};

const buttonStyle = {
  marginTop: "10px",
};

const backGroundDownCss = {
  backgroundImage: `url(${backGroundDown})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "50vh",
  width: "100vw",
};
const listCss = {
  fontWeight: "lighter",
  textAlign: "left",
  marginTop: "30px",
};

function IntroductionPage() {
  let token = localStorage.getItem("token");

  const navigate = useNavigate();
  const LinkToHome = () => {
    navigate("/home");
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 上方 */}
      <div style={backGroundCss}>
        {!token ? (
          <Button
            type="primary"
            shape="round"
            size="middle"
            style={{ position: "absolute", top: "12px", right: "22px" }}
            onClick={() => setOpen(true)}
          >
            登录
          </Button>
        ) : null}

        <Modal
          title="登录/注册"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          footer={null}
          width={500}
        >
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <LoginPage></LoginPage>
          </div>
        </Modal>

        <Row>
          <Col span={18} offset={5}>
            <div style={TitleTextBox}>
              <h1 style={TitleText}>计量指标提取工具 1.0 </h1>
              <h1 style={TitleText}>面向计量语言学学科构建的指标提取工具 </h1>

              <div
                style={{
                  textAlign: "left",
                  marginTop: "30px",
                  fontSize: "12px",
                  fontWeight: "lighter",
                }}
              >
                <p>
                  面向多个不同的语种, 对于输入的语言文本，
                  网站能够识别不同的语种，并且能够根据不同语种切换计量指标的提取
                </p>
                <p>
                  用于辅助计量语言学的研究，为计量语言学相关的学者和研究人员提供帮助
                </p>
              </div>

              {!token ? (
                <Button
                  type="primary"
                  size="middle"
                  style={{ marginRight: "10px" }}
                  onClick={() => setOpen(true)}
                >
                  开始体验
                </Button>
              ) : (
                <Space style={buttonStyle}>
                  <Button
                    type="primary"
                    ghost
                    size="middle"
                    style={{ marginRight: "10px" }}
                    onClick={LinkToHome}
                  >
                    开始使用
                  </Button>
                  <Button size="middle" type="primary" danger ghost>
                    了解详情
                  </Button>
                </Space>
              )}
            </div>
          </Col>
        </Row>
      </div>

      {/* 下方 */}
      <div style={backGroundDownCss}>
        <Row>
          <Col span={8} offset={5}>
            <div style={TitleTextBox}>
              <h1 style={TitleText}>指标提取工具可以做什么 </h1>
              <p style={{ fontSize: "12px", fontWeight: "lighter" }}>
                输入文本，语种识别，切换语种，提取文本中的计量指标。
              </p>
              <p style={{ fontSize: "12px", fontWeight: "lighter" }}>
                上传文档，语种识别，提取文档中的计量指标。
              </p>
            </div>
          </Col>
          <Col span={8}>
            <Space
              direction="vertical"
              size="small"
              style={{
                display: "flex",
                marginTop: "60px",
              }}
            >
              <hr style={{ color: "gray" }} />
              <p>语种识别，输入需处理的文本，自动识别语言</p> <hr />
              <p>
                系统支持多语种处理，支持的语种多达17种，包括阿拉伯语、孟加拉语、缅甸/柬埔寨语、汉语、英语等
              </p>
              <hr style={{ color: "gray" }} />
              <p>
                系统支持的计量指标也多达20种，包括有在不同语种之间通用的计量指标和语言特有指标
              </p>
              <hr style={{ color: "gray" }} />
              <p>支持文档处理，用户可上传文档解析处理，更加人性化</p>{" "}
              <hr style={{ color: "gray" }} />
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default IntroductionPage;
