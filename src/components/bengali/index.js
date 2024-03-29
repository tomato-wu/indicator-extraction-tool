//孟加拉语
import { useState } from "react";
import { Button, Space } from "antd";
import GeneralIndicators from "../generalIndicators";

const Bengali = (props) => {
  const { lgType, lgText } = props;
  return (
    <>
      <GeneralIndicators lgType={lgType} lgText={lgText} />
    </>
  );
};

export default Bengali;
