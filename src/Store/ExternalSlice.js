import {createSlice} from '@reduxjs/toolkit'
import {EachExpenseItem} from '../Data'
import { act } from 'react'
const ExternalSlice=createSlice({
    name:"ExternalSlice",
    initialState:{user:JSON.parse(localStorage.getItem("financeUser"))||null,pageNo:0 ,allExpences:[],lengthOfFilteredData:0},
    reducers:{
        user:(state,action)=>{
            state.user=action.payload
        },
        setPageNo:(state,action)=>{
            state.pageNo=action.payload
        },
        setAllExpences:(state,action)=>{
            state.allExpences=action.payload;
        },
        setLengthOfFilteredData:(state,action)=>{
            state.lengthOfFilteredData=action.payload
        }
    }
})

export const {user,setPageNo,setAllExpences,setLengthOfFilteredData}=ExternalSlice.actions;
export default ExternalSlice.reducer;