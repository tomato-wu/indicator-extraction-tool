import { Button, Space, Modal, Descriptions } from "antd";
import { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";

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
} from "../utils/axios/englishReadabilityApi.js";
import { exportExcelApi } from "../utils/axios/api";

function ReadabilityIndicators(props) {
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

  const ARI = async () => {
    const getARI = await getARIApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getARIObj = getARI.data;
    setObj({ ...getARIObj });
    setIsModalOpen(true);
  };

  const RIX = async () => {
    const getRIX = await getRIXApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getRIXObj = getRIX.data;
    setObj({ ...getRIXObj });
    setIsModalOpen(true);
  };
  const FlsechKincaidGrade = async () => {
    const getFlsechKincaidGrade = await getFlsechKincaidGradeApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getFlsechKincaidGradeObj = getFlsechKincaidGrade.data;
    setObj({ ...getFlsechKincaidGradeObj });
    setIsModalOpen(true);
  };
  const GunningFog = async () => {
    const getGunningFog = await getGunningFogApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getGunningFogObj = getGunningFog.data;
    setObj({ ...getGunningFogObj });
    setIsModalOpen(true);
  };
  const Smog = async () => {
    const getSmog = await getSmogApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getSmogObj = getSmog.data;
    setObj({ ...getSmogObj });
    setIsModalOpen(true);
  };
  const ColemanLiauIndex = async () => {
    const getColemanLiauIndex = await getColemanLiauIndexApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getColemanLiauIndexObj = getColemanLiauIndex.data;
    setObj({ ...getColemanLiauIndexObj });
    setIsModalOpen(true);
  };
  const DaleChallIndex = async () => {
    const getDaleChallIndex = await getDaleChallIndexApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getDaleChallIndexObj = getDaleChallIndex.data;
    setObj({ ...getDaleChallIndexObj });
    setIsModalOpen(true);
  };
  const FleschReading = async () => {
    const getFleschReading = await getFleschReadingApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getDaleChallIndexObj = getFleschReading.data;
    setObj({ ...getDaleChallIndexObj });
    setIsModalOpen(true);
  };
  const LWIndex = async () => {
    const getLWIndex = await getLWIndexApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getLWIndexObj = getLWIndex.data;
    setObj({ ...getLWIndexObj });
    setIsModalOpen(true);
  };

  const AllTags = async () => {
    const getAllTags = await getAllTagsApi({
      lg_type: lgType,
      lg_text: lgText,
      requireSplit: requireSplit === "undefined" ? false : true,
    });
    const getAllTagsObj = getAllTags.data;
    setObj({ ...getAllTagsObj });
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
      {/* 特定语种处理 */}
      <Space size={[8, 16]} wrap style={{ marginTop: "15px" }}>
        <span style={{ fontSize: "9px", color: "gray" }}>可读性指标提取：</span>
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

export default ReadabilityIndicators;
