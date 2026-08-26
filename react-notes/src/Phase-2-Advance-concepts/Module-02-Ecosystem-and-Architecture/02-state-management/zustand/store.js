//npm i zustand

import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  decrement: () => set((s) => ({ count: s.count - 1 })),
  incrementBy5: (amount) => set((s) => ({ count: s.count + amount })),
  reset: () => set({ count: 0 }),
}));
