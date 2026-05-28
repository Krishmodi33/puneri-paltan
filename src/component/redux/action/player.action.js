import { createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";

export const getPlayers = createAsyncThunk(
  "players/getPlayers",

  async (_, thunkAPI) => {
    try {

      // Category API
      const res = await myAxios.get("/category_list");

      console.log(res.data);

      // Flatten all players
      const allPlayers = res.data.flatMap((category) =>
        category.player_list.map((player) => ({
          ...player,

          // Optional category name
          category_name: category.category_name,
        }))
      );

      console.log(allPlayers);

      return allPlayers;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);