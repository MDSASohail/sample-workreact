import { Pie } from 'react-chartjs-2';
import EachExpense from './EachExpense'
import { useDispatch, useSelector } from 'react-redux'
import {setShowHide} from '../Store/InternalSlice'
import {setTotal} from '../Store/ExternalSlice'
import axios from 'axios'
import { useEffect } from 'react';
function Total() {
    const {total,allExpences,user}=useSelector(state => state.externalData);
    console.log("In total component",total)
    useEffect(()=>{
            const fetchTotal=async()=>{
                try {
                    const fetchedData=await axios.post('http://localhost:8000/expense/total',{userId:user._id});
                    console.log("Total is ",fetchedData.data)
                    //Making array
                    const ar=[fetchedData.data.Expense,fetchedData.data.Income,fetchedData.data.Balance];
                    dispatch(setTotal(ar))
                } catch (error) {
                    console.log("Error in fetching total",error.message)
                }
            } 
            
            fetchTotal();
    },[allExpences.length])
    //For PieChart
    const chartData = {
        labels: total.map(item => item.text),
        datasets: [
            {
                data: total.map(item => item.amount),
                backgroundColor: total.map(item => item.bgColor)
            }
        ]
    };
    //Total expense till now component
    const {showHide}=useSelector(state=>state.internalData);
    const dispatch=useDispatch();
  return (
    <div className="Total">
                        
                        <div className='text-center  flex justify-center '>
                            <h1 className='bg-voilet20  rounded-2xl text-2xl w-52  px-6   py-1  text-voilet100'>Total</h1>
                        </div>
                        <div className='flex  justify-center allExpenseDiv'>
                            {total.map((item, index) => <EachExpense key={index} bg={item.bg} amount={item.amount} text={item.text} />)}
                        </div>
                        <div className='max-w-96 mx-auto'>
                          <Pie data={chartData} />
                        </div>
                    </div>
  )
}

export default Total