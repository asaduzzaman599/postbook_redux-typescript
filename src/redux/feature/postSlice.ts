import { createSlice } from "@reduxjs/toolkit"
import { Post } from "../../model/model"

export interface PostState {
    allPost:Post[],
    isLoading:boolean,
    errorMessage:string
}
const initialState:PostState={
    allPost:[],
    isLoading:true,
    errorMessage:''
}

export const postSlice = createSlice({
    name:"LoadPost",
    initialState,
    reducers:{
        LOAD_POST:(state,action)=>{
            state.allPost = action.payload 
        }
    }

})

export const {LOAD_POST} = postSlice.actions

export default postSlice.reducer