import React, { useState } from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperButtonMore,
  WrapperTypeProduct,
  WrapperProducts,
  WrapperBody,
} from "./style";
import slider1 from "../../assets/images/news-1.jpg";
import slider2 from "../../assets/images/news-2.jpg";
import slider3 from "../../assets/images/news-3.jpg";

import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import banner from "../../assets/images/banner.png";
const HomePage = () => {
  const arr = ["TV", "Tu lanh", "Laptop"];

  return (
    <>
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>

      <div>
        <div style={{ textAlign: "center" }}>
          <img
            src={banner}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              preview: "{false}",
              width: "1270px",
              height: "500px",
            }}
            alt="banner"
          ></img>
        </div>
        <div
          style={{
            margin: "0 auto",
            height: "1000px",
            width: "1270px",
          }}
        >
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              background: "hsla(240, 63%, 13%, 1)",
            }}
          >
            <WrapperButtonMore
              textButton="Next"
              type="outline"
              styleButton={{
                border: "1px solid rgb(11,116,229)",
                color: "hsla(267, 100%, 63%, 0.3)",
                width: "240px",
                height: "38px",
                borderRadius: "4px",
              }}
              styleTextButton={{ fontWeight: 500 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
