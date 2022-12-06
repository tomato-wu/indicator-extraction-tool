import React from "react";
import { Layout, Menu, Space, Avatar, Image } from "antd";
import { useNavigate } from "react-router-dom";
import {
  SolutionOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import SelectBar from "../components/selectBar";

const { Header, Content, Footer } = Layout;
const App = () => {
  const navigate = useNavigate();
  // 个人信息模块调用的方法
  const PersonalSettings = (item) => {
    if (item.key == "mail") {
      navigate("/myPersonalMessage");
    } else if (item.key == "personal") {
      navigate("/personal");
    } else if (item.key == "accountSetting") {
      alert("哈哈哈");
    } else if (item.key == "logOut") {
      alert("nice");
    }
  };
  return (
    <Layout className="layout">
      {/* Header 头部导航栏 */}
      <Header>
        <Space size="large">
          {/* 首页图标 */}
          <SolutionOutlined className="logo" style={{ color: "#FFFFFF" }} />
          <span style={{ color: "#FFFFFF" }}> 指标提取工具</span>
          {/* 导航栏，一些路由跳转相关的 */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(6).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Space>
        <div style={{ float: "right" }}>
          <Space size="large">
            {/* 头像 */}
            <Avatar
              src={
                <Image
                  src="https://joeschmoe.io/api/v1/random"
                  size="large"
                  style={{
                    width: 32,
                    backgroundColor: "#FFFFFF",
                  }}
                />
              }
            />
            {/* 个人设置 */}
            <Menu mode="horizontal" theme="dark" onClick={PersonalSettings}>
              <Menu.Item key="mail" icon={<MailOutlined />}>
                消息
              </Menu.Item>
              <Menu.SubMenu
                key="SubMenu"
                title="个人设置"
                icon={<SettingOutlined />}
              >
                <Menu.Item key="personal" icon={<UserOutlined />}>
                  个人中心
                </Menu.Item>
                <Menu.Item key="accountSetting" icon={<AppstoreOutlined />}>
                  账号设置
                </Menu.Item>
                <Menu.Item key="logOut" icon={<LogoutOutlined />}>
                  退出登录
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Space>
        </div>
      </Header>

      {/* 主体内容区域 */}
      <Content
        style={{
          padding: "20px 150px",
        }}
        height={{ height: "100%" }}
      >
        <SelectBar></SelectBar>
      </Content>

      {/* Footer注脚 */}
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        广东外语外贸大学计量语言学指标提取工具 ©2022 Created by Tomato
      </Footer>
    </Layout>
  );
};
export default App;
