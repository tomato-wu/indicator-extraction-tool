// 捷克语可读性指标提取
import React from "react";
import GeneralIndicators from "../generalIndicators";
import ReadabilityIndicators from "../readabilityIndicators";
function Czech(props) {
  const { lgType, lgText, isSplitingText } = props;
  return (
    <>
      {/* 通用指标提取 */}
      <GeneralIndicators
        lgType={lgType}
        lgText={lgText}
        isSplitingText={isSplitingText}
      />
      {/* 特定语种处理 */}
      <ReadabilityIndicators
        lgType={lgType}
        lgText={lgText}
        isSplitingText={isSplitingText}
      />
    </>
  );
}

export default Czech;
