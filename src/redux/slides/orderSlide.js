import { createSlice } from "@reduxjs/toolkit";
import { addOrderRedux } from "../../utils";

const initialState = {
  orderItems: [],
  paymentMethod: "",
  itemsPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
  user: "",
  isPaid: false,
  orderDate: "",
};

export const orderSlide = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderGame: (state, action) => {
      const { orderItem } = action.payload;
      const itemOrder = state?.orderItems?.find(
        (item) => item?.game === orderItem.game
      );
      if (!itemOrder) {
        state.orderItems.push(orderItem);
      }
    },
    removeOrderGame: (state, action) => {
      const { idGame } = action.payload;

      const itemOrder = state?.orderItems?.filter(
        (item) => item?.game !== idGame
      );
      state.orderItems = itemOrder;
    },
    removeAllOrderGame: (state, action) => {
      const { listChecked } = action.payload;

      const itemOrders = state?.orderItems?.filter(
        (item) => !listChecked.includes(item.game)
      );
      state.orderItems = itemOrders;
    },
    selectedOrder: (state, action) => {
      console.log("selected", state, action);
    },
  },
});

export const {
  addOrderGame,
  removeOrderGame,
  removeAllOrderGame,
  selectedOrder,
} = orderSlide.actions;

export const orderReducer = orderSlide.reducer;
