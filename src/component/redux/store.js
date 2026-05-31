import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slice/player.slice";
import singlePlayerReducer from "./slice/singlePlayer.slice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    singlePlayer: singlePlayerReducer,
  },
});