import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "@/features/filter/filterSlice";
import cartReducer from "@/features/cart/cartSlice";

export const store = configureStore({
  reducer: { filters: filtersReducer, cart: cartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
