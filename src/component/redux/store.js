import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slice/player.slice";
import singlePlayerReducer from "./slice/singlePlayer.slice";
import PuneriTvReducer from "./slice/PuneriTv.slice";
import galleryReducer from "./slice/Gallery.slice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    singlePlayer: singlePlayerReducer,
    PuneriTvSeasons: PuneriTvReducer,
    mainGallery: galleryReducer,
  },
});
