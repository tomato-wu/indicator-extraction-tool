import React, { useState } from "react";
import { Button, Space, Input, Tag } from "antd";
const { TextArea } = Input;

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

      <div>
        {/* 输入框 */}
        <Space size="large">
          <TextArea
            rows={15}
            allowClear={true}
            bordered={true}
            placeholder="请输入文本"
            value={str}
            onChange={onChange}
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
        {history.map((item, index) => {
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
  );
}

export default ChineseMetrics;
