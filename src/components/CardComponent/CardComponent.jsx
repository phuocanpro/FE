import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/official.jfif";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 200 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <img
        src={logo}
        style={{
          width: "68px",
          height: "14px",
          position: "absolute",
          top: 0,
          left: 0,
          borderTopLeftRadius: "3px",
        }}
        alt="logo"
      />
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "40px" }}>
          <span>4.96</span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>

        <WrapperStyleTextSell>| Buy 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: "8px" }}>1.000.000d</span>
        <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};
export default CardComponent;
