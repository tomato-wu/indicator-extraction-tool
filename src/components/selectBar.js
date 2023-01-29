import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Select } from "antd";

import ChineseMetrics from "./chinese_metrics/chineseMetrics";
import EnglishIndicators from "./english_indicators/englishIndicators";
import SortLetters from "./sort_letters/sortLetters";
import UITextField from "./UITextField";

function SelectBar() {
  const [menu, setMenu] = useState(1);

  const handleChange = (e) => {
    let key = parseInt(e);
    setMenu(key);
    let messageStr = "";
    if (key === 1) {
      messageStr = "检测到汉语";
    } else if (key === 2) {
      messageStr = "检测到英语";
    } else {
      messageStr = "检测到越南语";
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
          defaultValue="检测到汉语"
          style={{
            width: 220,
          }}
          onChange={handleChange}
          options={[
            {
              value: "1",
              label: "检测到汉语",
            },
            {
              value: "2",
              label: "检测到英语",
            },
            {
              value: "3",
              label: "检测到越南语",
            },
          ]}
        />
      </Space>
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <MenuItem menu={menu} />

        {/* 输入框---可以输入文本--识别语种，然后切换到相应的语种进行处理 */}
        <UITextField></UITextField>
      </div>
    </>
  );
}

export default SelectBar;
