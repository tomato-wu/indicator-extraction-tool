//印地语
import React from "react";
import { useState } from "react";
import { Space, Checkbox } from "antd";
import GeneralIndicators from "../generalIndicators";

function Hindi(props) {
  const { lgType, lgText } = props;
  const [requireSplit, setRequireSplit] = useState(false); // 文本是否是已经分词后的文本
  const onChange = (e) => {
    setRequireSplit(e.target.checked);
  };
  return (
    <>
      {/* 是否要进行分词 */}
      <Space
        size={[8, 16]}
        wrap
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        <span style={{ fontSize: "9px", color: "gray" }}>
          是否要对文本进行分词：
        </span>
        <Checkbox onChange={onChange} style={{ marginLeft: "40px" }}>
          {"   "}是
        </Checkbox>
      </Space>
      {/* 通用指标提取 */}
      <GeneralIndicators
        lgType={lgType}
        lgText={lgText}
        requireSplit={requireSplit}
      />
    </>
  );
}

export default Hindi;
