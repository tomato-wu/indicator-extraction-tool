import React, { useState } from "react";
import { Form, Input, Button, VerificationInput, Space } from "antd";
const { Search } = Input;

const Login = () => {
  return (
    <>
      <Input
        placeholder="用户名/邮箱"
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

      <Button type="primary" size="large" style={{ width: "300px" }}>
        登录
      </Button>
    </>
  );
};

export default Login;
