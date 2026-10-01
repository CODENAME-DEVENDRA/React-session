import type { RootState } from "@/app/store";
import type { CartItem, Product } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: Record<number, CartItem>;
}

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload;

      const existing = state.items[product.id];

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items[product.id] = { ...product, quantity: 1 };
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state: RootState) =>
  Object.values(state.cart.items);
