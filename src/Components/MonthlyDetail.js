import React from 'react'
import EachExpense from './EachExpense'
import {data} from '../Data'
function MonthlyTransection() {
    //Monthly expense component
  return (
    <div className="Total2">
                        <div className='text-center'>
                            <select name="" id="" className='mx-2 bg-voilet20  rounded-2xl text-2xl hover:bg-voilet100 px-6  hover:text-white py-1  text-voilet100 outline-none'>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2020</option>
                                <option value="2021">2021</option>
                                
                            </select>
                            <select name="" id="" className='bg-voilet20  rounded-2xl text-2xl hover:bg-voilet100 px-6  hover:text-white py-1  text-voilet100 outline-none' >
                                <option value="Jan">January</option>
                                <option value="Feb">February</option>
                                <option value="Mar">March</option>
                                <option value="Apr">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="Sep">September</option>
                                <option value="Oct">October</option>
                                <option value="Nov">November</option>
                                <option value="Dec">December</option>
                            </select>
                        </div>
                        <div className='flex  flex-wrap justify-around allExpenseDiv'>
                            {data.map((item, index) => <EachExpense key={index} bg={item.bg} amount={item.amount} text={item.text} />)}

                        </div>
                    </div>
  )
}

export default MonthlyTransection