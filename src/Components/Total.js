import React from 'react'
import EachExpense from './EachExpense'
import { data } from '../Data'
import { useDispatch, useSelector } from 'react-redux'
import {setShowHide} from '../Store/InternalSlice'
function Total() {
    //Total expense till now component
    const {showHide}=useSelector(state=>state.internalData);
    const dispatch=useDispatch();
  return (
    <div className="Total">
                        <div>
                            {/* <svg onClick={()=>{dispatch(setShowHide(!showHide))}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 hidden showHide absolute left-2 cursor-pointer top-4 text-voilet100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg> */}

                        </div>
                        <div className='text-center  flex justify-center '>
                            <h1 className='bg-voilet20  rounded-2xl text-2xl w-52  px-6   py-1  text-voilet100'>Total</h1>
                        </div>
                        <div className='flex  justify-around allExpenseDiv'>
                            {data.map((item, index) => <EachExpense key={index} bg={item.bg} amount={item.amount} text={item.text} />)}
                        </div>
                    </div>
  )
}

export default Total