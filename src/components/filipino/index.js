// 菲律宾语计量指标提取：
import React from "react";
import { Button, Space } from "antd";
import GeneralIndicators from "../generalIndicators";

function FilipinoBar(props) {
  const { lgType, lgText } = props;

  return (
    <>
      {/* 功能选择按钮 */}
      <GeneralIndicators lgType={lgType} lgText={lgText} />
      {/* 特定语种处理 */}
      {/* <Space size={[8, 16]} wrap style={{ marginTop: "15px" }}>
        <span style={{ fontSize: "9px", color: "gray" }}>
          菲律宾语计量指标提取：
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
      </Space> */}
    </>
  );
}

export default FilipinoBar;
