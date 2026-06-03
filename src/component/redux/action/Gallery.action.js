import { createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";

export const getGallery = createAsyncThunk("/gallery", async (_, thunk) => {
  try {
    const ids = [1, 3, 4, 7];
    const outerGallery = await Promise.all(
      ids.map((ids) => myAxios.get(`gallary_list?cat_id=${ids}`)),
    );
    const mainGalleryPage = outerGallery.flatMap((res) => res.data);
    // const mainGallery = outerGallery.data
    return mainGalleryPage;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
