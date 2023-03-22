import React, { useState } from "react";
import { Form, Input, Button, Segmented } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

import MailLogin from "./MailLogin";
import AccountLogin from "./AccountLogin";

const LoginPage = () => {
  const [value, setValue] = useState("账号登录");

  function LoginMethodSelection({ currentPage }) {
    switch (currentPage) {
      case "账号登录":
        return <AccountLogin />;
      case "邮箱登录":
        return <MailLogin />;
      default:
        return null;
    }
  }

  return (
    <>
      <div
        style={{
          margin: "30px",
        }}
      >
        <Segmented
          options={[
            {
              label: "账号登录",
              value: "账号登录",
              icon: <UserOutlined />,
            },
            {
              label: "邮箱登录",
              value: "邮箱登录",
              icon: <MailOutlined />,
            },
          ]}
          value={value}
          onChange={setValue}
        />
      </div>
      <div
        style={{
          margin: "30px",
        }}
      >
        <LoginMethodSelection currentPage={value} />
      </div>
    </>
  );
};

export default LoginPage;
