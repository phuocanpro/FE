import { Col, Row, Image } from "antd";
import React from "react";
import imageProduct from "../../assets/images/top2.jfif";
import imageProductSmall from "../../assets/images/top3.jfif";
import {
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ProductDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius: "4px" }}>
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
        <Row>
          <Image
            src={imageProduct}
            alt="Image Product"
            preview={false}
            style={{ width: "115%" }}
          />
        </Row>

        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="Image Product Small"
              preview={false}
            />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="Image Product Small"
              preview={false}
            />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="Image Product Small"
              preview={false}
            />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="Image Product Small"
              preview={false}
            />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="Image Product Small"
              preview={false}
            />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="Image Product Small"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>Garena Legend</WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
          <WrapperStyleTextSell> Bye 1000+</WrapperStyleTextSell>
        </div>

        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>

        <WrapperAddressProduct>
          <span>to </span>
          <span className="address">Da Nang </span> -
          <span className="change-address">Change address</span>
        </WrapperAddressProduct>

        <div
          style={{
            margin: "10px 0 20px",
            padding: "10px 0",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Quantity</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined
                size="10"
                style={{ color: "#000", fontSize: "20px" }}
              />
            </button>

            <WrapperInputNumber
              defaultValue={3}
              onChange={onChange}
              size="small"
            />

            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined
                size="10"
                style={{ color: "#000", fontSize: "20px" }}
              />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              backgroundColor: "rgb(255,57,69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            textButton={"Choose Buy"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>

          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              backgroundColor: "#fff",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13,92,182)",
              borderRadius: "4px",
            }}
            textButton={"Pay Later"}
            styleTextButton={{ color: "rgb(13,92,182)", fontSize: "15px" }}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};
export default ProductDetailsComponent;
