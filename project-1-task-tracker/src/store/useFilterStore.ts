import { create } from "zustand";

type FilterStore = {
  search: string;
  filter: string;
  setSearch: (search: string) => void;
  setFilter: (filter: string) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  search: "",
  filter: "all",
  setSearch: (search: string) => set({ search }),
  setFilter: (filter: string) => set({ filter }),
}));
