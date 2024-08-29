import { useState } from 'react'

import { Link } from 'react-router-dom'
import ListOfExpenses from './ListOfExpenses'
import FilterOptions from './FilterOptions'
import Total from './Total'
import MonthlyDetil from './MonthlyDetail'
import AllItemsAndFilters from './AllItemsAndFilters'
import HomeBar from './HomeBar'
import { useSelector } from 'react-redux'

function Home() {
    // const [showHide, setShowHide] = useState(true);
    // const [filterShow, setFilterShow] = useState(false);
    const {showHide} =useSelector(state=>state.internalData);

    return (
        <>
            <div className=' border-red-800 homeFlex h-screen flex box-border relative'>
                <HomeBar/>
                <div className='border-2  border-green-800 flex-[8] relative linearGradiant'>
                
                    
                    <AllItemsAndFilters />

                </div>
            </div>
        </>
    )
}

export default Home


