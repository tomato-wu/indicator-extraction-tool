import Login from "./Login";
import Register from "./Register";

import React, { useState } from "react";
import { Form, Input, Button, VerificationInput, Space } from "antd";
const { Search } = Input;

const LoginPage = () => {
  let [loginStatus, setLoginStatus] = useState(true);

  const handleLoginStatus = () => {
    setLoginStatus(!loginStatus);
  };
  return (
    <>
      {loginStatus ? <Login></Login> : <Register></Register>}
      {loginStatus ? (
        <div style={{ width: "300px", textAlign: "center", marginTop: "30px" }}>
          <p>
            没有账号？
            <span
              style={{ color: "rgb(64,150,255)", cursor: "pointer" }}
              onClick={handleLoginStatus}
            >
              立即注册
            </span>
          </p>
        </div>
      ) : (
        <div style={{ width: "300px", textAlign: "center", marginTop: "30px" }}>
          <p>
            已有账号？
            <span
              style={{ color: "rgb(64,150,255)", cursor: "pointer" }}
              onClick={handleLoginStatus}
            >
              登录
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default LoginPage;
