import { useMemo } from 'react';
import {format} from 'timeago.js'
import IMG from '../Images/Shopping.png'
import { useDispatch, useSelector } from 'react-redux'
import { setLengthOfFilteredData ,setPageNo} from '../Store/ExternalSlice'

function ListOfExpenses() {
  // const date=new Date();
  // console.log(date.toLocaleTimeString())
  const { pageNo, allExpences } = useSelector(state => state.externalData);
  console.log("AllExpenses from store",allExpences)
  // const [filteredData,setFilteredData]=useState(null);
  const { ext, shortBy, category } = useSelector(state => state.internalData);
  const dispatch = useDispatch();
  const filteredData = useMemo(() => {
    let data = allExpences.slice();
    if (category && category!=="All") {
      console.log("Category", category)
      data = data.filter(item => item.category === category);
    }
    
    if (shortBy) {
      if (shortBy === "Lowest") {
        data = data.sort((a, b) => a.amount - b.amount);

      }
      else if (shortBy === "Highest") {
        
        data = data.sort((a, b) => b.amount - a.amount);
      }else if(shortBy==="Newest")
      {
        data = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      }else
      {
        data = data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

      }
      //Have to make for newest and oldest.
    }

    
    console.log("Filter ",data)
    dispatch(setLengthOfFilteredData(data.length));
    dispatch(setPageNo(0));
    return data;
  }, [ext, shortBy, category, allExpences]);

  console.log("Filtered Data ",filteredData)
  return (
    <div>

      {filteredData.slice(pageNo * 10, (pageNo + 1) * 10).map((item) => <li key={item.id} className='list-none border-b-2 flex p-2'>
        <div className='flex-[2]'>
          <img src={IMG} alt="" />
        </div>
        <div className='flex-[6]'>
          <h1 className='font-bold'>{item.category}</h1>
          <p className='text-sm text-light20'>{item.description}</p>
        </div>
        <div className='flex-[2]'>
          <h3 className={`font-medium ${item.category === "Income" ? 'text-green100' : "text-red100"}`}>{item.category === "Income" ? '+ ' + item.amount : '- ' + item.amount}</h3>
          <h3 className='text-light20'>{format(item.createdAt)}</h3>
        </div>
      </li>)}
    </div>
  )
}

export default ListOfExpenses