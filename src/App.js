import FirstPage from "./Components/FirstPage";
import axios from "axios";
import {BrowserRouter as Router, Routes,Route,Navigate} from 'react-router-dom'
import './App.css'
import SignUpPage from "./Components/SignUpPage";
import Login from "./Components/Login";
import Success from "./Components/Success";
import ExpanseCom from "./Components/ExpanseCom";
import ListOfExpenses from "./Components/ListOfExpenses";
import Home from "./Components/Home";
import {setAllExpences} from './Store/ExternalSlice';
import MonthlyTransection from "./Components/Monthly Transection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SplitWiseAddExpense from "./Components/SplitWiseAddExpense";


function App() {
  // const d=useSelector(state=>state.internalData);
  const navigate=useNavigate();
  const {user}=useSelector(state=>state.externalData);
  const dispatch=useDispatch();
  // console.log("User is ",user)
  useEffect(()=>{
           if(!user)
             navigate('/')
  },[user])

  //Fetching all expenses only when we have user
  useEffect(()=>{
           if(user)
           {
              try {
                  const fetchExpenses=async()=>{
                    const allExpenses=await axios.post('http://localhost:8000/expense/allExpense',{userId:user._id});
                    // console.log("All Expenses are",allExpenses.data);
                    dispatch(setAllExpences(allExpenses.data));
                  }
                  fetchExpenses();
              } catch (error) {
                console.log("Error in fetching Expenses");
              }
           }
  },[user])
  
  return (
    <>
        {/* <Router> */}
          <Routes>
            <Route path="/home" element={user?<Home/>:<Navigate to={'/'}/>}/>
            <Route path="/splitWise" element={<SplitWiseAddExpense/>}/>
            {/* <Route path="/home" element={<Home/>}/> */}
            <Route path="/" element={user?<Navigate to={'/home'}/>:<FirstPage/>}/>
            <Route path="/login" element={user?<Navigate to={'/home'}/>:<Login/>}/>
            <Route path="/signup" element={user?<Navigate to={'/home'}/>:<SignUpPage/>}/>
            <Route path="/succes" element={<Success/>}/>
            <Route path="/monthlyTransection" element={<MonthlyTransection/>}/>
            
          </Routes>
        {/* </Router> */}
    </>
  );
}

export default App;
