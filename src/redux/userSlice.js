import { createSlice } from "@reduxjs/toolkit";

const userSLice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },

        removeUser:(state)=>{
            return null;
        }


    }
})

export const{addUser,removeUser}=userSLice.actions;
export default userSLice.reducer;