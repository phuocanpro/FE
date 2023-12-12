import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
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
  selectedOrder,
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

  useEffect(() => {
    dispatch(selectedOrder(listChecked));
  }, [listChecked]);
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
        <h3>Cart</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <WrapperLeft>
            <WrapperStyleHeader>
              <span style={{ display: "inline-block", width: "390px" }}>
                <Checkbox
                  onChange={handleOnchangeCheckAll}
                  checked={listChecked?.length === order?.orderItems?.length}
                ></Checkbox>
                <span> Have ({order?.orderItems?.length} games)</span>
              </span>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Price</span>
                <span>Discount</span>
                <span>Total Price</span>
                <DeleteOutlined
                  style={{ cursor: "pointer" }}
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
                        checked={listChecked.includes(order?.game)}
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
                        <span style={{ fontSize: "13px", color: "#242424" }}>
                          {order?.price}
                        </span>
                      </span>
                      <span>
                        <span style={{ fontSize: "13px", color: "#242424" }}>
                          {order?.discount}
                        </span>
                      </span>
                      <span>
                        <span style={{ fontSize: "13px", color: "#242424" }}>
                          {order?.totalPrice}
                        </span>
                      </span>

                      <DeleteOutlined
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDeleteOrder(order?.game)}
                      />
                    </div>
                  </WrapperItemOrder>
                );
              })}
            </WrapperListOrder>
          </WrapperLeft>
          <WrapperRight>
            <div style={{ width: "100%" }}>
              <WrapperInfo>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Price</span>
                  <span
                    style={{
                      color: "#000",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {price()}
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
                  <span>Tax</span>
                  <span
                    style={{
                      color: "#000",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    0
                  </span>
                </div>
              </WrapperInfo>
              <WrapperTotal>
                <span>Total</span>
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      color: "rgb(254, 56, 52)",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    0213
                  </span>
                  <span style={{ color: "#000", fontSize: "11px" }}>
                    (VAT included if any)
                  </span>
                </span>
              </WrapperTotal>
            </div>
            <ButtonComponent
              // onClick={() => handleAddCard(gameDetails, numGame)}
              size={40}
              styleButton={{
                background: "rgb(255, 57, 69)",
                height: "48px",
                width: "220px",
                border: "none",
                borderRadius: "4px",
              }}
              textButton={"BUY"}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </WrapperRight>
        </div>
      </div>
    </div>
  );
};
export default OrderPage;
