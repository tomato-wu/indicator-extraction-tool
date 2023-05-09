//希腊语
import React from "react";
import GeneralIndicators from "../generalIndicators";
function Greek(props) {
  const { lgType, lgText } = props;
  return (
    <>
      {/* 通用指标提取 */}
      <GeneralIndicators lgType={lgType} lgText={lgText} />
    </>
  );
}

export default Greek;
