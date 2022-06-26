import { createSlice } from "@reduxjs/toolkit"
import { Post } from "../../model/model"

export interface PostState {
    posts:Post[],
    isLoading:boolean,
    errorMessage:string
}
const initialState:PostState={
    posts:[],
    isLoading:true,
    errorMessage:''
}

export const postSlice = createSlice({
    name:"LoadPost",
    initialState,
    reducers:{
        LOAD_POST:(state,action)=>{
            state.posts = action.payload
            state.isLoading=false 
        }
    }

})

export const {LOAD_POST} = postSlice.actions

export default postSlice.reducer