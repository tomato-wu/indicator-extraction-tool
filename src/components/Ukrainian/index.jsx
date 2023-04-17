import React from "react";
import GeneralIndicators from "../generalIndicators";
import ReadabilityIndicators from "../readabilityIndicators";
function Ukrainian(props) {
  const { lgType, lgText, requireSplit } = props;
  return (
    <>
      {/* 通用指标提取 */}
      <GeneralIndicators
        lgType={lgType}
        lgText={lgText}
        requireSplit={requireSplit}
      />
      {/* 特定语种处理 */}
      <ReadabilityIndicators
        lgType={lgType}
        lgText={lgText}
        requireSplit={requireSplit}
      />
    </>
  );
}

export default Ukrainian;
