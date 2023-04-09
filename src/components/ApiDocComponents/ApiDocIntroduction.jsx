import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, message, Space, Menu } from "antd";
import { getPersonApi, changeInformationApi } from "../../utils/axios/personal";

const PersonCardBox = {
  width: "60vw",
  height: "32vh",
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
  width: "60vw",
  height: "20vh",
  display: "flex",
  marginLeft: "50px",
  marginTop: "20px",
  alignItems: "center",
};

const ApiDocIntroduction = () => {
  return (
    <>
      <div style={PersonCardBox}>
        <div style={personTitleBox}>
          <h3 style={personTitleText}>个人信息</h3>
        </div>
        <div style={box}>affadfd</div>
      </div>
    </>
  );
};

export default ApiDocIntroduction;
