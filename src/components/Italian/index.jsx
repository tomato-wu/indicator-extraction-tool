// 意大利语可读性指标提取
import React from "react";
import GeneralIndicators from "../generalIndicators";
import ReadabilityIndicators from "../readabilityIndicators";
function Italian(props) {
  const { lgType, lgText } = props;
  return (
    <>
      {/* 通用指标提取 */}
      <GeneralIndicators lgType={lgType} lgText={lgText} />
      {/* 特定语种处理 */}
      <ReadabilityIndicators lgType={lgType} lgText={lgText} />
    </>
  );
}

export default Italian;
