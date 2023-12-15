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

        editUsers:(state,action)=>{
            // console.log(action.payload)
            // console.log(state)

            const {id,name,email} = action.payload;
            // console.log(name)
           const userID = 
            state.find((user)=>(
                user.id == id
            ))
            

            if(userID)
            {
                userID.name =name
                userID.email =email
            }

            // console.log(userID.name)
            // console.log(userID.email)


        }

        ,

        deleteUsers:(state,action)=>{
            const {id} = action.payload;
            const userID = 
            state.find((user)=>(
                user.id == id
            ))
            

            if(userID)
            {
               return state.filter((user)=>(
                    user.id !== id
                ))
            }


        }
    }

})

export const {addUsers,editUsers,deleteUsers} = userSlice.actions;
export default userSlice.reducer;