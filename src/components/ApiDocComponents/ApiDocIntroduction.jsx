import React, { useState, useEffect } from "react";
import {
  Typography,
} from "antd";
const { Title, Paragraph, Text } = Typography;

const PersonCardBox = {
  width: "100%",
  height: "100%",
  padding: "20px",
  backgroundColor: "#FDFDFD",
};

const ApiDocIntroduction = () => {
  return (
    <>
      <div style={PersonCardBox}>
        <Title level={2}>介绍</Title>
        <Paragraph>
          我们提供完善的设计原则、最佳实践和设计资源文件（
          <Text code>Sketch</Text> 和<Text code>Axure</Text>
          ），来帮助业务快速设计出高质量的产品原型。
        </Paragraph>
      </div>
    </>
  );
};

export default ApiDocIntroduction;
