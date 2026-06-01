import { getGallery } from "../action/Gallery.action";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // "id": "8",
    mainGallery: [],
    isLoading : false,
    error: "",
    message : ""
}

const galleryslice = createSlice({
    name:"mainGallery",
    initialState,
    extraReducers :(builder)=> {
        builder
        .addCase(getGallery.rejected,(state)=>{
            state.isLoading = false
            state.error = "COULDNT LOAD GALLERY SLICE and ACTION "
        })
        .addCase(getGallery.pending,(state)=>{
            state.isLoading = true
            
        })
        .addCase(getGallery.fulfilled,(state,action)=>{
            state.isLoading = false
            state.message = "LOADING SLICE AND ACTION for getGallery"
            
            state.mainGallery = action.payload
        })
    }
})

export const galleryAction = galleryslice.action
const galleryReducer = galleryslice.reducer

export default galleryReducer