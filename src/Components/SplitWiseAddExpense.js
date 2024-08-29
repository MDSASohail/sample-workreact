import {names} from '../Data'

function SplitWiseAddExpense() {
  return (
    <div className='border-2 backgroundLight w-full h-screen  border-red-700 flex justify-center items-center'>
         <div className='p-3 rounded-md text-white bg-red100'>
            <div className='relative'>
                <h1 >Members</h1>
                <textarea className='bg-transparent w-full outline-none border-2 border-gray-300 rounded-md' name="" id=""  rows={2} ></textarea>
                  
                {/* <div className='absolute bg-white w-full border-2'>
                    <p>Sohail</p>
                    <p>Jubair</p>
                </div> */}
            </div>
            <div>
                <h1 >Description</h1>
                <textarea className='bg-transparent outline-none border-2 border-gray-300 w-full rounded-md' name="" id="" rows={2} ></textarea>
            </div>
            <div className='my-4'>
                <p >Paid by {
                      <select  name="" id="" className='bg-voilet20 text-center  transition-colors hover:bg-voilet100 hover:text-white  rounded-md  outline-none   text-voilet100 '>
                         <option value="">You</option>
                         {names.map(item=><option>{item}</option>)}
                      </select>
                    } and split {
                        <select name="" id="" className='bg-voilet20 text-center  outline-none transition-colors hover:bg-voilet100 hover:text-white  rounded-md     text-voilet100 '>
                            <option value="">Equally</option>
                            <option value="">Unequally</option>
                        </select>
                    }</p>
            </div>
            <div className='text-center mt-3'>
                <button  className='bg-voilet20 text-center w-52  transition-colors hover:bg-voilet100 hover:text-white  rounded-md text-2xl  px-6   py-1  text-voilet100 '>Add</button>
            </div>

         </div>
    </div>
  )
}

export default SplitWiseAddExpense