import { Button, Space, Modal, Descriptions } from "antd";
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

  const [obj, setObj] = useState({});

  const handleOk = () => {
    setObj({});
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setObj({});
    setIsModalOpen(false);
  };

  const TTR = async () => {
    const getTTR = await getTTRApi({ lg_type: lgType, lg_text: lgText });
    const getTTRObj = getTTR.data;
    setObj({ ...getTTRObj });
    setIsModalOpen(true);
  };

  const R1 = async () => {
    const getR1 = await getR1Api({ lg_type: lgType, lg_text: lgText });
    const getR1Obj = getR1.data;
    setObj({ ...getR1Obj });
    setIsModalOpen(true);
  };
  const RR = async () => {
    const getRR = await getRRApi({ lg_type: lgType, lg_text: lgText });
    const getRRObj = getRR.data;
    setObj({ ...getRRObj });
    setIsModalOpen(true);
  };
  const RRMC = async () => {
    const getRRMC = await getRRMCApi({ lg_type: lgType, lg_text: lgText });
    const getRRMCObj = getRRMC.data;
    setObj({ ...getRRMCObj });
    setIsModalOpen(true);
  };
  const SecondaryTC = async () => {
    const getSecondaryTC = await getSecondaryTCApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getSecondaryTCObj = getSecondaryTC.data;
    setObj({ ...getSecondaryTCObj });
    setIsModalOpen(true);
  };
  const TCValue = async () => {
    const getTCValue = await getTCValueApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getTCValueObj = getTCValue.data;
    setObj({ ...getTCValueObj });
    setIsModalOpen(true);
  };
  const Activity = async () => {
    const getActivity = await getActivityApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getActivityObj = getActivity.data;
    setObj({ ...getActivityObj });
    setIsModalOpen(true);
  };
  const Descriptivity = async () => {
    const getDescriptivity = await getDescriptivityApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getDescriptivityObj = getDescriptivity.data;
    setObj({ ...getDescriptivityObj });
    setIsModalOpen(true);
  };
  const lvalue = async () => {
    const getlvalue = await getlvalueApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getlvalueObj = getlvalue.data;
    setObj({ ...getlvalueObj });
    setIsModalOpen(true);
  };
  const CurveLength = async () => {
    const getCurveLength = await getCurveLengthApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getCurveLengthObj = getCurveLength.data;
    setObj({ ...getCurveLengthObj });
    setIsModalOpen(true);
  };
  const lambda = async () => {
    const getLambda = await getLambdaApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getLambdaObj = getLambda.data;
    setObj({ ...getLambdaObj });
    setIsModalOpen(true);
  };
  const adjustModule = async () => {
    const getAdjustModule = await getAdjustModuleApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getAdjustModuleObj = getAdjustModule.data;
    setObj({ ...getAdjustModuleObj });
    setIsModalOpen(true);
  };
  const Gini = async () => {
    const getGini = await getGiniApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getGiniObj = getGini.data;
    setObj({ ...getGiniObj });
    setIsModalOpen(true);
  };
  const R4 = async () => {
    const getR4 = await getR4Api({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getR4Obj = getR4.data;
    setObj({ ...getR4Obj });
    setIsModalOpen(true);
  };
  const Hpax = async () => {
    const getHapax = await getHapaxApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getHapaxObj = getHapax.data;
    setObj({ ...getHapaxObj });
    setIsModalOpen(true);
  };
  const writerView = async () => {
    const getWriterView = await getWriterViewApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getWriterViewObj = getWriterView.data;
    setObj({ ...getWriterViewObj });
    setIsModalOpen(true);
  };
  const verbDistance = async () => {
    const getVerbDistance = await getVerbDistanceApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getVerbDistanceObj = getVerbDistance.data;
    setObj({ ...getVerbDistanceObj });
    setIsModalOpen(true);
  };

  const GetAllTag = async () => {
    const getAllTag = await getAllTagApi({
      lg_type: lgType,
      lg_text: lgText,
    });
    const getAllTagObj = getAllTag.data;
    setObj({ ...getAllTagObj });
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

        <Button type="primary" ghost danger onClick={GetAllTag}>
          一键提取
        </Button>
        {/* 展示数据的弹窗 */}
        <Modal
          title="指标提取"
          open={isModalOpen}
          width={1000}
          onOk={handleOk}
          onCancel={handleCancel}
        >
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

export default GeneralIndicators;
