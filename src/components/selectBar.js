import React, { useState, useCallback } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Select, Input, Tag } from "antd";
import { getLanguageApi } from "../utils/axios/api";
import ChineseMetrics from "./chinese_metrics/chineseMetrics";
import EnglishIndicators from "./english_indicators/englishIndicators";
import SortLetters from "./sort_letters/sortLetters";
const { TextArea } = Input;

function SelectBar() {
  // 切换不同语种的变量
  const [menu, setMenu] = useState("zh");

  // 输入框文本变量
  const [str, setStr] = useState("");
  const [showMessage, setShowMessage] = useState("");
  const [history, setHistory] = useState([]);

  async function getLanguages(LanguagesText) {
    // 语种识别接口
    let tag = await getLanguageApi({ text: LanguagesText });
    handleChange(tag.data.lg_type);
  }
  // 输入框输入触发的回调
  const onTextChange = (e) => {
    setStr(e.target.value);
    loadDebounce(e.target.value);
  };
  // 输入框进行防抖处理
  function debounce(func, wait = 1000) {
    let timer = null;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }
  const loadDebounce = useCallback(
    debounce((e) => getLanguages(e), 1000),
    []
  );
  // 文章链接 https://blog.csdn.net/QY_99/article/details/128655901

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
    // 切换组件
    setMenu(e);
    let messageStr = "";
    if (e === "zh") {
      messageStr = "检测到汉语";
    } else if (e === "en") {
      messageStr = "检测到英语";
    } else {
      messageStr = "检测到越南语";
    }
    message.info(messageStr);
  };

  // 切换不同语种的组件
  function MenuItem({ menu }) {
    switch (menu) {
      case "zh":
        return <ChineseMetrics />;
      case "en":
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
              value: "zh",
              label: "检测到汉语",
            },
            {
              value: "en",
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
