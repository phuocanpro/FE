import { Checkbox } from "antd";
import React, { useState } from "react";
import {
  WrapperCountOrder,
  WrapperInfo,
  WrapperItemOrder,
  WrapperLeft,
  WrapperListOrder,
  WrapperPriceDiscount,
  WrapperRight,
  WrapperStyleHeader,
  WrapperTotal,
  WrapperInputNumber,
} from "./style";
import { DeleteOutlined } from "@ant-design/icons";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllOrderGame,
  removeOrderGame,
} from "../../redux/slides/orderSlide.js";

const OrderPage = () => {
  const order = useSelector((state) => state.order);
  const [listChecked, setListChecked] = useState([]);
  const dispatch = useDispatch();
  const onChange = (e) => {
    if (listChecked.includes(e.target.value)) {
      const newListChecked = listChecked.filter(
        (item) => item !== e.target.value
      );
      setListChecked(newListChecked);
    } else {
      setListChecked([...listChecked, e.target.value]);
    }
  };

  
  const fullPrice = 214.96;
  const savings = 42.40;
  const total = fullPrice - savings;

  const handleDeleteOrder = (idGame) => {
    dispatch(removeOrderGame({ idGame }));
  };

  const handleOnchangeCheckAll = (e) => {
    if (e.target.checked) {
      const newListChecked = [];
      order?.orderItems?.forEach((item) => {
        newListChecked.push(item?.game);
      });
      setListChecked(newListChecked);
    } else {
      setListChecked([]);
    }
  };

  const handleRemoveAllOrder = () => {
    if (listChecked?.length > 1) {
      dispatch(removeAllOrderGame({ listChecked }));
    }
  };

  const price = () => {
    var result = 0;

    order?.orderItems?.map((item) => {
      result = result + Number(item?.price);
      return null;
    });

    return result;
  };

  return (
    <div style={{ with: "100%", height: "100vh" }}>
      <div
        style={{
          height: "100%",
          width: "1270px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", }}>
        <WrapperLeft>
        <WrapperStyleHeader style={{background:"#483D8B", fontSize: "30px", color: "#FFF", fontFamily:"Helvetica",}}>
    <span style={{ display: "inline-block", width: "390px" }}>
      <Checkbox
        onChange={handleOnchangeCheckAll}
        checked={listChecked?.length === order?.orderItems?.length}
      ></Checkbox>
      <span style={{color:'#FFFF00', fontSize:'20px', fontWeight:'bold' }}> Have ({order?.orderItems?.length} games)</span>
    </span>
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={{color:'#FFFF00', fontSize:'20px', fontWeight:'bold' }}>Price</span>
      <DeleteOutlined
        style={{ cursor: "pointer", fontSize:'20px', color:'#FFFF00'}}
        onClick={handleRemoveAllOrder}
      />
    </div>
  </WrapperStyleHeader>
  <WrapperListOrder>
    {order?.orderItems?.map((order) => {
      return (
        <WrapperItemOrder>
          <div
            style={{
              width: "390px",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Checkbox
              onChange={onChange}
              value={order?.game}
              checked={listChecked.includes(order?.game)
              }
            ></Checkbox>
            <img
              src={order?.image}
              style={{
                width: "77px",
                height: "79px",
                objectFit: "cover",
              }}
              alt="game"
            />
            <div
              style={{
                width: 260,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "18px",
                color: "#4B0082",
              }}
            >
              {order?.name}
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>
              <span style={{ fontSize: "18px", color: "#4B0082",  }}>
                {order?.price}
              </span>
            </span>

            <DeleteOutlined
              style={{ cursor: "pointer", fontSize:'15px' }}
              onClick={() => handleDeleteOrder(order?.game)}
            />
          </div>
        </WrapperItemOrder>
      );
    })}
  </WrapperListOrder>
      </WrapperLeft>

          <WrapperRight>
            <h1 style={{color:'#FFF'}}>Cart Summary</h1>
            
            <div style={{ width: "100%"}}>
              <WrapperInfo style={{background: '#696969'}}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    
                  }}
                >
                  <span style={{ fontSize: '20px', }}>Full Price</span>
                  <span
                    style={{
                      color: '#D3D3D3',
                      textDecoration: 'line-through',
                      lineHeight: '40px',
                      fontSize: '20px'
                    }}
                  >
                    ${price()}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: '20px', }} >Your Saving</span>
                  <span
                    style={{
                      color: '#00FF00',
                      fontSize: '20px',
                      fontWeight: 'bold'
                    }}
                  >
                    $62
                  </span>
                </div>
              </WrapperInfo>
              <WrapperTotal style={{background:'#696969'}}>
                <span style={{ fontSize: '20px', fontWeight:'bold'}}>Total</span>
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      color: "#FFD700",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    $104
                  </span>
                </span>
              </WrapperTotal>
              
            </div>
            <button style={{ backgroundColor: '#ff0000', color: '#fff', padding: '10px 20px', borderRadius: '5px', marginTop: '20px' }}>PROCEED TO CHECKOUT</button>
          </WrapperRight>
        </div>
      </div>
    </div>
  );
};
export default OrderPage;
