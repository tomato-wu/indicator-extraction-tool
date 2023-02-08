import { Button, Space, Modal } from "antd";
import {
  getTTRApi,
  getR1Api,
  getRRApi,
  getRRMCApi,
  getTCValueApi,
  getSecondaryTCApi,
  getActivityApi,
  getDescriptivityApi,
  getlvalueApi,
  getCurveLengthApi,
  getLambdaApi,
  getAdjustModuleApi,
  getGiniApi,
  getR4Api,
  getHapaxApi,
  getWriterViewApi,
  getVerbDistanceApi,
  getZipfApi,
} from "../utils/axios/api";
import { useState } from "react";
function GeneralIndicators(props) {
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

  const TTR = async () => {
    console.log("触发");
    const getTTR = await getTTRApi({ lg_type: lgType, lg_text: lgText });
    setTypeValue(getTTR.data.value);
    setTypeText(getTTR.data.type);
    setIsModalOpen(true);
  };

  const R1 = async () => {
    console.log("触发");
    const getR1 = await getR1Api({ lg_type: lgType, lg_text: lgText });
    setTypeValue(getR1.data.value);
    setTypeText(getR1.data.type);
    setIsModalOpen(true);
  };
  const RR = async () => {
    console.log("触发");
    const getRR = await getRRApi({ lg_type: lgType, lg_text: lgText });
    setTypeValue(getRR.data.value);
    setTypeText(getRR.data.type);
    setIsModalOpen(true);
  };
  const RRMC = async () => {
    console.log("触发");
    const getRRMC = await getRRMCApi({ lg_type: lgType, lg_text: lgText });
    setTypeValue(getRRMC.data.value);
    setTypeText(getRRMC.data.type);
    setIsModalOpen(true);
  };
  const SecondaryTC = async () => {
    console.log("触发");
    const getSecondaryTC = await getSecondaryTCApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getSecondaryTC.data.value);
    setTypeText(getSecondaryTC.data.type);
    setIsModalOpen(true);
  };
  const TCValue = async () => {
    console.log("触发");
    const getTCValue = await getTCValueApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getTCValue.data.value);
    setTypeText(getTCValue.data.type);
    setIsModalOpen(true);
  };
  const Activity = async () => {
    console.log("触发");
    const getActivity = await getActivityApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getActivity.data.value);
    setTypeText(getActivity.data.type);
    setIsModalOpen(true);
  };
  const Descriptivity = async () => {
    console.log("触发");
    const getDescriptivity = await getDescriptivityApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getDescriptivity.data.value);
    setTypeText(getDescriptivity.data.type);
    setIsModalOpen(true);
  };
  const lvalue = async () => {
    console.log("触发");
    const getlvalue = await getlvalueApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getlvalue.data.value);
    setTypeText(getlvalue.data.type);
    setIsModalOpen(true);
  };
  const CurveLength = async () => {
    console.log("触发");
    const getCurveLength = await getCurveLengthApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getCurveLength.data.value);
    setTypeText(getCurveLength.data.type);
    setIsModalOpen(true);
  };
  const lambda = async () => {
    console.log("触发");
    const getLambda = await getLambdaApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getLambda.data.value);
    setTypeText(getLambda.data.type);
    setIsModalOpen(true);
  };
  const adjustModule = async () => {
    console.log("触发");
    const getAdjustModule = await getAdjustModuleApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getAdjustModule.data.value);
    setTypeText(getAdjustModule.data.type);
    setIsModalOpen(true);
  };
  const Gini = async () => {
    console.log("触发");
    const getGini = await getGiniApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getGini.data.value);
    setTypeText(getGini.data.type);
    setIsModalOpen(true);
  };
  const R4 = async () => {
    console.log("触发");
    const getR4 = await getR4Api({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getR4.data.value);
    setTypeText(getR4.data.type);
    setIsModalOpen(true);
  };
  const Hpax = async () => {
    console.log("触发");
    const getHapax = await getHapaxApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getHapax.data.value);
    setTypeText(getHapax.data.type);
    setIsModalOpen(true);
  };
  const writerView = async () => {
    console.log("触发");
    const getWriterView = await getWriterViewApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getWriterView.data.value);
    setTypeText(getWriterView.data.type);
    setIsModalOpen(true);
  };
  const verbDistance = async () => {
    console.log("触发");
    const getVerbDistance = await getVerbDistanceApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getVerbDistance.data.value);
    setTypeText(getVerbDistance.data.type);
    setIsModalOpen(true);
  };
  const Zipf = async () => {
    console.log("触发");
    const getZipf = await getZipfApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getZipf.data.value);
    setTypeText(getZipf.data.type);
    setIsModalOpen(true);
  };
  return (
    <>
      {/* 功能选择按钮 */}
      <Space size={[8, 16]} wrap>
        <span style={{ fontSize: "9px", color: "gray" }}>
          通用计量指标提取：
        </span>
        <Button type="primary" ghost onClick={TTR}>
          TTR 指标
        </Button>
        <Button type="primary" ghost onClick={R1}>
          R1 指标
        </Button>
        <Button type="primary" ghost onClick={RR}>
          RR 指标
        </Button>
        <Button type="primary" ghost onClick={RRMC}>
          RRMC 指标
        </Button>
        <Button type="primary" ghost onClick={TCValue}>
          TCValue 指标
        </Button>
        <Button type="primary" ghost onClick={SecondaryTC}>
          SecondaryTC 指标
        </Button>
        <Button type="primary" ghost onClick={Activity}>
          Activity 指标
        </Button>
        <Button type="primary" ghost onClick={Descriptivity}>
          Descriptivity 指标
        </Button>
        <Button type="primary" ghost onClick={lvalue}>
          lvalue 指标
        </Button>
        <Button type="primary" ghost onClick={CurveLength}>
          CurveLength 指标
        </Button>
        <Button type="primary" ghost onClick={lambda}>
          lambda 指标
        </Button>
        <Button type="primary" ghost onClick={adjustModule}>
          adjustModule 指标
        </Button>
        <Button type="primary" ghost onClick={Gini}>
          Gini 系数
        </Button>
        <Button type="primary" ghost onClick={R4}>
          R4 指标
        </Button>
        <Button type="primary" ghost onClick={Hpax}>
          Hpax Percentage
        </Button>
        <Button type="primary" ghost onClick={writerView}>
          作者视野
        </Button>
        <Button type="primary" ghost onClick={verbDistance}>
          动词间距
        </Button>
        <Button type="primary" ghost onClick={Zipf}>
          齐普夫检验
        </Button>
        <Button type="primary" ghost danger>
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

export default GeneralIndicators;
