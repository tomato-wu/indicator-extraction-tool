import React from "react";
import {
  Typography,
} from "antd";
const { Title, Paragraph, Link } = Typography;

const PersonCardBox = {
  padding: "50px",
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
