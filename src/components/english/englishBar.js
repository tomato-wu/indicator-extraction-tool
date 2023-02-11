import React, { useState } from "react";
import { Button, Space, Modal } from "antd";
import GeneralIndicators from "../generalIndicators";
import {
  getARIApi,
  getARIGradeLevelsApi,
  getRIXApi,
  getFlsechKincaidGradeApi,
  getGunningFogApi,
  getSmogApi,
  getColemanLiauIndexApi,
  getDaleChallIndexApi,
  getLWIndexApi,
} from "../../utils/axios/englishReadabilityApi.js";

function EnglishBar(props) {
  const { lgType, lgText } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [typeValue, setTypeValue] = useState("");
  const [typeText, setTypeText] = useState("");

  const handleOk = () => {
    setIsModalOpen(false);
    setTypeValue(" ");
    setTypeText("");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setTypeValue(" ");
    setTypeText("");
  };

  const ARI = async () => {
    const getARI = await getARIApi({ lg_type: lgType, lg_text: lgText });
    setTypeValue(getARI.data.value);
    setTypeText(getARI.data.type);
    setIsModalOpen(true);
  };

  const ARIGradeLevels = async () => {
    const getARIGradeLevels = await getARIGradeLevelsApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getARIGradeLevels.data.value);
    setTypeText(getARIGradeLevels.data.type);
    setIsModalOpen(true);
  };
  const RIX = async () => {
    const getRIX = await getRIXApi({ lg_type: lgType, lg_text: lgText });
    setTypeValue(getRIX.data.value);
    setTypeText(getRIX.data.type);
    setIsModalOpen(true);
  };
  const FlsechKincaidGrade = async () => {
    const getFlsechKincaidGrade = await getFlsechKincaidGradeApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getFlsechKincaidGrade.data.value);
    setTypeText(getFlsechKincaidGrade.data.type);
    setIsModalOpen(true);
  };
  const GunningFog = async () => {
    const getGunningFog = await getGunningFogApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getGunningFog.data.value);
    setTypeText(getGunningFog.data.type);
    setIsModalOpen(true);
  };
  const Smog = async () => {
    const getSmog = await getSmogApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getSmog.data.value);
    setTypeText(getSmog.data.type);
    setIsModalOpen(true);
  };
  const ColemanLiauIndex = async () => {
    const getColemanLiauIndex = await getColemanLiauIndexApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getColemanLiauIndex.data.value);
    setTypeText(getColemanLiauIndex.data.type);
    setIsModalOpen(true);
  };
  const DaleChallIndex = async () => {
    const getDaleChallIndex = await getDaleChallIndexApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getDaleChallIndex.data.value);
    setTypeText(getDaleChallIndex.data.type);
    setIsModalOpen(true);
  };
  const LWIndex = async () => {
    const getLWIndex = await getLWIndexApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getLWIndex.data.value);
    setTypeText(getLWIndex.data.type);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* 通用指标提取 */}
      <GeneralIndicators lgType={lgType} lgText={lgText} />
      {/* 特定语种处理 */}
      <Space size={[8, 16]} wrap style={{ marginTop: "15px" }}>
        <span style={{ fontSize: "9px", color: "gray" }}>
          英语可读性指标提取：
        </span>
        <Button type="primary" ghost onClick={ARI}>
          ARI
        </Button>
        <Button type="primary" ghost onClick={ARIGradeLevels}>
          ARIGradeLevels
        </Button>
        <Button type="primary" ghost onClick={RIX}>
          RIX
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
        <Button type="primary" ghost danger onClick={ARI}>
          一键提取
        </Button>

        {/* 展示数据的弹窗 */}
        <Modal
          title="指标提取"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            {typeText} -- {typeValue}
          </p>
        </Modal>
      </Space>
    </>
  );
}

export default EnglishBar;
