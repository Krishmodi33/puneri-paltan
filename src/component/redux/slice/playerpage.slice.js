import { createSlice } from "@reduxjs/toolkit";
import { getPlayers } from "../action/player.action";

const initialState = {
  raiders: [],
  defenders: [],
  allrounders: [],

  isLoading: false,
  error: "",
  message: "",
};

const playerSlice = createSlice({
  name: "player",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getPlayers.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getPlayers.fulfilled, (state, action) => {
        state.isLoading = false;

        state.raiders = action.payload.raiders;
        state.defenders = action.payload.defenders;
        state.allrounders = action.payload.allrounders;

        state.message = "Players Loaded Successfully";
      })

      .addCase(getPlayers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default playerSlice.reducer;
