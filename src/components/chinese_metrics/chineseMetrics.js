import React, { useState } from "react";
import { Button, Space } from "antd";
import UITextField from "../UITextField.js";

function ChineseMetrics() {
  const [str, setStr] = useState("");
  const [showMessage, setShowMessage] = useState("");
  const [history, setHistory] = useState([]);

  // 输入框输入触发的回调
  const onChange = (e) => {
    setStr(e.target.value);
  };

  // 历史记录消除触发的回调
  const log = (e) => {
    console.log(e);
  };
  // 历史记录选中的时候触发的回调
  const selectHistory = (e) => {
    setStr(e.target.innerText);
  };

  // 总词数提取
  const totalWords = () => {
    setShowMessage(str);
    if (str.length > 0) {
      setHistory([...history, str]);
    }
  };
  return (
    <>
      {/* 功能选择按钮 */}
      <Space size={[8, 16]} wrap>
        <Button type="primary" onClick={totalWords}>
          总词数提取
        </Button>
        <Button type="primary">词典数提取</Button>
        <Button type="primary">独立词数提取</Button>
        <Button type="primary">单现词数提取</Button>
        <Button type="primary">单现词比例提取</Button>
        <Button type="primary">H值提取</Button>
        <Button type="primary">R值提取</Button>
        <Button type="primary">丰富度提取</Button>
        <Button type="primary">平均依存距离提取</Button>
        <Button type="primary">图书词提取</Button>
        <Button type="primary" danger>
          一键提取
        </Button>
      </Space>
      {/* 输入框---可以输入文本--识别语种，然后切换到相应的语种进行处理 */}
      <UITextField></UITextField>
    </>
  );
}

export default ChineseMetrics;
