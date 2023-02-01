import React from "react";
import { Button, Space, Divider } from "antd";

function IndonesianBar() {
  return (
    <>
      <Divider orientation="left" orientationMargin="0">
        通用计量指标提取
      </Divider>
      <Space size={[8, 16]} wrap>
        <Button type="primary">计算 ARI</Button>
        <Button type="primary">计算 ARIAges</Button>
        <Button type="primary">计算 ARIGradelevels</Button>
        <Button type="primary">计算 RIX</Button>
        <Button type="primary">计算 FleschReading</Button>
        <Button type="primary">计算 DaleChallIndex</Button>
        <Button type="primary">计算 DaleChallGradeLevels</Button>
        <Button type="primary">计算 LWIndex</Button>
        <Button type="primary" danger>
          一键提取
        </Button>
      </Space>
      <Divider orientation="left" orientationMargin="0">
        印度尼西亚语言
      </Divider>
      <Space size={[8, 16]} wrap>
        <Button type="primary">计算 ARIGradelevels</Button>
        <Button type="primary">计算 RIX</Button>

        <Button type="primary" danger>
          一键提取
        </Button>
      </Space>
    </>
  );
}

export default IndonesianBar;
