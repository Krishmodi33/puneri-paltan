import { createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";

export const getSinglePlayer = createAsyncThunk(
  "singlePlayer/getSinglePlayer",

  async (id, thunkAPI) => {
    try {
      const res = await myAxios.get(
        `/single_player?id=${id}`
      );

      const data = res?.data?.data ?? res?.data;
      const playerData = Array.isArray(data) ? data[0] : data;

      return playerData;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);