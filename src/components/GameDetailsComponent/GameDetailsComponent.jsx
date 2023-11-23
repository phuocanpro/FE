import { Col, Row, Image } from "antd";
import React from "react";
import imageProduct from "../../assets/images/garena.jpg";
import imageProductSmall from "../../assets/images/top3.jfif";
import {
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperQualityProduct,
  WrapperInputNumber,
  WrapperPriceGach,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ProductDetailsComponent = () => {
  const onChange = () => {};
  const paymentMethods = [
    { id: 'visa', name: 'VISA', logo: 'https://i.ibb.co/vjQCN4y/Visa-Card.png' },
    { id: 'mastercard', name: 'Mastercard', logo: 'https://i.ibb.co/vdbBkgT/mastercard.jpg' },
    { id: 'paypal', name: 'Paypal', logo: 'https://i.ibb.co/KVF3mr1/paypal.png' },
    { id: 'AMEX', name: 'AMEX', logo: 'https://i.ibb.co/wQnrX86/American-Express.jpg' },
  ];
  return (
    <Row style={{ padding: "16px", borderRadius: "4px" }}>
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
        <Row>
          <Image
            src={imageProduct}
            alt="Image Product"
            preview={false}
            style={{ width: "450px", height:"300px" }}
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
         
         <WrapperPriceGach>399.000Đ</WrapperPriceGach>
          <WrapperPriceTextProduct>200.000Đ</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <div style={{ margin: '0 10px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
  <h4 style={{ color:'#fff', fontSize:'14px'}}>Select a <span style={{ color: '#6064b6' }}>Payment</span> method:</h4>
  <form action="#" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    {paymentMethods.map((method, index) => (
      <div key={index} style={{ margin: '0 10px' }}>
        <input type="radio" name="payment" id={method.id} />
        <label htmlFor={method.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={method.logo} alt="" style={{ width: '50px' }} />
          <span><i style={{ color: '#6064b6' }}></i></span>
        </label>
      </div>
    ))}
  </form>
        </div>
        

        <div
          style={{
            margin: "10px 0 20px",
            padding: "10px 0",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <div style={{ marginBottom: "10px", color:'#fff', fontSize:'20px' }}>Quantity:</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "#000" }}>
              <MinusOutlined
                size="10"
                style={{ color: "#FFF", fontSize: "20px" }}
              />
            </button>

            <WrapperInputNumber
              defaultValue={3}
              onChange={onChange}
              size="small"
            />

            <button style={{ border: "none", background: "#000" }}>
              <PlusOutlined
                size="10"
                style={{ color: "#FFF", fontSize: "20px" }}
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
            textButton={"Add to cart"}
            styleTextButton={{ color: "rgb(13,92,182)", fontSize: "15px" }}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};
export default ProductDetailsComponent;
