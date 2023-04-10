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
        <Title level={3}>接入服务介绍</Title>
        <Paragraph>
          我们提供完善的设计原则、最佳实践和设计资源文件（
          <Text code>Sketch</Text> 和<Text code>Axure</Text>
          ），来帮助业务快速设计出高质量的产品原型。
        </Paragraph>
        <Title level={4}>一，什么是百度翻译开放平台</Title>
        <Title level={4}>二，平台提供哪些服务</Title>
        <Title level={5}>语种识别API</Title>
        <Title level={5}>通用指标API</Title>
        <Title level={5}>可读性指标SDK</Title>
        <Title level={5}>分词&词性标注API</Title>

        <Title level={4}>三，什么是百度翻译开放平台</Title>
        <Title level={4}>四，什么是百度翻译开放平台</Title>
      </div>
    </>
  );
};

export default ApiDocIntroduction;
