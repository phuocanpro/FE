import React from "react";
import g1 from "../../assets/images/pubg.png";

const cardStyle = {
  width: "280px",
  height: "478px",
  margin: "10px",
  border: "1px solid white",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
  marginBottom: "50px",
  transform: "scale(0.8)",
};

const imageStyle = {
  width: "100%",
  height: "70%",
  objectFit: "cover",
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  padding: "10px",
  textAlign: "center",
  color: "#fff",
};

const priceStyle = {
  fontSize: "18px",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#9400D3",
};

const discountStyle = {
  color: "white",
  backgroundColor: "red",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "10px",
  right: "10px",
};

const buttonStyle = {
  width: "80%",
  height: "40px",
  margin: "10px auto",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "green",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

const steamStyle = {
  width: "40px",
  height: "40px",
  position: "absolute",
  bottom: "10px",
  right: "10px",
};

const CardComponent = (props) => {
  const {
    image,
    name,
    price,
    type,
    description,
    rating,
    platform,
    discount,
    selled,
  } = props;

  // Calculate the final price after applying the discount
  // const finalPrice = props.price * (1 - props.discount / 100);

  // Format the price to show two decimal places
  // const formatPrice = (price) => {
  //   return "$" + price.toFixed(2);
  // };

  // const priceDiscount = (price, discount){
  //   const a = price - price*discount/100;
  //   return a;
  // }
  // Render the component
  return (
    <div style={cardStyle}>
      <img src={g1} alt="Pugb" style={imageStyle} />
      <div style={discountStyle}>-{discount}</div>
      <div style={titleStyle}>{name}</div>
      <div style={priceStyle}>
        <del>${price}</del>
        <span
          style={{ color: "#D3D3D3", marginLeft: "8px", fontStyle: "bold  " }}
        >
          ${29.99}
        </span>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1200px-Steam_icon_logo.svg.png"
        alt="Steam logo"
        style={steamStyle}
      />
      <button style={buttonStyle}>ADD TO CART</button>
    </div>
  );
};

export default CardComponent;
