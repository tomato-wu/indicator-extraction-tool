import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, message, Space, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { changePasswordApi } from "../../utils/axios/personal";

// 引入 CryptoJS 库
import CryptoJS from "crypto-js";

const PersonCardBox = {
  width: "60vw",
  height: "35vh",
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
  height: "17vh",
  display: "flex",
  marginLeft: "50px",
  marginTop: "5.9rem",
  alignItems: "center",
};

const ChangePassword = () => {
  const [prev_password, setPrev_password] = useState(""); // 旧密码
  const [new_password, setNew_password] = useState(""); // 新密码

  const ChangePasswordFunc = () => {
    // 修改密码
    changePasswordApi({
      prev_password: CryptoJS.MD5(prev_password).toString(),
      curr_password: CryptoJS.MD5(new_password).toString(),
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
          <h3 style={personTitleText}>修改密码</h3>
        </div>
        <div style={box}>
          <Form
            initialValues={{
              remember: true,
            }}
          >
            {/* 旧密码 */}
            <Form.Item
              name="prePassword"
              rules={[
                {
                  required: true,
                  message: "请输入旧密码",
                },
              ]}
            >
              <Input.Password
                placeholder="旧密码"
                size="large"
                allowClear
                value={prev_password}
                onChange={(e) => setPrev_password(e.target.value)}
                style={{ width: "300px" }}
              />
            </Form.Item>

            {/* 新密码 */}
            <Form.Item
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "请输入新密码",
                },
              ]}
            >
              <Input.Password
                placeholder="新密码"
                size="large"
                allowClear
                value={new_password}
                onChange={(e) => setNew_password(e.target.value)}
                style={{ width: "300px" }}
              />
            </Form.Item>

            {/* 确认密码 */}
            <Form.Item
              name="confirm"
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "请再次输入您的密码!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
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
                style={{ width: "300px" }}
              />
            </Form.Item>

            {/* 登录按钮 */}
            <Form.Item>
              <Button
                type="primary"
                size="large"
                style={{ width: "300px" }}
                onClick={ChangePasswordFunc}
              >
                修改密码
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
