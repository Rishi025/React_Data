import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./Data";


const userReducerData = createSlice({
    name:'users',
    initialState:userData,
    reducers:{
        // addUsers: (state,action)=>{

        // }
    }
})

export default userReducerData.reducer;