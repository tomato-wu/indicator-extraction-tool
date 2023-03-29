import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const Login = () => {
  const [username, setUsername] = useState(""); // 用户名
  const [password, setPassword] = useState(""); // 密码

  const LoginFunc = () => {
    // 登录函数
    console.log("LoginFunc", username, password);
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
            placeholder="用户名/邮箱"
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
        {/* 登录按钮 */}
        <Form.Item>
          <Button
            type="primary"
            size="large"
            style={{ width: "300px" }}
            onClick={LoginFunc}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
