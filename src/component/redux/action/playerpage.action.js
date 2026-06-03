import { createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";

export const getPlayers = createAsyncThunk(
  "players/getPlayers",

  async (_, thunkAPI) => {
    try {
      const [raidersRes, defendersRes, allroundersRes] = await Promise.all([
        myAxios.get("/player_list?cat_id=1"),
        myAxios.get("/player_list?cat_id=2"),
        myAxios.get("/player_list?cat_id=3"),
      ]);

      return {
        raiders: raidersRes.data,
        defenders: defendersRes.data,
        allrounders: allroundersRes.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
