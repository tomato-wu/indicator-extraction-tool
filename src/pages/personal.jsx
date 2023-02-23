import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Space, Menu } from "antd";
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
const PersonCardBox = {
  width: "60vw",
  height: "22vh",
  borderRadius: "20px",
  margin: "20px 120px",
  boxShadow: "1px 1px 3px grey",
  backgroundColor: "#FDFDFD",
};

const personTitleBox = {
  height: "5vh",
  backgroundColor: "rgb(244,246,251)",
  borderRadius: "20px 20px 0 0",
  lineHeight: "5vh",
};

const personTitleText = {
  color: "black",
  textShadow: "1px 1px 18px rgb(22,119,255)",
  marginLeft: "20px",
};

const items = [
  {
    label: "个人资料",
    key: "personalData",
    icon: <MailOutlined />,
  },
  {
    label: "修改密码",
    key: "changePassword",
    icon: <AppstoreOutlined />,
  },
];

function Personal() {
  const [current, setCurrent] = useState("personalData");
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
          <div style={PersonCardBox}>
            <div style={personTitleBox}>
              <h3 style={personTitleText}>个人信息</h3>
            </div>
            <div></div>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default Personal;
