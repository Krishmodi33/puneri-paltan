import { createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";

export const getPlayers = createAsyncThunk(
  "players/getPlayers",

  async (_, thunkAPI) => {
    try {
      // MULTIPLE API CALLS
      const [raidersres, defendersres, allroundersres] = await Promise.all([
        myAxios.get("/player_list?cat_id=1"),
        myAxios.get("/player_list?cat_id=2"),
        myAxios.get("/player_list?cat_id=3"),
      ]);

      console.log(raidersres.data);
      console.log(defendersres.data);
      console.log(allroundersres.data);

      // RETURN OBJECT
      return {
        raiders: raidersres.data || "ALL RAIDERS COULDNT FETCH",
        defenders: defendersres.data || "ALL DEFENDERS COULDNT FETCH",
        allrounders: allroundersres.data || "ALL ALLROUNDERS COULDNT FETCH",
      };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
