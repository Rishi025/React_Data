import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./Data";

const userSlice = createSlice({
    name:"kishan",
    initialState:userData,
    reducers:{
        addUsers:(state,action)=>{

            console.log(state)
            // console.log(action)
            console.log(action.payload)

            state.push(action.payload)

        },

        // addUsers:(state,action)=>{

        // }

        // ,

        // addUsers:(state,action)=>{

        // }
    }

})

export const {addUsers} = userSlice.actions;
export default userSlice.reducer;