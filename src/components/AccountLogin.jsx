import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const AccountLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名!" }]}
      >
        <Input
          placeholder="请输入邮箱"
          size="large"
          style={{ width: "300px", marginBottom: "15px" }}
        />
      </Form.Item>
      {!isLogin && (
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "请输入邮箱!" },
            { type: "email", message: "请输入有效的邮箱!" },
          ]}
        >
          <Input
            placeholder="请输入邮箱"
            size="large"
            style={{ width: "300px", marginBottom: "15px" }}
          />
        </Form.Item>
      )}
      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码!" }]}
      >
        <Input
          placeholder="请输入邮箱"
          size="large"
          style={{ width: "300px", marginBottom: "15px" }}
        />
      </Form.Item>
      {!isLogin && (
        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "请确认密码!" },
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
          <Input
            placeholder="请输入邮箱"
            size="large"
            style={{ width: "300px", marginBottom: "15px" }}
          />
        </Form.Item>
      )}

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          {isLogin ? "登录" : "注册"}
        </Button>
        或者 <a onClick={toggleForm}>{isLogin ? "注册" : "登录"}</a>
      </Form.Item>
    </Form>
  );
};

export default AccountLogin;
