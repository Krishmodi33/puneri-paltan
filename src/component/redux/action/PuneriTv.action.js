import { createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";


export  const getpuneritvSeasons = createAsyncThunk("/gallery",async(_,thunk)=>{
    
    try{

        const ids = [5, 6, 7];

        const responses = await Promise.all(
            ids.map((id) => myAxios.get(`puneri_tv_list?cat_id=${id}`))
        );

        const seasons = responses.map((res) => res.data);

        return { seasons };

    }catch(error){
        console.log(error)
        throw error
    }


})