import { getpuneritvSeasons } from "../action/PuneriTv.action";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // name : "",
  // url:"",
  // cat_name : "",
  seasons: [],
  isLoading: false,
  error: "",
  message: "",
};

const puneriSeasonSlice = createSlice({
  name: "PuneriTvSeasons",
  initialState,
  extraReducers: (builders) => {
    builders
      .addCase(getpuneritvSeasons.pending, (state, action) => {
        state.isLoading = true;
        state.message = "LOADING SEASONS";
      })
      .addCase(getpuneritvSeasons.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "COULDNT FETCH SEASONS FROM API";
      })
      .addCase(getpuneritvSeasons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "LOADING COMPLETED";
        state.seasons = action.payload.seasons;
      });
  },
});

export const puneriSeasonAction = puneriSeasonSlice.action;
const puneriSeasonReducer = puneriSeasonSlice.reducer;

export default puneriSeasonReducer;
