import React, { useState, useCallback, useEffect } from "react";
import {
  Button,
  Dropdown,
  message,
  Space,
  Select,
  Input,
  Tag,
  Divider,
  Checkbox,
} from "antd";
import {
  getLanguageApi,
  getHistoryApi,
  deleteHistoryApi,
} from "../utils/axios/api";

import ChineseBar from "./chinese";
import EnglishBar from "./english";
import JapaneseBar from "./japanese";
import IndonesianBar from "./indonesian";
import FilipinoBar from "./filipino";

import Vietnamese from "./vietnamese/";
import Burmese from "./burmese/";
import Thai from "./thai/";
import Lao from "./lao/";
import Arabic from "./arabic/";
import Bengali from "./bengali/";
import Korean from "./korean/";
import Spanish from "./spanish/";
import Turkish from "./turkish/";
import Farsi from "./farsi/";
import Portuguese from "./portuguese/";

import Ukrainian from "./Ukrainian/";
import Russian from "./Russian/";
import German from "./German/";
import French from "./French/";
import Italian from "./Italian/";
import Czech from "./Czech/";
import Swedish from "./Swedish/";

import "./selectBar.css";

const { TextArea } = Input;

function SelectBar() {
  // 切换不同语种的变量
  const [menu, setMenu] = useState("zh");

  // 输入框文本变量
  const [str, setStr] = useState("");

  const [lgType, setLgType] = useState("");

  const [lgText, setLgText] = useState("");

  const [isSplitingText, setIsSplitingText] = useState(false); // 文本是否是已经分词后的文本
  const onChange = (e) => {
    setIsSplitingText(e.target.checked);
  };
  async function getLanguages(LanguagesText) {
    // 语种识别接口
    let tag = await getLanguageApi({ text: LanguagesText });
    setLgType(tag.data.lg_type);
    setLgText(LanguagesText);
    handleChange(tag.data.lg_type);

    // 获取最新的历史记录并且更新列表
    getHistoryApi()
      .then((res) => {
        setHistoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // 输入框输入触发的回调
  const onTextChange = (e) => {
    if (e.target.value !== "") {
      setStr(e.target.value); //输入框同步显示
      loadDebounce(e.target.value);
    } else {
      setStr(e.target.value);
      setLgType("");
      setLgText("");
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

  const [historyList, setHistoryList] = useState([]);
  // 历史记录消除触发的回调
  useEffect(() => {
    // 获取历史记录
    getHistoryApi()
      .then((res) => {
        setHistoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // 删除历史记录
  const deleteHistory = (id) => {
    deleteHistoryApi({ history_id: String(id) })
      .then((res) => {
        message.success("删除历史记录成功");
        setHistoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 历史记录选中的时候触发的回调
  const selectHistory = (historyStr) => {
    setStr(historyStr);
    loadDebounce(historyStr);
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
      case "th":
        messageStr = "检测到泰语";
        break;
      case "vi":
        messageStr = "检测到越南语";
        break;
      case "km":
        messageStr = "检测到缅甸/柬埔寨（高棉语）";
        break;
      case "lo":
        messageStr = "老挝语";
        break;
      case "ar":
        messageStr = "阿拉伯语";
        break;
      case "es":
        messageStr = "西班牙语";
        break;
      case "pt":
        messageStr = "葡萄牙语";
        break;
      case "tr":
        messageStr = "土耳其语";
        break;
      case "ko":
        messageStr = "韩语";
        break;
      case "bn":
        messageStr = "孟加拉语";
        break;
      case "fa":
        messageStr = "波斯语";
        break;
      case "ru":
        messageStr = "俄语";
        break;
      case "dr":
        messageStr = "德语";
        break;
      case "fr":
        messageStr = "法语";
        break;
      case "it":
        messageStr = "意大利语";
        break;
      case "cs":
        messageStr = "捷克语";
        break;
      case "uk":
        messageStr = "乌克兰语";
        break;
      case "sv":
        messageStr = "瑞典语";
        break;
      default:
        messageStr = "暂不支持该语种的处理";
    }
    message.success(messageStr);
  };

  // 点击选择器自助选择需要解析的语种
  const changeLanguages = (e) => {
    setMenu(e);
  };

  // 切换不同语种的组件
  function MenuItem({ menu, lgType, lgText, isSplitingText }) {
    switch (menu) {
      case "zh":
        return (
          <ChineseBar
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "en":
        return (
          <EnglishBar
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "ja":
        return (
          <JapaneseBar
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "id":
        return (
          <IndonesianBar
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "tl":
        return (
          <FilipinoBar
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "th":
        return (
          <Thai
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "vi":
        return (
          <Vietnamese
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "km":
        return (
          <Burmese
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "lo":
        return (
          <Lao
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "ar":
        return (
          <Arabic
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "es":
        return (
          <Spanish
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "pt":
        return (
          <Portuguese
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "tr":
        return (
          <Turkish
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "ko":
        return (
          <Korean
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "bn":
        return (
          <Bengali
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "fa":
        return (
          <Farsi
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "ru":
        return (
          <Russian
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "dr":
        return (
          <German
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "fr":
        return (
          <French
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "it":
        return (
          <Italian
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "cs":
        return (
          <Czech
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "uk":
        return (
          <Ukrainian
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
      case "sv":
        return (
          <Swedish
            lgType={lgType}
            lgText={lgText}
            isSplitingText={isSplitingText}
          />
        );
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
                {
                  value: "th",
                  label: "泰语",
                },
                {
                  value: "vi",
                  label: "越南语",
                },
                {
                  value: "km",
                  label: "缅甸/柬埔寨（高棉语）",
                },
                {
                  value: "lo",
                  label: "老挝语",
                },
                {
                  value: "ar",
                  label: "阿拉伯语",
                },
                {
                  value: "bn",
                  label: "孟加拉语",
                },
                {
                  value: "fa",
                  label: "波斯语",
                },
                {
                  value: "pt",
                  label: "葡萄牙语",
                },
                {
                  value: "es",
                  label: "西班牙语",
                },
                {
                  value: "tr",
                  label: "土耳其语",
                },
                {
                  value: "ko",
                  label: "朝鲜语(韩国)",
                },
                {
                  value: "fr",
                  label: "法语",
                },
                {
                  value: "de",
                  label: "德语",
                },
                {
                  value: "it",
                  label: "意大利语",
                },
                {
                  value: "ru",
                  label: "俄语",
                },
                {
                  value: "cs",
                  label: "捷克语",
                },
                {
                  value: "sv",
                  label: "瑞典语",
                },
                {
                  value: "uk",
                  label: "乌克兰语",
                },
              ]}
            />
            <Checkbox onChange={onChange} style={{ marginLeft: "40px" }}>
              {"   "}
              文本是否是已经分词后的文本
            </Checkbox>
          </div>
          <div>
            {/* 指标提取 */}
            <MenuItem
              menu={menu}
              lgType={lgType}
              lgText={lgText}
              isSplitingText={isSplitingText}
            />
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
          <Divider orientation="left" orientationMargin="0">
            历史记录
          </Divider>
          {/* 历史记录 */}
          <div style={{ margin: "30px 0px" }}>
            {historyList.map((item) => {
              return (
                <Tag
                  closable
                  onClose={() => deleteHistory(item.id)}
                  onClick={() => selectHistory(item.lg_text)}
                  style={{
                    cursor: "pointer",
                    margin: "5px",
                  }}
                >
                  <span
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {`${item.lg_text.slice(0, 30)}...}`}
                  </span>
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
