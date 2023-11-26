import React from 'react';
import g1 from '../../assets/images/pubg.png';

// Define some CSS styles for the card element
const cardStyle = {
  width: '280px',
  height: '478px',
  margin: '10px',
  border: '1px solid white',
  borderRadius: '10px',
  overflow: 'hidden',
  position: 'relative',
  marginBottom: '50px',
  transform: 'scale(0.8)',
};

// Define some CSS styles for the image element
const imageStyle = {
  width: '100%',
  height: '70%',
  objectFit: 'cover',
};

// Define some CSS styles for the title element
const titleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  padding: '10px',
  textAlign: 'center',
  color: '#fff'
};

// Define some CSS styles for the price element
const priceStyle = {
  fontSize: '18px',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#9400D3'
};

// Define some CSS styles for the discount element
const discountStyle = {
  color: 'white',
  backgroundColor: 'red',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '10px',
  right: '10px',
};

// Define some CSS styles for the button element
const buttonStyle = {
  width: '80%',
  height: '40px',
  margin: '10px auto',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: 'green',
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
};

// Define some CSS styles for the steam logo element
const steamStyle = {
  width: '40px',
  height: '40px',
  position: 'absolute',
  bottom: '10px',
  right: '10px',
};

// Define the GameAd component
const CardComponent = (props) => {
  // Calculate the final price after applying the discount
  const finalPrice = props.price * (1 - props.discount / 100);

  // Format the price to show two decimal places
  const formatPrice = (price) => {
    return '$' + price.toFixed(2);
  };

  // Render the component
  return (
    <div style={cardStyle}>
      <img src={g1} alt="Pugb" style={imageStyle} />
      <div style={discountStyle}>-40%</div>
      <div style={titleStyle}>PUGB ONLINE</div>
      <div style={priceStyle}>
        <del>$49.99</del>
        <span style={{color:'#D3D3D3', marginLeft:'8px', fontStyle:'bold  '}}>$29.99</span>
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
