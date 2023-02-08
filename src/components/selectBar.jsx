import React, { useState, useCallback } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Select, Input, Tag } from "antd";
import { getLanguageApi } from "../utils/axios/api";

import ChineseBar from "./chinese/chineseBar";
import EnglishBar from "./english/englishBar";
import JapaneseBar from "./japanese/JapaneseBar";
import IndonesianBar from "./indonesian/indonesianBar";
import FilipinoBar from "./filipino/filipinoBar";
import "./selectBar.css";

const { TextArea } = Input;

function SelectBar() {
  // 切换不同语种的变量
  const [menu, setMenu] = useState("zh");

  // 输入框文本变量
  const [str, setStr] = useState("");
  const [history, setHistory] = useState([]);

  const [lgType, setLgType] = useState("");

  const [lgText, setLgText] = useState("");

  async function getLanguages(LanguagesText) {
    // 语种识别接口
    let tag = await getLanguageApi({ text: LanguagesText });
    setLgType(tag.data.lg_type);
    setLgText(LanguagesText);
    handleChange(tag.data.lg_type);
  }
  // 输入框输入触发的回调
  const onTextChange = (e) => {
    if (e.target.value !== "") {
      setStr(e.target.value); //输入框同步显示
      loadDebounce(e.target.value);
    } else {
      setStr(e.target.value);
    }
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
    switch (e) {
      case "zh":
        messageStr = "检测到汉语";
        break;
      case "en":
        messageStr = "检测到英语";
        break;
      case "ja":
        messageStr = "检测到日语";
        break;
      case "id":
        messageStr = "检测到印度尼西亚语";
        break;
      case "tl":
        messageStr = "检测到菲律宾语";
        break;
      default:
        messageStr = "暂不支持该语种的处理";
    }
    message.info(messageStr);
  };

  // 点击选择器自助选择需要解析的语种
  const changeLanguages = (e) => {
    setMenu(e);
  };

  // 切换不同语种的组件
  function MenuItem({ menu, lgType, lgText }) {
    switch (menu) {
      case "zh":
        return <ChineseBar lgType={lgType} lgText={lgText} />;
      case "en":
        return <EnglishBar lgType={lgType} lgText={lgText} />;
      case "ja":
        return <JapaneseBar lgType={lgType} lgText={lgText} />;
      case "id":
        return <IndonesianBar lgType={lgType} lgText={lgText} />;
      case "tl":
        return <FilipinoBar lgType={lgType} lgText={lgText} />;
      default:
        return null;
    }
  }

  return (
    <>
      {/* 指标提取 */}
      <div className="selectCardBox">
        {/* 标题 */}
        <div className="selectTitleBox">
          <h3 className="selectTitleText">指标提取</h3>
        </div>
        <div className="selectDistinguish">
          <div style={{ margin: "20px 2px" }}>
            <span className="selectSpanText">识别语种：</span>
            <Select
              defaultValue="zh"
              style={{
                width: 160,
                marginLeft: "3.5vw",
              }}
              onChange={changeLanguages}
              value={menu}
              options={[
                {
                  value: "zh",
                  label: "汉语",
                },
                {
                  value: "en",
                  label: "英语",
                },
                {
                  value: "ja",
                  label: "日语",
                },
                {
                  value: "id",
                  label: "印度尼西亚语",
                },
                {
                  value: "tl",
                  label: "菲律宾语",
                },
              ]}
            />
          </div>
          <div>
            {/* 指标提取 */}
            <MenuItem menu={menu} lgType={lgType} lgText={lgText} />
          </div>
        </div>
      </div>

      {/* 指标提取和输入框 */}
      <div style={{ marginTop: "10px", marginBottom: "30px" }}>
        {/* 输入框---可以输入文本--识别语种，然后切换到相应的语种进行处理 */}
        <>
          <div>
            {/* 输入框 */}
            <Space size="large">
              <TextArea
                rows={18}
                allowClear={true}
                bordered={true}
                placeholder="请输入文本"
                value={str}
                onChange={onTextChange}
                style={{
                  width: "80vw",
                  marginTop: "4vh",
                }}
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
