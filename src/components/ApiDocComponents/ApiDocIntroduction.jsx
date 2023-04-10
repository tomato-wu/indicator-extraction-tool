import React, { useState, useEffect } from "react";
import { Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

const PersonCardBox = {
  width: "100%",
  height: "100%",
  padding: "20px",
  backgroundColor: "#FDFDFD",
};

const ApiDocIntroduction = () => {
  return (
    <>
      <div style={PersonCardBox}>
        <Title level={3}>接入服务介绍</Title>

        <Title level={4}>一，我们的平台能做什么？</Title>
        <Paragraph>
          计量语言学是现代语言学的一个分支，通过利用统计学方法来研究和描述自然语言的频率和分布，形成系统的语言理论。
          计量语言学研究需要对大量真实的语料进行精确的测量、观察、模拟、建模和解释。需要各种指标来辅助研究，
          而计量语言学指标提取是计量语言学研究中不可或缺的一环，它可以从语言文本中提取出反映其特征和规律的数值或图形，
          如字母频率分布、词汇丰富度、文本可读性等。这些指标可以帮助计量语言学研究者进行定量分析、比较、评价和预测，
          为计量语言学理论的建立和验证提供依据。
        </Paragraph>
        <Paragraph>
          为了方便计量语言学相关学者和研究人员进行各种计量指标的提取和分析，本项目开发了一个计量指标提取工具。该工具能够对输入的文本进行语种识别，并根据不同语言的特点进行相应的计量指标提取；
          支持多种常用的计量指标，如词汇丰富度、句子复杂度、可读性等；支持多种常见的语言，如中文、英文、法文、德文等；支持文档上传处理，并能够解析上传文档中的语种。
        </Paragraph>
        <Paragraph>
          本软件是面向计量语言学学科
          构建的指标提取工具，并且面向多个不同的语种对于输入的语言文本，
          软件能够识别不同的语种，并且能够根据不同语种进行计里指标的提取，用于辅助计量语言学的研究，还支持历史记录，指标词典，文档处理等特色功能。为计量语言学相关的学者和研究人员提供帮助。
        </Paragraph>

        <Paragraph>
          为方便外部的接入，我们对平台所用到的一些接口进行了开放，开发者们可以通过开发者文档接入我们的Api进行二次开发和使用。
        </Paragraph>
        <Title level={4}>二，平台提供哪些服务</Title>
        <Title level={5}>（1）语种识别API接入</Title>
        <Paragraph>
          系统支持多语种处理，支持的语种多达24种，包括阿拉伯语、孟加拉语、缅甸语、汉语、英语、波斯语、印尼语、日语、柬埔寨语、韩语、老挝语、葡萄牙语、西班牙语、菲律宾语、泰语、土耳其语、越南语、捷克语、法语、德语、俄语、乌克兰语、意大利语、瑞典语。
        </Paragraph>
        <Title level={5}>（2）通用指标API接入</Title>
        <Paragraph>
          系统支持的通用计量指标也多达21种，如TTR（型例比）， R1（词汇丰富度），
          RR（重复率），RRMC（相对重复率），
          TC（主题集中度），SecondaryTC（次主题集中度）， Activity（活动度），
          Descriptivity（描写度），L（文本中词的秩频分布的欧氏长度），Curve
          Length R Index（文本中词的秩频分布的R指数），
          A（文本的Lambda值），Adjusted Module（校正模数），
          G（基尼系数），R4（基尼系数G的一个补数），Hpax
          Percentage（单现词），Writer's View（作者视野），Verb
          Distance（动词距离），Entropy（文本熵），HPoint（h点），Words（总词数提取），Dicts（词典数提取）等
        </Paragraph>

        <Title level={5}>（3）文本可读性指标 API 接入</Title>
        <Paragraph>
          针对不同语种的特点，还有针对性的语种指标，如英语，西班牙语，葡萄牙语的可读性指标，如ARI，RIX，FlsechKincaidGrade，GunningFog，LWIndex等。
        </Paragraph>
        <Title level={5}>（4）分词&词性标注API</Title>
        <Paragraph>
          系统内部的一些分词和词性标注的接口也开放出来，开发者可以通过接口进行二次开发。
        </Paragraph>

        <Title level={4}>三，如何进行接入</Title>
        <Paragraph>
          通过登录密码获取到个人的
          appId，作为接口调用的必要参数之一。详细接入流程请参考开发者文档。
        </Paragraph>
      </div>
    </>
  );
};

export default ApiDocIntroduction;
