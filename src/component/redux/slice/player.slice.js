import { createSlice } from "@reduxjs/toolkit";
import { getPlayers } from "../action/player.action";

const initialState = {
  raiders: [],
  defenders: [],
  allrounders: [],

  isLoading: false,
  error: null,
};

const playerSlice = createSlice({
  name: "players",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // PENDING
      .addCase(getPlayers.pending, (state) => {
        state.isLoading = true;
      })

      // SUCCESS
      .addCase(getPlayers.fulfilled, (state, action) => {
        state.isLoading = false;

        state.raiders = action.payload.raiders || [];

        state.defenders = action.payload.defenders || [];

        state.allrounders = action.payload.allrounders || [];
      })

      // FAILED
      .addCase(getPlayers.rejected, (state, action) => {
        state.isLoading = false;

        state.error = action.payload;
      });
  },
});

export default playerSlice.reducer;
