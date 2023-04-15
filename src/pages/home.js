import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Space,
  Avatar,
  Image,
  message,
  FloatButton,
  Modal,
  BackTop,
} from "antd";

import { useNavigate } from "react-router-dom";

import {
  FolderOutlined,
  CodeOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  ApiOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

import { logoutApi } from "../utils/axios/api.js";

// 自定义组件
import SelectBar from "../components/selectBar";
import DocumentProcessing from "./documentProcessing";
import MultiDocumentProcessing from "./multiDocumentProcessing";
import Personal from "../pages/personal";
import IndicatorDescription from "./IndicatorDescription.jsx";
import ApiDocumentation from "./ApiDocumentation.jsx";
import logo from "../assets/logo.png";

const { Header, Content, Footer } = Layout;

const items = [
  {
    label: "文本提取",
    key: "textExtraction",
    icon: <CodeOutlined />,
  },
  {
    label: "单文档提取",
    key: "documentExtraction",
    icon: <FolderOutlined />,
  },
  {
    label: "多文档提取",
    key: "multiDocumentExtraction",
    icon: <FolderOpenOutlined />,
  },
  {
    label: "Api接入文档",
    key: "ApiDocumentation",
    icon: <ApiOutlined />,
  },
];

function MenuItemPage({ currentPage }) {
  switch (currentPage) {
    case "textExtraction":
      return <SelectBar />;
    case "documentExtraction":
      return <DocumentProcessing />;
    case "ApiDocumentation":
      return <ApiDocumentation />;
    case "personal":
      return <Personal />;
    case "multiDocumentExtraction":
      return <MultiDocumentProcessing />;
    default:
      return null;
  }
}

const App = () => {
  const [current, setCurrent] = useState("textExtraction");
  const onClick = (e) => {
    console.log("click ", e.key);
    setCurrent(e.key);
  };
  const navigate = useNavigate();
  // 个人信息模块调用的方法
  const PersonalSettings = (item) => {
    if (item.key == "personal") {
      setCurrent("personal");
    } else if (item.key == "backToIntrodutionPage") {
      navigate("/");
    } else if (item.key == "logOut") {
      logOut();
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      localStorage.removeItem("token");
      navigate("/");
    }
  }, [navigate]);

  const logOut = async () => {
    let res = await logoutApi();
    localStorage.removeItem("token");
    message.success(res.msg);
    navigate("/");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const BackToIntroduction = () => {
    navigate("/");
  };
  return (
    <Layout className="layout">
      {/* Header 头部导航栏 */}
      <Header
        style={{
          background: "white",
        }}
      >
        <Space size="large">
          {/* 首页图标 */}
          <img
            src={logo}
            alt="logo无法显示"
            width={150}
            onClick={BackToIntroduction}
            style={{ cursor: "pointer" }}
          />
          {/* 导航栏，一些路由跳转相关的 */}
          <Menu
            mode="horizontal"
            onClick={onClick}
            selectedKeys={[current]}
            width={{ width: "100%" }}
            items={items}
          />
        </Space>
        {/* 个人信息修改导航栏///////////////////////////////////////////////////////////////////////////////// */}
        <div style={{ float: "right" }}>
          <Space size="large">
            {/* 个人设置 */}
            <Menu mode="horizontal" onClick={PersonalSettings}>
              <Menu.SubMenu
                key="SubMenu"
                title="个人设置"
                icon={<SettingOutlined />}
              >
                <Menu.Item key="personal" icon={<UserOutlined />}>
                  个人中心
                </Menu.Item>
                <Menu.Item
                  key="backToIntrodutionPage"
                  icon={<AppstoreOutlined />}
                >
                  返回首页
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
          backgroundColor: "rgb(237,241,249)",
        }}
        height={{ height: "100%" }}
      >
        <MenuItemPage currentPage={current} />
      </Content>

      {/* Footer注脚 */}
      <Footer
        style={{
          textAlign: "center",
          background: "rgb(237,241,249)",
        }}
      >
        广东外语外贸大学计量语言学指标提取工具 ©2022 Created by Tomato
      </Footer>

      {/* 指标提示 */}
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        onClick={() => {
          setIsModalOpen(true);
        }}
        style={{
          right: 94,
        }}
      />
      {/* 展示的弹窗 */}
      {/* 展示数据的弹窗 */}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <IndicatorDescription />
      </Modal>
    </Layout>
  );
};
export default App;
