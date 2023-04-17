// 缅甸/柬埔寨（高棉语） ：
import { useState } from "react";
import { Button, Space, Checkbox } from "antd";
import GeneralIndicators from "../generalIndicators";

const BurmeseBar = (props) => {
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
      {/* 功能选择按钮 */}
      <GeneralIndicators
        lgType={lgType}
        lgText={lgText}
        requireSplit={requireSplit}
      />
      {/* 特定语种指标提取 */}
      {/* <Space size={[8, 16]} wrap style={{ marginTop: "15px" }}>
        <span style={{ fontSize: "9px", color: "gray" }}>
          缅甸/柬埔寨（高棉语） ：
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
};

export default BurmeseBar;
