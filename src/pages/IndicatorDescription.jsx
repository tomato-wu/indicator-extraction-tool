import { Descriptions } from "antd";

function IndicatorDescription() {
  const obj = {
    "TTR（型例比）":
      "指文本中不同词汇的数量与总词汇数之比。TTR可以帮助我们了解一个文本的词汇多样性。",
    "R1（词汇丰富度）":
      "指文本中不同词汇的数量。R1可以帮助我们了解一个文本的词汇丰富程度。",
    "RR（重复率）":
      "指文本中重复使用的单词或短语的数量与总单词或短语数之比。RR可以帮助我们了解一个文本的重复程度。",
    "RRMC（重复率）": "0.5",
    "TC（主题集中度）": "0.5",
    "SecondaryTC（次主题集中度）": "0.5",
    "Activity（活动度）":
      "指文本中动态动作和状态动作所占比例。Activity可以帮助我们了解一个文本的活动程度。",
    "Descriptivity（描写度）":
      "指文本中描写性内容所占比例。Descriptivity可以帮助我们了解一个文本的描写程度。",
    "L（文本中词的秩频分布的欧氏长度）": "0.5",
    "Curve Length R Index（文本中词的秩频分布的R指数）": "0.5",
    "A（文本的Lambda值）": "0.5",
    "Adjusted Module（校正模数）":
      "指在计算A值时，对于出现次数较少但仍然有一定出现频率的单词或短语进行校正后得到的值。Adjusted Module可以帮助我们更准确地计算A值。",
    "G（基尼系数）": "0.5",
    "R4（基尼系数G的一个补数）": "0.5",
    "Hpax Percentage（单现词）": "0.5",
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
  };
  return (
    <>
      <Descriptions title="计量提取" bordered>
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
