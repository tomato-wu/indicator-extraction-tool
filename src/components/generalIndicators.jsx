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
  // getZipfApi,
  getAllTagApi,
} from "../utils/axios/api";
import { useState } from "react";
function GeneralIndicators(props) {
  const { lgType, lgText } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [typeValue, setTypeValue] = useState("");
  const [typeText, setTypeText] = useState("");

  const [allTagArr, setallTagArr] = useState([]);

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
    const getTTR = await getTTRApi({ lg_type: lgType, lg_text: lgText });
    setTypeValue(getTTR.data.value);
    setTypeText(getTTR.data.type);
    setIsModalOpen(true);
  };

  const R1 = async () => {
    const getR1 = await getR1Api({ lg_type: lgType, lg_text: lgText });
    setTypeValue(getR1.data.value);
    setTypeText(getR1.data.type);
    setIsModalOpen(true);
  };
  const RR = async () => {
    const getRR = await getRRApi({ lg_type: lgType, lg_text: lgText });
    setTypeValue(getRR.data.value);
    setTypeText(getRR.data.type);
    setIsModalOpen(true);
  };
  const RRMC = async () => {
    const getRRMC = await getRRMCApi({ lg_type: lgType, lg_text: lgText });
    setTypeValue(getRRMC.data.value);
    setTypeText(getRRMC.data.type);
    setIsModalOpen(true);
  };
  const SecondaryTC = async () => {
    const getSecondaryTC = await getSecondaryTCApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getSecondaryTC.data.value);
    setTypeText(getSecondaryTC.data.type);
    setIsModalOpen(true);
  };
  const TCValue = async () => {
    const getTCValue = await getTCValueApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getTCValue.data.value);
    setTypeText(getTCValue.data.type);
    setIsModalOpen(true);
  };
  const Activity = async () => {
    const getActivity = await getActivityApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getActivity.data.value);
    setTypeText(getActivity.data.type);
    setIsModalOpen(true);
  };
  const Descriptivity = async () => {
    const getDescriptivity = await getDescriptivityApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getDescriptivity.data.value);
    setTypeText(getDescriptivity.data.type);
    setIsModalOpen(true);
  };
  const lvalue = async () => {
    const getlvalue = await getlvalueApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getlvalue.data.value);
    setTypeText(getlvalue.data.type);
    setIsModalOpen(true);
  };
  const CurveLength = async () => {
    const getCurveLength = await getCurveLengthApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getCurveLength.data.value);
    setTypeText(getCurveLength.data.type);
    setIsModalOpen(true);
  };
  const lambda = async () => {
    const getLambda = await getLambdaApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getLambda.data.value);
    setTypeText(getLambda.data.type);
    setIsModalOpen(true);
  };
  const adjustModule = async () => {
    const getAdjustModule = await getAdjustModuleApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getAdjustModule.data.value);
    setTypeText(getAdjustModule.data.type);
    setIsModalOpen(true);
  };
  const Gini = async () => {
    const getGini = await getGiniApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getGini.data.value);
    setTypeText(getGini.data.type);
    setIsModalOpen(true);
  };
  const R4 = async () => {
    const getR4 = await getR4Api({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getR4.data.value);
    setTypeText(getR4.data.type);
    setIsModalOpen(true);
  };
  const Hpax = async () => {
    const getHapax = await getHapaxApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getHapax.data.value);
    setTypeText(getHapax.data.type);
    setIsModalOpen(true);
  };
  const writerView = async () => {
    const getWriterView = await getWriterViewApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getWriterView.data.value);
    setTypeText(getWriterView.data.type);
    setIsModalOpen(true);
  };
  const verbDistance = async () => {
    const getVerbDistance = await getVerbDistanceApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    setTypeValue(getVerbDistance.data.value);
    setTypeText(getVerbDistance.data.type);
    setIsModalOpen(true);
  };
  // const Zipf = async () => {
  //   const getZipf = await getZipfApi({
  //     lg_type: lgType,
  //     lg_text: lgText,
  //   });
  //   setTypeValue(getZipf.data.value);
  //   setTypeText(getZipf.data.type);
  //   setIsModalOpen(true);
  // };

  const GetAllTag = async () => {
    const getAllTag = await getAllTagApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    // setTypeValue(getAllTag.data.value);
    // setTypeText(getAllTag.data.type);
    // setIsModalOpen(true);
    console.log(getAllTag);
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
        {/* <Button type="primary" ghost onClick={Zipf}>
          齐普夫检验
        </Button> */}
        <Button type="primary" ghost danger onClick={GetAllTag}>
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
