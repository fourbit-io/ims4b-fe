import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  totalItem: 0,
  totalQty: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, action) => {
      state.productData.push(action.payload);
      state.totalItem += 1;
    },
    qtyCount: (state, action) => {
      const { id, type } = action?.payload;
      const index = state.productData.findIndex((p) => p?.productId === id);
      const currentProduct = state.productData[index];
      if (type === "inc") {
        currentProduct.quantity += 1;
        state.totalQty += 1;
      }
      if (type === "dec" && currentProduct.quantity > 0) {
        currentProduct.quantity -= 1;
        state.totalQty -= 1;
      }
    },
    remove: (state, action) => {
      const index = state.productData.findIndex((p) => p?.productId === action.payload);
      const currentProduct = state.productData[index];
      state.productData = state.productData.filter(
        (product) => product?.productId !== currentProduct?.productId
      );
      state.totalQty -= currentProduct.quantity;
      state.totalItem -= 1;
    },
    removeAll: (state) => {
        state.productData.splice(0, state.productData.length);
        state.totalQty = 0;
        state.totalItem = 0;
    }
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, qtyCount, removeAll } = productSlice.actions;

export default productSlice.reducer;
