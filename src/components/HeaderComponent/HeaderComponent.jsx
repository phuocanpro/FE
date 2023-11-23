import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Popover } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
  WrapperContentPopup,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import logo from "../../assets/images/logo.png";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
<<<<<<< HEAD
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome, faGamepad } from '@fortawesome/free-solid-svg-icons';
=======
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService.js";
import { resetUser } from "../../redux/slides/userSlide.js";
import Loading from "../LoadingComponent/Loading";
>>>>>>> a83b252bad918825da02b12de1b9549157243549
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

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setUserName(user?.userName);
    setUserAvatar(user?.avatar);
    setLoading(false);
  }, [user?.userName, user?.avatar]);
  const content = (
    <div>
      <WrapperContentPopup onClick={handleLogout}>Logout</WrapperContentPopup>
      <WrapperContentPopup onClick={() => navigate("/profile-user")}>
        Infor user
      </WrapperContentPopup>
    </div>
  );

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
<<<<<<< HEAD
          <div style={{ display: 'flex', alignItems: 'center', color:'#fff',fontSize:'15px', fontWeight:'bold', marginRight:'10px' }}>
        <FontAwesomeIcon icon={faHome} style={{marginRight:'5px'}} />
        <span>Home</span>
         </div>
         <div style={{ display: 'flex', alignItems: 'center', color:'#fff',fontSize:'15px', fontWeight:'bold' }}>
        <FontAwesomeIcon icon={faGamepad} style={{marginRight:'5px'}} />
        <span>Game</span>
      </div>
=======
            <li style={styleLi}>HOME</li>
            <li style={styleLi}>GAME</li>
>>>>>>> a83b252bad918825da02b12de1b9549157243549
          </ul>
        </Col>
        <Col span={10}>
          <ButtonInputSearch
            size="large"
            textButton="Search"
            placeholder="Input search text"
            //    onSearch={onSearch}
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "54px", alignItems: "center" }}
        >
          <Loading isLoading={loading}>
            <WrapperHeaderAccount>
              {userAvatar ? (
                <img
                  src={userAvatar}
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  alt="avatar"
                />
              ) : (
                <UserOutlined style={{ fontSize: "30px" }} />
              )}
              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click">
                    <div style={{ cursor: "pointer" }}>
                      {userName?.length ? userName : user?.email}
                    </div>
                  </Popover>
                </>
              ) : (
                <div
                  onClick={handleNavigateLogin}
                  style={{ cursor: "pointer" }}
                >
                  <WrapperTextHeaderSmall>
                    Login/Register
                  </WrapperTextHeaderSmall>
                  <div>
                    <WrapperTextHeaderSmall>Account</WrapperTextHeaderSmall>
                    <CaretDownOutlined />
                  </div>
                </div>
              )}
            </WrapperHeaderAccount>
          </Loading>
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
