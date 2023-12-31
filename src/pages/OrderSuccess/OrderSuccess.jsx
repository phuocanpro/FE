import { Checkbox, Form, message, Radio } from "antd";
import React, { useEffect, useState } from "react";
import {
  Lable,
  WrapperInfo,
  WrapperItemOrder,
  WrapperLeft,
  WrapperListOrder,
  WrapperStyleHeader,
  WrapperValue,
} from "./style";

import { useDispatch, useSelector } from "react-redux";

import { useMutationHooks } from "../../hooks/userMutationHook";
import * as UserService from "../../services/UserService.js";
import * as OrderService from "../../services/OrderService.js";
import { updateUser } from "../../redux/slides/userSlide";
const OrderSuccess = () => {
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);

  const [payment, setPayment] = useState("paypal");
  const [stateUserDetails, setStateUserDetails] = useState({
    userName: "",
    email: "",
    phone: "",
  });

  const mutationUpdate = useMutationHooks(async (data) => {
    const { id, token, ...rests } = data;
    const res = await UserService.updateUser(id, { ...rests }, token);
    return res;
  });

  const { isLoading, data } = mutationUpdate;

  const mutationOrder = useMutationHooks(async (data) => {
    const { token, ...rests } = data;
    const res = await OrderService.createOrder(token, { ...rests });
    return res;
  });

  const { isSuccess, isError } = mutationOrder;

  useEffect(() => {
    if (isSuccess) {
      message.success("Order success");
    } else if (isError) {
      message.error("Error");
    }
  }, [isSuccess, isError]);

  const handleOnchangeDetails = (e) => {
    setStateUserDetails({
      ...stateUserDetails,
      [e.target.name]: e.target.value,
    });
  };

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const price = () => {
    var result = 0;

    order?.orderItemsSelected?.map((item) => {
      result = result + Number(item?.price);
      return null;
    });

    return result;
  };

  const totalPrice = () => {
    var result = 0;

    order?.orderItemsSelected?.map((item) => {
      result = result + Number(item?.totalPrice);
      return null;
    });

    return result;
  };

  const saving = () => {
    var result = price() - totalPrice();
    return result.toFixed(2);
  };

  const total = price();

  const handleAddOrder = () => {
    if (
      user?.access_token &&
      order?.orderItemsSelected &&
      user?.email &&
      user?.phone &&
      user?.userName &&
      user?.id
    ) {
      mutationOrder.mutate({
        token: user?.access_token,
        orderItems: order?.orderItemsSelected,
        paymentMethod: payment,
        totalPrice: total,
        isPaid: order?.isPaid,
        user: user?.id,
        orderDate: order?.orderDate,
      });
    }
  };

  console.log("order", order, user);

  const handlePayment = (e) => {
    setPayment(e.target.value);
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
        <h3>Order success</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <WrapperLeft>
            <WrapperInfo>
              <div>
                <Lable>Phương thức thanh toán</Lable>
                <WrapperValue>
                  <span>Paypal</span>
                </WrapperValue>
              </div>
            </WrapperInfo>
            <WrapperStyleHeader
              style={{
                background: "#483D8B",
                fontSize: "30px",
                color: "#FFF",
                fontFamily: "Helvetica",
              }}
            >
              <span style={{ display: "inline-block", width: "390px" }}>
                <span
                  style={{
                    color: "#FFFF00",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Have ({order?.orderItems?.length} games)
                </span>
              </span>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    color: "#FFFF00",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Price
                </span>
                <span
                  style={{
                    color: "#FFFF00",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Discount
                </span>
                <span
                  style={{
                    color: "#FFFF00",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Total Price
                </span>
              </div>
            </WrapperStyleHeader>
            <WrapperListOrder>
              {order?.orderItemsSelected?.map((order) => {
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
                        <span style={{ fontSize: "18px", color: "#4B0082" }}>
                          {order?.price}
                        </span>
                      </span>

                      <span>
                        <span style={{ fontSize: "18px", color: "#4B0082" }}>
                          {order?.discount} %
                        </span>
                      </span>

                      <span>
                        <span style={{ fontSize: "18px", color: "#4B0082" }}>
                          {order?.totalPrice}
                        </span>
                      </span>
                    </div>
                  </WrapperItemOrder>
                );
              })}
            </WrapperListOrder>
          </WrapperLeft>
        </div>
      </div>
    </div>
  );
};
export default OrderSuccess;
