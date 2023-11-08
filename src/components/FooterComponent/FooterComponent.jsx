import React, { useState } from "react";
import { Badge, Col, Image } from "antd";
import {
  WrapperFooter,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import logo from "../../assets/images/logo.png";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
// const sizeLi = {
//   size: "larger",
// };
// const styleButtonLi = {
//   background: "hsla(240, 63%, 13%, 1)",
//   marginRight: "20px",
//   marginTop: "5px",
// };
// const styleTextLi = {
//   color: "red",
// };

const FooterComponent = () => {
  const styleLi = {
    background: "hsla(240, 63%, 13%, 1)",
    marginRight: "20px",
    marginTop: "5px",
    size: "larger",
    color: "red",
    listStyleType: "none",
    fontWeight: "bold",
  };
  const [showGameMenu, setShowGameMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowGameMenu(true);
  };

  const handleMouseLeave = () => {
    setShowGameMenu(false);
  };
  return (
    <div
      style={{
        width: "100%",
        background: "hsla(240, 63%, 13%, 1)",
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
      }}
    >
      <WrapperFooter>
        <Col span={3}>
          <img
            src={logo}
            style={{
              display: "block",
              width: "100%",
            }}
            alt="logo"
          ></img>
        </Col>
        <Col span={5}>
          <ul style={{ display: "flex", position: "relative" }}>
            <li style={styleLi}>HOME</li>
            <li
              style={styleLi}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              GAME
              {showGameMenu && (
                <ul style={{ position: "absolute", top: "100%", left: "85px" }}>
                  <li>GAME1</li>
                  <li>GAME2</li>
                  <li>GAME4</li>
                </ul>
              )}
            </li>
          </ul>
        </Col>
        <Col span={10}>
          <ButtonInputSearch
            size="large"
            textButton="Search"
            placeholder="Input search text"
            bordered={false}
            //    onSearch={onSearch}
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "54px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />

            <div>
              <WrapperTextHeaderSmall>Login/Register</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Account</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </Badge>
            <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperFooter>
    </div>
  );
};

export default FooterComponent;
