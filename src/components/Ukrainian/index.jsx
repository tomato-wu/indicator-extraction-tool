// 乌克兰语可读性指标提取
import React, { useState } from "react";
import { Button, Space, Modal, Descriptions } from "antd";
import GeneralIndicators from "../generalIndicators";
import {
  getARIApi,
  getRIXApi,
  getFlsechKincaidGradeApi,
  getGunningFogApi,
  getSmogApi,
  getColemanLiauIndexApi,
  getDaleChallIndexApi,
  getLWIndexApi,
  getFleschReadingApi,
  getAllTagsApi,
} from "../../utils/axios/englishReadabilityApi.js";

function Ukrainian(props) {
  const { lgType, lgText, isSplitingText } = props;
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

  const ARI = async () => {
    const getARI = await getARIApi({
      lg_type: lgType,
      lg_text: lgText,
      isSplitingText: isSplitingText,
    });
    const getARIObj = getARI.data;
    setObj({ ...getARIObj });
    setIsModalOpen(true);
  };

  const RIX = async () => {
    const getRIX = await getRIXApi({
      lg_type: lgType,
      lg_text: lgText,
      isSplitingText: isSplitingText,
    });
    const getRIXObj = getRIX.data;
    setObj({ ...getRIXObj });
    setIsModalOpen(true);
  };
  const FlsechKincaidGrade = async () => {
    const getFlsechKincaidGrade = await getFlsechKincaidGradeApi({
      lg_type: lgType,
      lg_text: lgText,
      isSplitingText: isSplitingText,
    });
    const getFlsechKincaidGradeObj = getFlsechKincaidGrade.data;
    setObj({ ...getFlsechKincaidGradeObj });
    setIsModalOpen(true);
  };
  const GunningFog = async () => {
    const getGunningFog = await getGunningFogApi({
      lg_type: lgType,
      lg_text: lgText,
      isSplitingText: isSplitingText,
    });
    const getGunningFogObj = getGunningFog.data;
    setObj({ ...getGunningFogObj });
    setIsModalOpen(true);
  };
  const Smog = async () => {
    const getSmog = await getSmogApi({
      lg_type: lgType,
      lg_text: lgText,
      isSplitingText: isSplitingText,
    });
    const getSmogObj = getSmog.data;
    setObj({ ...getSmogObj });
    setIsModalOpen(true);
  };
  const ColemanLiauIndex = async () => {
    const getColemanLiauIndex = await getColemanLiauIndexApi({
      lg_type: lgType,
      lg_text: lgText,
      isSplitingText: isSplitingText,
    });
    const getColemanLiauIndexObj = getColemanLiauIndex.data;
    setObj({ ...getColemanLiauIndexObj });
    setIsModalOpen(true);
  };
  const DaleChallIndex = async () => {
    const getDaleChallIndex = await getDaleChallIndexApi({
      lg_type: lgType,
      lg_text: lgText,
      isSplitingText: isSplitingText,
    });
    const getDaleChallIndexObj = getDaleChallIndex.data;
    setObj({ ...getDaleChallIndexObj });
    setIsModalOpen(true);
  };
  const FleschReading = async () => {
    const getFleschReading = await getFleschReadingApi({
      lg_type: lgType,
      lg_text: lgText,
      isSplitingText: isSplitingText,
    });
    const getDaleChallIndexObj = getFleschReading.data;
    setObj({ ...getDaleChallIndexObj });
    setIsModalOpen(true);
  };
  const LWIndex = async () => {
    const getLWIndex = await getLWIndexApi({
      lg_type: lgType,
      lg_text: lgText,
      isSplitingText: isSplitingText,
    });
    const getLWIndexObj = getLWIndex.data;
    setObj({ ...getLWIndexObj });
    setIsModalOpen(true);
  };

  const AllTags = async () => {
    const getAllTags = await getAllTagsApi({
      lg_type: lgType,
      lg_text: lgText,
      isSplitingText: isSplitingText,
    });
    const getAllTagsObj = getAllTags.data;
    setObj({ ...getAllTagsObj });
    setIsModalOpen(true);
  };

  return (
    <>
      {/* 功能选择按钮 */}
      <GeneralIndicators
        lgType={lgType}
        lgText={lgText}
        isSplitingText={isSplitingText}
      />
      {/* 特定语种处理 */}
      <Space size={[8, 16]} wrap style={{ marginTop: "15px" }}>
        <span style={{ fontSize: "9px", color: "gray" }}>
          乌克兰语可读性指标提取：
        </span>
        <Button type="primary" ghost onClick={ARI}>
          ARI
        </Button>
        <Button type="primary" ghost onClick={RIX}>
          RIX
        </Button>
        <Button type="primary" ghost onClick={FleschReading}>
          FleschReading
        </Button>
        <Button type="primary" ghost onClick={FlsechKincaidGrade}>
          FlsechKincaidGrade
        </Button>

        <Button type="primary" ghost onClick={GunningFog}>
          GunningFog
        </Button>
        <Button type="primary" ghost onClick={LWIndex}>
          LWIndex
        </Button>
        <Button type="primary" ghost onClick={Smog}>
          Smog
        </Button>
        <Button type="primary" ghost onClick={ColemanLiauIndex}>
          ColemanLiauIndex
        </Button>
        <Button type="primary" ghost onClick={DaleChallIndex}>
          DaleChallIndex
        </Button>
        <Button type="primary" ghost danger onClick={AllTags}>
          一键提取
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

export default Ukrainian;
