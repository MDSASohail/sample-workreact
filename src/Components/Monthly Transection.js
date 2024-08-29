import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import MonthlyDetail from './MonthlyDetail'
import { data } from '../Data'
import EachExpense from './EachExpense'
import HomeBar from './HomeBar'
import Total from './Total'
import AllItemsAndFilters from './AllItemsAndFilters';
import FilterOptions from './FilterOptions'
import { useSelector } from 'react-redux';
function MonthlyTransection() {

    const chartData = {
        labels: data.map(item => item.text),
        datasets: [
            {
                data: data.map(item => item.amount),
                backgroundColor: data.map(item => item.bgColor)
            }
        ]
    };
    return (
        <div className='   homeFlex h-screen flex box-border  overflow-auto'>
            <HomeBar />
            <div className=' allData  flex-[8] relative linearGradiant'>
                <div className={`  transectionDetail  `}>
                    <div className=''>
                        <div className=''>
                            <div className='border-b-2 border-b-gray-400 mx-3 mb-3'>
                                <div className=' mx-auto mt-4'>
                                    <Total />

                                </div>
                            </div>
                            <div >
                                <h1 className='text-center text-2xl font-medium'>Monthly Detail</h1>
                                <div className='flex justify-around totalDivMT'>
                                    <div className='flex flex-col mt-4 '>
                                        <MonthlyDetail />
                                        <div style={{ width: '50%', margin: '0 auto' }}>
                                            <h2 className='bg-voilet20 text-center w-40 mx-auto  rounded-2xl text-2xl  px-6   py-1  text-voilet100 '>Pie Chart</h2>
                                            <Pie data={chartData} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-4 border-l-2 border-gray-400'>
                                        <div>
                                            <h1 className='bg-voilet20 text-center w-40 mx-auto  rounded-2xl text-2xl  px-6   py-1  text-voilet100 '>Category</h1>
                                            <div className='flex flex-wrap justify-around monthlyTransectionEachExpense'>
                                                {data.map(item => <EachExpense key={item.id} bg={item.bg} amount={item.amount} text={item.text} />)}
                                            </div>
                                        </div>
                                        <div style={{ width: '50%', margin: '0 auto' }}>
                                            <h2 className='bg-voilet20 text-center w-40 mx-auto  rounded-2xl text-2xl  px-6   py-1  text-voilet100 '>Pie Chart</h2>
                                            <Pie data={chartData} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <AllItemsAndFilters />

                    </div>
                </div>




            </div>
        </div>
    )
}

export default MonthlyTransection