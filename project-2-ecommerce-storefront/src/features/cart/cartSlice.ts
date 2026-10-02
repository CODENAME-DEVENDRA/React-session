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
      const product = action.payload; //payload product

      const existing = state.items[product.id];

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items[product.id] = { ...product, quantity: 1 };
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      delete state.items[action.payload]; //payload = product id
    },
    incrementQty(state, action: PayloadAction<number>) {
      const item = state.items[action.payload];
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQty(state, action: PayloadAction<number>) {
      const item = state.items[action.payload];
      if (!item) return;
      item.quantity -= 1;
      if (item.quantity <= 0) {
        delete state.items[action.payload];
      }
    },
    clearCart(state) {
      state.items = {};
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state: RootState) =>
  Object.values(state.cart.items);

export const selectCartCount = (state: RootState) =>
  Object.values(state.cart.items).reduce((n, item) => n + item.quantity, 0);

export const selectCartTotal = (state: RootState) =>
  Object.values(state.cart.items).reduce(
    (n, item) => n + item.price * item.quantity,
    0,
  );
