import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, message, Space, Menu } from "antd";
import { getPersonApi, changeInformationApi } from "../../utils/axios/personal";

const PersonCardBox = {
  width: "60vw",
  height: "auto",
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

const box = {
  color: "black",
  padding: "0px",
};

const ChatWithUs = () => {
  return (
    <>
      <div style={PersonCardBox}>
        <div style={personTitleBox}>
          <h3 style={personTitleText}>联系我们</h3>
        </div>
        <div style={box}>
          <h1>如需咨询，可通过下面的邮箱与我们取得联系：</h1>
          <p>邮箱：translate_api@baidu.com</p>
          <p>注：接入问题请优先参考接入文档。</p>
        </div>
      </div>
    </>
  );
};

export default ChatWithUs;
