import React from "react";
import { Button, Space } from "antd";

function EnglishIndicators() {
  return (
    <>
      <Space size={[8, 16]} wrap>
        <Button type="primary">计算 ARI</Button>
        <Button type="primary">计算 ARIAges</Button>
        <Button type="primary">计算 ARIGradelevels</Button>
        <Button type="primary">计算 RIX</Button>
        <Button type="primary">计算 FleschReading</Button>
        <Button type="primary">计算 FleschReadingEase</Button>
        <Button type="primary">计算 FleschReadingEaseLevels</Button>
        <Button type="primary">计算 LIX</Button>
        <Button type="primary">计算 FlsechKincaidGrade</Button>
        <Button type="primary">计算 FlsechKincaidGradeLevel</Button>
        <Button type="primary">计算 GunningFogIndex</Button>
        <Button type="primary">计算 GunningFogLevel</Button>
        <Button type="primary">计算 SMOGIndex</Button>
        <Button type="primary">计算 SMOGLevel</Button>
        <Button type="primary">计算 ColemanLiauIndex</Button>
        <Button type="primary">计算 ColemanLiauLevel</Button>
        <Button type="primary">计算 DaleChallIndex</Button>
        <Button type="primary">计算 DaleChallGradeLevels</Button>
        <Button type="primary">计算 LWIndex</Button>
        <Button type="primary" danger>
          一键提取
        </Button>
      </Space>
    </>
  );
}

export default EnglishIndicators;
