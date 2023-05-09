import { Button, Space, Modal, Descriptions } from "antd";
import { useState } from "react";

import {
  getFeature18,
  getFeature22,
} from "../../utils/axios/chineseReadabilityApi.js";

function ChineseReadability(props) {
  const { lgText } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [obj, setObj] = useState({});

  const handleOk = () => {
    setObj({});
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setObj({});
    setIsModalOpen(false);
  };

  const Feature18 = async () => {
    const getFeature18Data = await getFeature18({
      raw_text: lgText,
    });
    const getFeature18Obj = getFeature18Data.data;
    setObj({ ...getFeature18Obj });
    setIsModalOpen(true);
  };

  const Feature22 = async () => {
    const getFeature22Data = await getFeature22({
      raw_text: lgText,
    });
    const getFeature22Obj = getFeature22Data.data;
    setObj({ ...getFeature22Obj });
    setIsModalOpen(true);
  };

  return (
    <>
      {/* 特定语种处理 */}
      <Space size={[8, 16]} wrap style={{ marginTop: "15px" }}>
        <span style={{ fontSize: "9px", color: "gray" }}>中文可读性指标：</span>
        <Button type="primary" ghost onClick={Feature18}>
          基于18个特征文本可读性
        </Button>
        <Button type="primary" ghost onClick={Feature22}>
          基于22个特征文本可读性
        </Button>
        {/* 展示数据的弹窗 */}
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Descriptions title="计量指标提取" bordered>
            {Object.keys(obj).map((item) => {
              return (
                <>
                  <Descriptions.Item label={item} span={2} key={item}>
                    {obj[item]}
                  </Descriptions.Item>
                  <br />
                </>
              );
            })}
          </Descriptions>
        </Modal>
      </Space>
    </>
  );
}

export default ChineseReadability;
