import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Select } from "antd";

import ChineseMetrics from "./chinese_metrics/chineseMetrics";
import EnglishIndicators from "./english_indicators/englishIndicators";
import SortLetters from "./sort_letters/sortLetters";

function SelectBar() {
  const [menu, setMenu] = useState(1);

  const handleChange = (e) => {
    let key = parseInt(e);
    setMenu(key);
    let messageStr = "";
    if (key === 1) {
      messageStr = "汉语计量指标提取";
    } else if (key === 2) {
      messageStr = "英语文本可读性指标提取";
    } else {
      messageStr = "排序字母频率分布拟合";
    }
    message.info(messageStr);
  };

  function MenuItem({ menu }) {
    switch (menu) {
      case 1:
        return <ChineseMetrics />;
      case 2:
        return <EnglishIndicators />;
      case 3:
        return <SortLetters />;
      default:
        return null;
    }
  }

  return (
    <>
      <Space size="large">
        <Select
          defaultValue="汉语计量指标提取"
          style={{
            width: 220,
          }}
          onChange={handleChange}
          options={[
            {
              value: "1",
              label: "汉语计量指标提取",
            },
            {
              value: "2",
              label: "英语文本可读性指标提取",
            },
            {
              value: "3",
              label: "排序字母频率分布拟合",
            },
          ]}
        />
      </Space>
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <MenuItem menu={menu} />
      </div>
    </>
  );
}

export default SelectBar;
