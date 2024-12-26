import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";



const userInfo:User = {
    name : "manish basnet", 
    age : 22
}

const userSlice = createSlice({
    name : "user", 
    initialState : userInfo, 
    reducers : {
        setName(state:User,action:PayloadAction<User>){
            state.name = "hahahehehuhu"
        }, 
        setAge(state:User,action:PayloadAction<User>){
            state.age = 12
        }
    }
})
// actions 
export const {setName,setAge} = userSlice.actions
export default userSlice.reducer

