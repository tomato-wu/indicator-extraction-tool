import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  message,
  Space,
  Menu,
  Typography,
  Modal,
} from "antd";
// 引入 CryptoJS 库
import CryptoJS from "crypto-js";
import { createAppidApi, getAppidApi } from "../../utils/axios/api.js";
const { Title, Paragraph, Text, Link } = Typography;

const PersonCardBox = {
  width: "100%",
  height: "100%",
  marginLeft: "100px",
  padding: "20px",
  backgroundColor: "#FDFDFD",
};

const GetAppId = () => {
  const [appid, setAppid] = useState(""); // appid
  const [password, setPassword] = useState(""); // 密码

  useEffect(() => {
    // 获取appid
    const getAppIdFn = async () => {
      const res = await getAppidApi();
      setAppid(res.data.appid);
    };
    getAppIdFn();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = async () => {
    let res = await createAppidApi({
      password: CryptoJS.MD5(password).toString(),
    });
    message.success(res.msg);
    setAppid(res.data.appid);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={PersonCardBox}>
        <Title level={3} style={{ marginBottom: "5vh" }}>
          获取AppID
        </Title>

        {appid ? (
          <Title level={4}>
            AppID：
            <Paragraph copyable style={{ paddingTop: "2vh" }}>
              {appid}
            </Paragraph>
          </Title>
        ) : (
          <Paragraph>
            <Button
              type="dashed"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              获取
            </Button>
          </Paragraph>
        )}

        <Paragraph>注：接入问题请优先参考接入文档。</Paragraph>
      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          initialValues={{
            remember: true,
          }}
        >
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
        </Form>
      </Modal>
    </>
  );
};

export default GetAppId;
