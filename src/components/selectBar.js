import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Select, Input, Tag } from "antd";
import * as axiosBase from "../utils/axios";
import ChineseMetrics from "./chinese_metrics/chineseMetrics";
import EnglishIndicators from "./english_indicators/englishIndicators";
import SortLetters from "./sort_letters/sortLetters";
const { TextArea } = Input;

function SelectBar() {
  // 切换组件的变量
  const [menu, setMenu] = useState(1);

  // 输入框
  const [str, setStr] = useState("");
  const [showMessage, setShowMessage] = useState("");
  const [history, setHistory] = useState([]);

  async function getLanguages(LanguagesText) {
    let tag = await axiosBase.get("api/langrc", { text: LanguagesText });
    console.log(tag);
  }
  // 输入框输入触发的回调
  const onTextChange = (e) => {
    setStr(e.target.value);
    console.log(e.target.value);
    getLanguages("nice");
  };

  // 历史记录消除触发的回调
  const log = (e) => {
    console.log(e);
  };
  // 历史记录选中的时候触发的回调
  const selectHistory = (e) => {
    setStr(e.target.innerText);
  };

  // 弹窗提示目前处于什么语种下
  const handleChange = (e) => {
    let key = parseInt(e);
    // 切换组件
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

  // 切换不同语种的组件
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
      {/* 指标提取和输入框 */}
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        {/* 指标提取 */}
        <MenuItem menu={menu} />

        {/* 输入框---可以输入文本--识别语种，然后切换到相应的语种进行处理 */}
        <>
          <div>
            {/* 输入框 */}
            <Space size="large">
              <TextArea
                rows={15}
                allowClear={true}
                bordered={true}
                placeholder="请输入文本"
                value={str}
                onChange={onTextChange}
                style={{ width: "37vw", marginTop: "4vh" }}
              ></TextArea>
              {/* 展示框 */}
              <TextArea
                rows={15}
                allowClear={true}
                bordered={true}
                readOnly={true}
                value={showMessage}
                style={{ width: "37vw", marginTop: "4vh" }}
              ></TextArea>
            </Space>
          </div>

          {/* 历史记录 */}
          <div style={{ margin: "30px 0px" }}>
            {history.map((item) => {
              return (
                <Tag
                  closable
                  onClose={log}
                  onClick={selectHistory}
                  style={{ cursor: "pointer", margin: "5px" }}
                >
                  {item}
                </Tag>
              );
            })}
          </div>
        </>
      </div>
    </>
  );
}

export default SelectBar;
