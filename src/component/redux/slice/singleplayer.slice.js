import { createSlice } from "@reduxjs/toolkit";
import { getSinglePlayer } from "../action/singlePlayer.action";

const initialState = {
  player: null,
  isLoading: false,
  error: "",
};

const singlePlayerSlice = createSlice({
  name: "singlePlayer",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getSinglePlayer.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })

      .addCase(getSinglePlayer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.player = action.payload;
      })

      .addCase(getSinglePlayer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default singlePlayerSlice.reducer;