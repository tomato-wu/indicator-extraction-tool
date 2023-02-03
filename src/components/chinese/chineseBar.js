import React, { useState } from "react";
import { Button, Space, Divider } from "antd";

function ChineseBar() {
  return (
    <>
      <Divider orientation="left" orientationMargin="0">
        通用计量指标提取
      </Divider>
      {/* 功能选择按钮 */}
      <Space size={[8, 16]} wrap>
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
      <Divider orientation="left" orientationMargin="0">
        汉语计量指标提取
      </Divider>
      <Space size={[8, 16]} wrap>
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
