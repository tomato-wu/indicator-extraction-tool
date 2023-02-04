import React, { useState } from "react";
import { Button, Space } from "antd";

function ChineseBar() {
  return (
    <>
      {/* 功能选择按钮 */}
      <Space size={[8, 16]} wrap>
        <span style={{ fontSize: "9px", color: "gray" }}>
          通用计量指标提取：
        </span>
        <Button type="primary" ghost>
          总词数提取
        </Button>
        <Button type="primary" ghost>
          词典数提取
        </Button>
        <Button type="primary" ghost>
          独立词数提取
        </Button>
        <Button type="primary" ghost>
          单现词数提取
        </Button>
        <Button type="primary" ghost>
          单现词比例提取
        </Button>
        <Button type="primary" ghost>
          H值提取
        </Button>
        <Button type="primary" ghost>
          R值提取
        </Button>
        <Button type="primary" ghost>
          丰富度提取
        </Button>
        <Button type="primary" ghost>
          平均依存距离提取
        </Button>
        <Button type="primary" ghost>
          图书词提取
        </Button>
        <Button type="primary" ghost danger>
          一键提取
        </Button>
      </Space>
      <Space size={[8, 16]} wrap style={{ marginTop: "15px" }}>
        <span style={{ fontSize: "9px", color: "gray" }}>
          汉语计量指标提取：
        </span>
        <Button type="primary" ghost>
          总词数提取
        </Button>
        <Button type="primary" ghost>
          词典数提取
        </Button>
        <Button type="primary" ghost>
          独立词数提取
        </Button>
        <Button type="primary" ghost>
          单现词数提取
        </Button>

        <Button type="primary" ghost>
          图书词提取
        </Button>
        <Button type="primary" ghost danger>
          一键提取
        </Button>
      </Space>
    </>
  );
}

export default ChineseBar;
