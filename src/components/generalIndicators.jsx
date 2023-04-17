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
  getAllTagApi,
  getDictsApi,
  getWordsApi,
  getHPointApi,
  getEntropyApi,
  exportExcelApi,
} from "../utils/axios/api";
import { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";

function GeneralIndicators(props) {
  const { lgType, lgText, requireSplit } = props;

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
    const getTTR = await getTTRApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getTTRObj = getTTR.data;
    console.log(getTTRObj);
    setObj({ ...getTTRObj });
    setIsModalOpen(true);
  };

  const R1 = async () => {
    const getR1 = await getR1Api({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getR1Obj = getR1.data;
    setObj({ ...getR1Obj });
    setIsModalOpen(true);
  };
  const RR = async () => {
    const getRR = await getRRApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getRRObj = getRR.data;
    setObj({ ...getRRObj });
    setIsModalOpen(true);
  };
  const RRMC = async () => {
    const getRRMC = await getRRMCApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getRRMCObj = getRRMC.data;
    setObj({ ...getRRMCObj });
    setIsModalOpen(true);
  };
  const SecondaryTC = async () => {
    const getSecondaryTC = await getSecondaryTCApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getSecondaryTCObj = getSecondaryTC.data;
    setObj({ ...getSecondaryTCObj });
    setIsModalOpen(true);
  };
  const TCValue = async () => {
    const getTCValue = await getTCValueApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getTCValueObj = getTCValue.data;
    setObj({ ...getTCValueObj });
    setIsModalOpen(true);
  };
  const Activity = async () => {
    const getActivity = await getActivityApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getActivityObj = getActivity.data;
    setObj({ ...getActivityObj });
    setIsModalOpen(true);
  };
  const Descriptivity = async () => {
    const getDescriptivity = await getDescriptivityApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getDescriptivityObj = getDescriptivity.data;
    setObj({ ...getDescriptivityObj });
    setIsModalOpen(true);
  };
  const lvalue = async () => {
    const getlvalue = await getlvalueApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getlvalueObj = getlvalue.data;
    setObj({ ...getlvalueObj });
    setIsModalOpen(true);
  };
  const CurveLength = async () => {
    const getCurveLength = await getCurveLengthApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getCurveLengthObj = getCurveLength.data;
    setObj({ ...getCurveLengthObj });
    setIsModalOpen(true);
  };
  const lambda = async () => {
    const getLambda = await getLambdaApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getLambdaObj = getLambda.data;
    setObj({ ...getLambdaObj });
    setIsModalOpen(true);
  };
  const adjustModule = async () => {
    const getAdjustModule = await getAdjustModuleApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getAdjustModuleObj = getAdjustModule.data;
    setObj({ ...getAdjustModuleObj });
    setIsModalOpen(true);
  };
  const Gini = async () => {
    const getGini = await getGiniApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getGiniObj = getGini.data;
    setObj({ ...getGiniObj });
    setIsModalOpen(true);
  };
  const R4 = async () => {
    const getR4 = await getR4Api({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getR4Obj = getR4.data;
    setObj({ ...getR4Obj });
    setIsModalOpen(true);
  };
  const Hpax = async () => {
    const getHapax = await getHapaxApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getHapaxObj = getHapax.data;
    setObj({ ...getHapaxObj });
    setIsModalOpen(true);
  };
  const writerView = async () => {
    const getWriterView = await getWriterViewApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getWriterViewObj = getWriterView.data;
    setObj({ ...getWriterViewObj });
    setIsModalOpen(true);
  };
  const verbDistance = async () => {
    const getVerbDistance = await getVerbDistanceApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getVerbDistanceObj = getVerbDistance.data;
    setObj({ ...getVerbDistanceObj });
    setIsModalOpen(true);
  };

  const Words = async () => {
    const getWords = await getWordsApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getVerbDistanceObj = getWords.data;
    setObj({ ...getVerbDistanceObj });
    setIsModalOpen(true);
  };

  const Dicts = async () => {
    const getDicts = await getDictsApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getVerbDistanceObj = getDicts.data;
    setObj({ ...getVerbDistanceObj });
    setIsModalOpen(true);
  };

  const Entropy = async () => {
    const getEntropy = await getEntropyApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getVerbDistanceObj = getEntropy.data;
    setObj({ ...getVerbDistanceObj });
    setIsModalOpen(true);
  };

  const HPoint = async () => {
    const getHPoint = await getHPointApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getVerbDistanceObj = getHPoint.data;
    setObj({ ...getVerbDistanceObj });
    setIsModalOpen(true);
  };

  const GetAllTag = async () => {
    const getAllTag = await getAllTagApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getAllTagObj = getAllTag.data;
    console.log(getAllTagObj);
    setObj({ ...getAllTagObj });
    setIsModalOpen(true);
  };
  // 导出下载
  const exportDownload = async (hash_value) => {
    console.log(hash_value);
    const getExportDownload = await exportExcelApi({
      hash_value: hash_value,
    });
    console.log("返回的值");
    console.log(getExportDownload);
    downloadExcelFile(getExportDownload);
  };
  function downloadExcelFile(binary) {
    const blob = new Blob([binary], { type: "application/vnd.ms-excel" }); // 创建一个 Blob 对象，将二进制数据转换为文件对象
    const url = URL.createObjectURL(blob); // 创建一个 URL 对象，指向该 Blob 对象
    const a = document.createElement("a"); // 创建一个 <a> 标签
    a.href = url; // 将 URL 对象赋值给 <a> 标签的 href 属性
    a.download = "计量指标.xlsx"; // 指定下载文件的名称
    window.document.body.append(a); //将 <a> 标签添加到文档中
    a.click(); // 模拟点击 <a> 标签以下载文件
    document.body.removeChild(a); // 从文档中删除 <a> 标签
    window.URL.revokeObjectURL(blob); // 释放 URL 对象
  }
  return (
    <>
      {/* 功能选择按钮 */}
      <Space size={[8, 16]} wrap>
        <span style={{ fontSize: "9px", color: "gray" }}>通用计量提取：</span>
        <Button type="primary" ghost onClick={TTR}>
          TTR（型例比）
        </Button>
        <Button type="primary" ghost onClick={R1}>
          R1（词汇丰富度）
        </Button>
        <Button type="primary" ghost onClick={RR}>
          RR（重复率）
        </Button>
        <Button type="primary" ghost onClick={RRMC}>
          RRMC（相对重复率）
        </Button>
        <Button type="primary" ghost onClick={TCValue}>
          TC（主题集中度）
        </Button>
        <Button type="primary" ghost onClick={SecondaryTC}>
          SecondaryTC（次主题集中度）
        </Button>
        <Button type="primary" ghost onClick={Activity}>
          Activity（活动度）
        </Button>
        <Button type="primary" ghost onClick={Descriptivity}>
          Descriptivity（描写度）
        </Button>
        <Button type="primary" ghost onClick={lvalue}>
          L（文本中词的秩频分布的欧氏长度）
        </Button>
        <Button type="primary" ghost onClick={CurveLength}>
          Curve Length R Index（文本中词的秩频分布的R指数）
        </Button>
        <Button type="primary" ghost onClick={lambda}>
          A（文本的Lambda值）
        </Button>
        <Button type="primary" ghost onClick={adjustModule}>
          Adjusted Module（校正模数）
        </Button>
        <Button type="primary" ghost onClick={Gini}>
          G（基尼系数）
        </Button>
        <Button type="primary" ghost onClick={R4}>
          R4（基尼系数G的一个补数）
        </Button>
        <Button type="primary" ghost onClick={Hpax}>
          Hpax Percentage（单现词）
        </Button>
        <Button type="primary" ghost onClick={writerView}>
          Writer's View（作者视野）
        </Button>
        <Button type="primary" ghost onClick={verbDistance}>
          Verb Distance（动词距离）
        </Button>
        {/* ///////////////////////////////////////////////////////////////// */}
        <Button type="primary" ghost onClick={Entropy}>
          Entropy（文本熵）
        </Button>
        <Button type="primary" ghost onClick={HPoint}>
          HPoint（h点）
        </Button>
        <Button type="primary" ghost onClick={Words}>
          Words（总词数提取）
        </Button>
        <Button type="primary" ghost onClick={Dicts}>
          Dicts（词典数提取）
        </Button>
        <Button type="primary" ghost danger onClick={GetAllTag}>
          一键提取
        </Button>
        {/* 展示数据的弹窗 */}
        <Modal
          open={isModalOpen}
          width={1000}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Descriptions
            title="计量指标提取"
            bordered
            style={{ marginTop: "20px" }}
          >
            {Object.keys(obj).map((item) => {
              return (
                <>
                  {item !== "hash_value" && (
                    <Descriptions.Item label={item} span={2} key={item}>
                      {obj[item]}
                    </Descriptions.Item>
                  )}
                  <br />
                </>
              );
            })}
          </Descriptions>
          {/*导出下载  */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            {Object.keys(obj).map((item) => {
              return (
                <>
                  {item === "hash_value" && (
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      size="large"
                      style={{ marginTop: "20px" }}
                      onClick={() => exportDownload(obj["hash_value"])}
                    >
                      导出下载
                    </Button>
                  )}
                </>
              );
            })}
          </div>
        </Modal>
      </Space>
    </>
  );
}

export default GeneralIndicators;
