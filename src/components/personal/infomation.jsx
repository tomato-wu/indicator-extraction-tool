import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, message, Space, Menu } from "antd";
import { getPersonApi, changeInformationApi } from "../../utils/axios/personal";

const PersonCardBox = {
  width: "60vw",
  height: "auto",
  borderRadius: "20px",
  margin: "20px 120px",
  boxShadow: "1px 1px 3px grey",
  backgroundColor: "#FDFDFD",
};

const personTitleBox = {
  height: "5vh",
  backgroundColor: "rgb(244,246,251)",
  borderRadius: "20px 20px 0 0",
  lineHeight: "5vh",
};

const personTitleText = {
  color: "black",
  textShadow: "1px 1px 18px rgb(22,119,255)",
  marginLeft: "20px",
};

const box = {
  width: "60vw",
  height: "auto",
  display: "flex",
  marginLeft: "50px",
  marginTop: "20px",
  alignItems: "center",
};

const Information = () => {
  const [username, setUsername] = useState(""); // 用户名
  const [email, setEmail] = useState(""); // 邮箱

  useEffect(() => {
    // 获取用户信息
    getPersonApi()
      .then((res) => {
        setUsername(res.data.username);
        setEmail(res.data.email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ChangeInformation = () => {
    // 修改用户信息
    changeInformationApi({
      username: username,
      email: email,
    })
      .then((res) => {
        console.log(res);
        message.success("修改成功");
      })
      .catch((err) => {
        console.log(err);
        message.error("修改失败");
      });
  };

  return (
    <>
      <div style={PersonCardBox}>
        <div style={personTitleBox}>
          <h3 style={personTitleText}>个人信息</h3>
        </div>
        <div style={box}>
          <Form
            initialValues={{
              remember: true,
            }}
          >
            {/* 用户名 */}
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "请输入你的用户名",
                },
              ]}
            >
              <Input
                placeholder="用户名"
                size="large"
                allowClear
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: "300px" }}
              />
            </Form.Item>
            {/* 邮箱 */}
            <Form.Item
              rules={[
                {
                  type: "email",
                  message: "请输入正确的邮箱地址!",
                },
                {
                  required: true,
                  message: "请输入您的邮箱地址!",
                },
              ]}
            >
              <Input
                placeholder="请输入邮箱"
                size="large"
                allowClear
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "300px" }}
              />
            </Form.Item>
            {/* 登录按钮 */}
            <Form.Item>
              <Button
                type="primary"
                size="large"
                style={{ width: "300px" }}
                onClick={ChangeInformation}
              >
                修改
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Information;
