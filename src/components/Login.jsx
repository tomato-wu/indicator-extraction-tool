import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserNameLoginApi, EmailLoginApi } from "../utils/axios/api";
import { useNavigate } from "react-router-dom";
// 引入 CryptoJS 库
import CryptoJS from "crypto-js";

const Login = () => {
  const [username, setUsername] = useState(""); // 用户名
  const [password, setPassword] = useState(""); // 密码
  const navigate = useNavigate();

  const LoginFunc = async () => {
    // 登录函数
    if (username.indexOf("@") !== -1) {
      // 邮箱登录
      let res = await EmailLoginApi({
        email: username,
        password: CryptoJS.MD5(password).toString(),
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        message.success("登录成功");
        navigate("/home");
      } else {
        message.error("用户名或密码错误");
      }
    } else {
      let res = await UserNameLoginApi({
        username: username,
        password: CryptoJS.MD5(password).toString(),
      });
      console.log(res);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        message.success("登录成功");
        navigate("/home");
      } else {
        message.error("用户名或密码错误");
      }
    }
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
              message: "请输入你的用户名",
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
              message: "请输入密码",
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
