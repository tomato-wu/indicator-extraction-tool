import React, { useState } from "react";
import { Form, Input, Button, VerificationInput, Space } from "antd";
const { Search } = Input;

const Register = () => {
  const [code, setCode] = useState(""); // 用来存储验证码的状态
  const [email, setEmail] = useState(""); // 用来存储邮箱的状态
  const [sent, setSent] = useState(false); // 用来存储验证码的状态

  // 发送验证码到邮箱的函数
  const handleSendCode = () => {
    // send code to email number
    console.log("Sending code to", email);
    setSent(true); // 设置发送状态为真
  };

  //  验证验证码是否正确的函数
  const handleVerifyCode = () => {
    // verify code with backend
    console.log("Verifying code", code);
  };

  return (
    <>
      <Input
        placeholder="用户名"
        size="large"
        allowClear
        style={{ width: "300px", marginBottom: "30px" }}
      />
      <Input
        placeholder="密码"
        size="large"
        allowClear
        style={{ width: "300px", marginBottom: "30px" }}
      />
      <Input
        placeholder="确认密码"
        size="large"
        allowClear
        style={{ width: "300px", marginBottom: "30px" }}
      />
      <Input
        placeholder="请输入邮箱"
        size="large"
        allowClear
        style={{ width: "300px", marginBottom: "30px" }}
      />

      <Space.Compact style={{ width: "300px", height: "70px" }}>
        <Input
          placeholder="验证码"
          size="large"
          allowClear
          style={{ marginBottom: "30px" }}
        />
        <Button style={{ height: "40px" }} onClick={handleSendCode}>
          发送验证码
        </Button>
      </Space.Compact>

      <Button type="primary" size="large" style={{ width: "300px" }}>
        登录
      </Button>
    </>
  );
};

export default Register;
