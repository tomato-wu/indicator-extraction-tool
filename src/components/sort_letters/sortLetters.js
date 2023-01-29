import React from "react";
import { Button, Space } from "antd";

function SortLetters() {
  return (
    <>
      <Space size={[8, 16]} wrap>
        <Button type="primary">拟合 Cocho/Beta分布</Button>
        <Button type="primary">拟合 Exponential分布</Button>
        <Button type="primary">拟合 Frappat分布</Button>
        <Button type="primary">拟合 Gusein-Zade分布</Button>
        <Button type="primary">拟合 Power-Law分布</Button>
        <Button type="primary">拟合 Logarithmic分布</Button>
        <Button type="primary">拟合 Weibull分布</Button>
        <Button type="primary">拟合 Quadratic-Logarithmic分布</Button>
        <Button type="primary">拟合 Yule分布</Button>
        <Button type="primary">
          拟合 Menzerath - Altmann/Inverse - Gamma分布
        </Button>
        <Button type="primary" danger>
          一键提取
        </Button>
      </Space>
    </>
  );
}

export default SortLetters;
