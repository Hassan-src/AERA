import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    // deleteItem(state, action) {},
    // increaseItemQuantity(state, action) {},
    // decreaseItemQuantity(state, action) {},
    // clearCart(state, action) {},
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
