import React, { useRef } from 'react'
import { setAllExpences } from '../Store/ExternalSlice'
import { setAddExpense } from '../Store/InternalSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
function AddExpense({ bg }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.externalData);
  const amount = useRef();
  const category = useRef();
  const description = useRef();
  const handleSumbit = async (e) => {
    e.preventDefault();
    if (amount.current.value === "" || category.current.value === "" || description.current.value === "") {
      alert("All fields are mondatory");
      return;
    }
    // Change time to mongoDB.
    const expense = { userId: user._id, description: description.current.value, amount: amount.current.value, category: category.current.value };
    // dispatch(setAllExpences(expense));
    //Saving data on database.
    try {
      const savedData = await axios.post('http://localhost:8000/expense/save', { expense });
      try {
        const fetchExpenses=async()=>{
          const allExpenses=await axios.post('http://localhost:8000/expense/allExpense',{userId:user._id});
          console.log("All Expenses are",allExpenses.data);
          dispatch(setAllExpences(allExpenses.data));
        }
        fetchExpenses();
    } catch (error) {
      console.log("Error in fetching Expenses");
    }
      amount.current.value = "";
      category.current.value = "";
      description.current.value = "";
      
    } catch (error) {
      console.log("Error in saving Expense");
    }
    // console.log(expense);

  }
  return (
    <div className='w-full filterOptions    addExpense  absolute top-0  h-full  flex justify-center items-center'>
      <form action="" onSubmit={handleSumbit}>
        <div className={`mainDiv rounded-lg ${bg}`}>
          <div className=' text-white h-1/2 p-4'>
            <div className='relative'>
              <span onClick={() => dispatch(setAddExpense(false))} className='absolute top-2 cursor-pointer'>⬅️</span>
              <p className='text-center text-2xl'>Expense</p>
            </div>
            <div className='mt-20'>
              <p>How much?</p>
              <input type="number" ref={amount} placeholder='Rs' className='text-4xl outline-none bg-transparent' />
            </div>
          </div>
          <div className='bg-white flex flex-col justify-center  h-1/2 rounded-t-3xl   px-3 pt-4 '>
            {bg === "bg-red100" && <div className='w-full' >
              <select name="" id="" ref={category} className='w-full py-2 outline-none'>
                <option value="shopping">Shopping</option>
                <option value="Travel">Travel</option>
                <option value="shopping">Shopping</option>
                <option value="Travel">Travel</option>
                <option value="shopping">Shopping</option>
                <option value="Travel">Travel</option>
              </select>
            </div>}
            <div className='w-full py-2'>
              <input ref={description} type="text" placeholder='Description' className='w-full text-xl outline-none py-2' />
            </div>
            <div className='w-full text-center py-2'>
              <button className='bg-voilet20 w-full  rounded-2xl text-2xl hover:bg-voilet100 px-6 mt-2 hover:text-white py-1  text-voilet100'>Add</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddExpense