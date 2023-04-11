import { useState } from "react";
import { Button, Space } from "antd";
import GeneralIndicators from "../generalIndicators";

const ChineseBar = (props) => {
  const { lgType, lgText, isSplitingText } = props;
  return (
    <>
      {/* 功能选择按钮 */}
      <GeneralIndicators
        lgType={lgType}
        lgText={lgText}
        isSplitingText={isSplitingText}
      />
    </>
  );
};

export default ChineseBar;
