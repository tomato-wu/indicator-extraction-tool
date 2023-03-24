import { registerApi, sendCodeApi } from "../utils/axios/api";

import React, { useState, useEffect } from "react";
import { Form, Input, Button, Space, message } from "antd";
const { Search } = Input;

const Register = () => {
  let timer; //验证码定时器
  const [btnDisabled, setBtnDisabled] = useState(false); //按钮是否可点击，false可点击
  const [second, setSecond] = useState(59); //倒计时秒数

  const [username, setUsername] = useState(""); // 用来存储用户名
  const [password, setPassword] = useState(""); // 用来存储密码
  const [ConfirmPassword, setConfirmPassword] = useState(""); // 用来存储密码

  const [email, setEmail] = useState(""); // 用来存储邮箱
  const [code, setCode] = useState(""); // 用来存储验证码

  // 初始化时清除定时器
  useEffect(() => {
    clearInterval(timer);
    return () => clearInterval(timer);
  }, []);

  // 监听秒数的变动
  useEffect(() => {
    if (second > 0 && second < 60) {
    } else {
      // 定时器超过时间后，可以重新发送验证码
      clearInterval(timer);
      // 可点击
      setBtnDisabled(false);
      setSecond(60);
    }
  }, [second]);

  // 发送验证码到邮箱的函数
  const handleSendCode = async () => {
    // 倒计时递减
    timer = setInterval(() => setSecond((pre) => pre - 1), 1000);
    // 不可点击
    setBtnDisabled(true);
    let msg = await sendCodeApi({ email: email });
    message.info(msg.message);
  };

  const registerFunc = async () => {
    // register with backend
    let res = await registerApi({
      username: username,
      password: password,
      email: email,
      code: code,
    });

    message.info(res.data.message);
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
        {/* 密码 */}
        <Form.Item
          name="password"
          rules={[
            // {
            //   pattern: "/[^a-zA-Z0-9]+$/",
            //   message: "密码只能是数字+字母",
            // },
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
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "请再次输入您的密码!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error("两次输入的密码不一致!"));
              },
            }),
          ]}
        >
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
        <Form.Item
          name="email"
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

        <Form.Item
          name="captcha"
          rules={[
            {
              required: true,
              message: "请输入验证码!",
            },
          ]}
        >
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
              {!btnDisabled ? "获取验证码" : `${second}s后重发`}
            </Button>
          </Space.Compact>
        </Form.Item>

        {/* 登录按钮 */}
        <Form.Item>
          <Button
            type="primary"
            size="large"
            style={{ width: "300px" }}
            onClick={registerFunc}
          >
            注册
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Register;
