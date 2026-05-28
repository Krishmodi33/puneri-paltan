import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slice/player.slice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});