import {createSlice} from '@reduxjs/toolkit'
import {data} from '../Data'
const ExternalSlice=createSlice({
    name:"ExternalSlice",
    initialState:{user:JSON.parse(localStorage.getItem("financeUser"))||null,pageNo:0 ,allExpences:[],allExpencesToSHow:[],lengthOfFilteredData:0,monthlyDetail:data},
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
        },
        setAllExpencesToShow:(state,action)=>{
           state.allExpencesToSHow=action.payload
        },
        // setTotal:(state,action)=>{
        //     //Initalizing
        //     if(action.payload.length>=3)
        //     {
        //         const a=[
        //             { text: "Expense", amount:action.payload[0], bg: "bg-red100",bgColor:"#fd3c4a" },
        //             { text: "Income", amount:action.payload[1], bg: "bg-green-900",bgColor:"#00a86b" },
        //             { text: "Balance", amount:action.payload[1]-action.payload[0] , bg: "bg-voilet100",bgColor:"#7f3dff" },
                    
        //         ]
        //         state.total=a;
        //         return;
        //     }
        //   const updated=  state.total.map(item=>{
        //         if(item.text===action.payload[0])
        //         {
        //                item.amount=action.payload[1]+item.amount
                       
        //         }
        //         return item;
        //     })
        //     console.log("Updated total",updated,action.payload)
        //     state.total=updated
        // },
        setSingleExpense:(state,action)=>{
            state.allExpences=[action.payload,...state.allExpences]
        },
        setMonthlyDetail:(state,action)=>{
            state.monthlyDetail=action.payload
        }
    }
})

export const {user,setPageNo,setAllExpences,setLengthOfFilteredData,setTotal,setSingleExpense,setMonthlyDetail,setAllExpencesToShow}=ExternalSlice.actions;
export default ExternalSlice.reducer;