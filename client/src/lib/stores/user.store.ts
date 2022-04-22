import create from "zustand";

const userStore = create((set, get) => ({
  user: null,
  setUser: (user: null | string) => set({ user }),
}));

export { userStore };
