import { registerApi, sendCodeApi } from "../utils/axios/api";

import React, { useState } from "react";
import { Form, Input, Button, VerificationInput, Space } from "antd";
const { Search } = Input;

const Register = () => {
  const [sent, setSent] = useState(false); // 用来存储验证码的状态

  const [username, setUsername] = useState(""); // 用来存储用户名
  const [password, setPassword] = useState(""); // 用来存储密码
  const [ConfirmPassword, setConfirmPassword] = useState(""); // 用来存储密码

  const [email, setEmail] = useState(""); // 用来存储邮箱
  const [code, setCode] = useState(""); // 用来存储验证码的状态

  // 发送验证码到邮箱的函数
  const handleSendCode = () => {
    // send code to email number
    console.log("Sending code to", email);
    sendCodeApi({ email: email });
    setSent(true); // 设置发送状态为真
  };

  //  验证验证码是否正确的函数
  const handleVerifyCode = () => {
    // verify code with backend
    console.log("Verifying code", code);
  };

  const registerFunc = () => {
    // register with backend
    console.log("Registering", username, password, email, code);
    registerApi({
      username: username,
      password: password,
      email: email,
      code: code,
    });
  };

  const ConfirmPasswordFunc = () => {
    // register with backend
    console.log("ConfirmPasswordFunc", ConfirmPassword);
  };

  return (
    <>
      <Form
        initialValues={{
          remember: true,
        }}
      >
        {/* 用户名 */}
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
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
        {/* 密码 */}
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            placeholder="密码"
            size="large"
            allowClear
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "300px" }}
          />
        </Form.Item>
        {/* 忘记密码 */}
        {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item> */}
        {/* 确认密码 */}
        <Form.Item>
          <Input.Password
            placeholder="确认密码"
            size="large"
            allowClear
            focus={ConfirmPasswordFunc}
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: "300px" }}
          />
        </Form.Item>

        {/* 邮箱 */}
        <Form.Item>
          <Input
            placeholder="请输入邮箱"
            size="large"
            allowClear
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "300px" }}
          />
        </Form.Item>

        <Form.Item>
          <Space.Compact style={{ width: "300px", height: "70px" }}>
            <Input
              placeholder="验证码"
              size="large"
              allowClear
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ marginBottom: "30px" }}
            />
            <Button style={{ height: "40px" }} onClick={handleSendCode}>
              发送验证码
            </Button>
          </Space.Compact>
        </Form.Item>

        {/* 登录按钮 */}
        <Form.Item>
          <Button type="primary" size="large" style={{ width: "300px" }}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Register;
