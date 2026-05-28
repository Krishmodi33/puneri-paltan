import { createSlice } from "@reduxjs/toolkit";
import { getPlayers } from "../action/player.action";

const initialState = {
  players: [],
  isLoading: false,
  error: null,
};

const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Pending
      .addCase(getPlayers.pending, (state) => {
        state.isLoading = true;
      })

      // Success
      .addCase(getPlayers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.players = action.payload;
      })

      // Failed
      .addCase(getPlayers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default playerSlice.reducer;