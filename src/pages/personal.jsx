import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Space, Menu } from "antd";
const { Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const items = [
  {
    label: "个人资料",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "修改密码",
    key: "app",
    icon: <AppstoreOutlined />,
  },
];

function Personal() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Layout>
        <Sider style={siderStyle}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="vertical"
            items={items}
            style={{
              width: 256,
              height: 900,
            }}
          />
        </Sider>
        <Content style={contentStyle}>Content</Content>
      </Layout>
    </>
  );
}

export default Personal;
