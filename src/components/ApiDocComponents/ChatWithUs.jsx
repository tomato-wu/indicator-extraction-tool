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
} from "antd";
const { Title, Paragraph, Text, Link } = Typography;

const PersonCardBox = {
  width: "100%",
  height: "100%",
  marginLeft: "100px",
  padding: "20px",
  backgroundColor: "#FDFDFD",
};

const ChatWithUs = () => {
  return (
    <>
      <div style={PersonCardBox}>
        <Title level={3} style={{ marginBottom: "5vh" }}>
          联系我们
        </Title>

        <Title level={4}>如需咨询，可通过下面的邮箱与我们取得联系：</Title>
        <Paragraph>
          邮箱：<Link href="https://mail.qq.com/">h20333@qq.com</Link> 或者{" "}
          <Link href="https://mail.qq.com/">3011543110@qq.com</Link>
        </Paragraph>
        <Paragraph>注：接入问题请优先参考接入文档。</Paragraph>
      </div>
    </>
  );
};

export default ChatWithUs;
