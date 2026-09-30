import type { RootState } from "@/app/store";
import type { Filters, SortOption } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: Filters = {
  category: "All",
  search: "",
  sort: "featured",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSort(state, action: PayloadAction<SortOption>) {
      state.sort = action.payload;
    },
  },
});

export const { setCategory, setSearch, setSort } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilters = (state: RootState): Filters => state.filters;
