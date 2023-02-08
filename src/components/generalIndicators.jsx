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

  const handleOk = () => {
    setIsModalOpen(false);
    setTypeValue(" ");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setTypeValue(" ");
  };

  const TTR = async () => {
    console.log("触发");
    const getTTR = await getTTRApi({ lg_type: lgType, lg_text: lgText });
    console.log(getTTR.data.value);
    setTypeValue(getTTR.data.value);
    setIsModalOpen(true);
  };

  const R1 = async () => {
    console.log("触发");
    const getR1 = await getR1Api({ lg_type: lgType, lg_text: lgText });
    console.log(getR1);
    setIsModalOpen(true);
  };
  const RR = async () => {
    console.log("触发");
    const getRR = await getRRApi({ lg_type: lgType, lg_text: lgText });
    console.log(getRR);
    setIsModalOpen(true);
  };
  const RRMC = async () => {
    console.log("触发");
    const getRRMC = await getRRMCApi({ lg_type: lgType, lg_text: lgText });
    console.log(getRRMC);
    setIsModalOpen(true);
  };
  const SecondaryTC = async () => {
    console.log("触发");
    const getSecondaryTC = await getSecondaryTCApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getSecondaryTC);
    setIsModalOpen(true);
  };
  const TCValue = async () => {
    console.log("触发");
    const getTCValue = await getTCValueApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getTCValue);
    setIsModalOpen(true);
  };
  const Activity = async () => {
    console.log("触发");
    const getActivity = await getActivityApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getActivity);
    setIsModalOpen(true);
  };
  const Descriptivity = async () => {
    console.log("触发");
    const getDescriptivity = await getDescriptivityApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getDescriptivity);
    setIsModalOpen(true);
  };
  const lvalue = async () => {
    console.log("触发");
    const getlvalue = await getlvalueApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getlvalue);
    setIsModalOpen(true);
  };
  const CurveLength = async () => {
    console.log("触发");
    const getCurveLength = await getCurveLengthApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getCurveLength);
    setIsModalOpen(true);
  };
  const lambda = async () => {
    console.log("触发");
    const getLambda = await getLambdaApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getLambda);
    setIsModalOpen(true);
  };
  const adjustModule = async () => {
    console.log("触发");
    const getAdjustModule = await getAdjustModuleApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getAdjustModule);
    setIsModalOpen(true);
  };
  const Gini = async () => {
    console.log("触发");
    const getGini = await getGiniApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getGini);
    setIsModalOpen(true);
  };
  const R4 = async () => {
    console.log("触发");
    const getR4 = await getR4Api({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getR4);
    setIsModalOpen(true);
  };
  const Hpax = async () => {
    console.log("触发");
    const getHapax = await getHapaxApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getHapax);
    setIsModalOpen(true);
  };
  const writerView = async () => {
    console.log("触发");
    const getWriterView = await getWriterViewApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getWriterView);
    setIsModalOpen(true);
  };
  const verbDistance = async () => {
    console.log("触发");
    const getVerbDistance = await getVerbDistanceApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getVerbDistance);
    setIsModalOpen(true);
  };
  const Zipf = async () => {
    console.log("触发");
    const getZipf = await getZipfApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    console.log(getZipf);
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
          <p>{typeValue}</p>
        </Modal>
      </Space>
    </>
  );
}

export default GeneralIndicators;
