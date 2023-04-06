// 瑞典语
import React from "react";
import { Button, Space } from "antd";
import GeneralIndicators from "../generalIndicators";

function Swedish(props) {
  const { lgType, lgText } = props;

  return (
    <>
      {/* 功能选择按钮 */}
      <GeneralIndicators lgType={lgType} lgText={lgText} />
      {/* 特定语种处理 */}
      {/* <Space size={[8, 16]} wrap style={{ marginTop: "15px" }}>
        <span style={{ fontSize: "9px", color: "gray" }}>瑞典语：</span>
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

export default Swedish;