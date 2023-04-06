import { Descriptions, Divider } from "antd";

function IndicatorDescription() {
  const obj = {
    "TTR（型例比）":
      "指文本中不同词汇的数量与总词汇数之比。TTR可以帮助我们了解一个文本的词汇多样性。",
    "R1（词汇丰富度）":
      "指文本中不同词汇的数量。R1可以帮助我们了解一个文本的词汇丰富程度。",
    "RR（重复率）":
      "指文本中重复使用的单词或短语的数量与总单词或短语数之比。RR可以帮助我们了解一个文本的重复程度。",
    "RRMC（重复率）":
      "RRmc可以大致视为对RR（重复率）的标准化处理，其取均值区间为 [0,1]，从而使不同文本的计算结果具有可比性",
    "TC（主题集中度）":
      "反映文本专注于某个主题的程度。它是基于文本中的主题词来计算的。",
    "SecondaryTC（次主题集中度）":
      "它是基于频序在h到2h之间的主题词来计算的，计算方法同 TC。h 点之前如果没有实词，那么文本的主题集中度 TC 就是 0。此时就可以考虑采用次级主题集中度。文本须具有词性标注才能计算该指标。",
    "Activity（活动度）":
      "它是文本中的动词总数占动词与形容词总数之和的比例。文本须具有词性标注才能计算该指标。。Activity可以帮助我们了解一个文本的活动程度。Activity可以帮助我们了解一个文本的活动程度。",
    "Descriptivity（描写度）":
      "它是文本中形容词总数占动词与形容词总数之和的比例。文本须具有词性标注才能计算该指标。Descriptivity可以帮助我们了解一个文本的描写程度。",
    "L（文本中词的秩频分布的欧氏长度）":
      "它是所有相邻额序的词之间的欧氏距离的总和",
    "Curve Length R Index（文本中词的秩频分布的R指数）":
      "文本中词的秩频分布的 R 指数。设秩频分布在h点前的部分的欧氏长度为 LR，则R指数即为 LR/L 的一个补数",
    "A（文本的Lambda值）":
      "文本中词的秩频分布的欧氏长度L会受到N的影响。而A的提出就是要在L的基础上找到一种描述词频结构的稳定指标。",
    "Adjusted Module（校正模数）":
      "指在计算A值时，对于出现次数较少但仍然有一定出现频率的单词或短语进行校正后得到的值，它也是反映词频结构的一个指标。Adjusted Module可以帮助我们更准确地计算A值。",
    "G（基尼系数）":
      "它是从经济学中借来用于描述文本中词的秩额分布特征的一个指标。",
    "R4（基尼系数G的一个补数）": "基尼系数G的一个补数，R4=1-G",
    "Hpax Percentage（单现词）":
      "它是文本中词的秩频分布(rank-firequency distribution)中的一个临界点。词的秩频分布是这样得到的:将文本中每个词(型符)按照频次降序排列，并按照从1到的顺序依次编号。每个频序 都对应着一个频次值)。",
    "Writer's View（作者视野）":
      "指文本中作者的观点或态度所占比例。Writer’s View可以帮助我们了解一个文本的作者观点或态度。",
    "Verb Distance（动词距离）":
      "指文本中动词之间的平均距离。Verb Distance可以帮助我们了解一个文本中动作发生的频率和密度。",
    "Entropy（文本熵）":
      "指文本中信息量的分布情况。Entropy可以帮助我们了解一个文本的信息量分布情况。",
    "HPoint（h点）":
      "指文本中只出现一次的单词或短语所占比例。Hpax Percentage可以帮助我们了解一个文本中的生僻词汇。",
    "Words（总词数提取）":
      "指从一个文本中提取出所有单词。Words可以帮助我们进行后续的计量分析。",
    "Dicts（词典数提取）":
      "指从一个文本中提取出所有不同的单词。Dicts可以帮助我们进行后续的计量分析。",
    ARI: "自动可读性指数 (ARI)是一种评估文本的可理解性的指标。它从字符数与单词数的比率以及单词数与句子数的比率来衡量文本的可读性。ARI 输出一个近似于所需年级等级的数字。例如，如果 ARI 输出数字3，则表示 3 年级(8-9 岁)的学生应该能够理解该文本。",
    RIX: "RIX (Rate Index) 一- RIX 可以适用于任何语言西方语言，RIX 考虑的是文本中包含的“长”词，定义包含 6个以上字符的单词为“长”词，RIX 输出是介于 0(非常容易) 和 55+(非常困难)之间的分数。",
    FlsechKincaidGrade:
      "FKG (Flesch-Kincaid Grade Level) 一- FKG 评估方法是 Kincaid 的FRE 方法的改进。该方法更合理地描述了ASL和ASW在文本评分上的关系。此方法最初是美国海军开发应用于教育领域。FKG 输出一个美国学校的年级水平值，表明该年级水平的普通学生可以阅读此文本。",
    FlsechKincaidGrade:
      "FKG (Flesch-Kincaid Grade Level) 一- FKG 评估方法是 Kincaid 的FRE 方法的改进。该方法更合理地描述了ASL和ASW在文本评分上的关系。此方法最初是美国海军开发应用于教育领域。FKG 输出一个美国学校的年级水平值，表明该年级水平的普通学生可以阅读此文本。",
    LWIndex:
      "Lw (Linsear Write Formula) -- Linsear Write Formula 是英语文本的可读性公式，最初是为美国空军开发的，旨在帮助他们计算技术手册的可读性。Linsear Write Formula 是根据句子长度和三个以上音节单词的数量来计算文本样本的等级水平。",
    GunningFog:
      "GF (Gunning Fog Index) —— GF 与 Flesch 指标类似，因为它采用了音节和句子长度。FRE 和 FKG 使用平均字节数来表示文本中单词的难易程度，而 GF 直接计算文本中困难单词的比例，并定义“Foggy”的单词。“Foggy”的单词是指包含 3 个或者更多音节的单词。得分为 5 表明文本是可读的，得分为 10 表示难度较低，得分为15 表示难度中等，得分为 20 表示难度很大。",
  };

  return (
    <>
      <Descriptions title="指标词典" bordered>
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
    </>
  );
}

export default IndicatorDescription;
