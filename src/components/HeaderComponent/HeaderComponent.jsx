import React, { useState } from "react";
import { Badge, Col, Image } from "antd";
import {
  WrapperHeader,
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
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome, faGamepad } from '@fortawesome/free-solid-svg-icons';
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

const HeaderComponent = () => {
  const styleLi = {
    background: "hsla(240, 63%, 13%, 1)",
    marginRight: "20px",
    marginTop: "5px",
    size: "larger",
    color: "#fff",
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
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };
  return (
    <div
      style={{
        width: "100%",
        background: "hsla(240, 63%, 13%, 1)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
        <Col span={3}>
          <img
            src={logo}
            style={{
              display: "block",
              width: "100%",
              height: "100px",
            }}
            alt="logo"
          ></img>
        </Col>
        <Col span={5}>
          <ul style={{ display: "flex", position: "relative" }}>
          <div style={{ display: 'flex', alignItems: 'center', color:'#fff',fontSize:'15px', fontWeight:'bold', marginRight:'10px' }}>
        <FontAwesomeIcon icon={faHome} style={{marginRight:'5px'}} />
        <span>Home</span>
         </div>
         <div style={{ display: 'flex', alignItems: 'center', color:'#fff',fontSize:'15px', fontWeight:'bold' }}>
        <FontAwesomeIcon icon={faGamepad} style={{marginRight:'5px'}} />
        <span>Game</span>
      </div>
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

            <div onClick={handleNavigateLogin} style={{ cursor: "pointer" }}>
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
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
