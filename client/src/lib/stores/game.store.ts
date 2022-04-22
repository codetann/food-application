import create from "zustand";

const gameStore = create((set, get) => ({
  roomId: null,
  options: null,
  setRoomId: (roomId: null | string) => set({ roomId }),
  setOptions: (options: null | string) => set({ options }),
}));

export { gameStore };
