import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Space, Menu } from "antd";

import Information from "../components/personal/infomation.jsx";
import ChangePassword from "../components/personal/changePassword.jsx";
const { Sider, Content } = Layout;

const contentStyle = {
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "rgb(237,241,249)",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#E1ECF3",
};

const items = [
  {
    label: "个人资料",
    key: "Information",
    icon: <MailOutlined />,
  },
  {
    label: "修改密码",
    key: "changePassword",
    icon: <AppstoreOutlined />,
  },
];

function MenuItemPage({ currentPage }) {
  switch (currentPage) {
    case "Information":
      return <Information />;
    case "changePassword":
      return <ChangePassword />;
    default:
      return null;
  }
}

function Personal() {
  const [current, setCurrent] = useState("Information");

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
        <Content style={contentStyle}>
          <MenuItemPage currentPage={current} />
        </Content>
      </Layout>
    </>
  );
}

export default Personal;
