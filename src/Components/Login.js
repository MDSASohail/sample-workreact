import {useDispatch} from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import {user} from '../Store/ExternalSlice'
import { useRef, useState } from 'react';
import axios from 'axios';
function Login() {
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const [error,setError]=useState({status:false,text:""})
   const userName=useRef();
   const password=useRef();
  const handleLogin=async(e)=>{
          e.preventDefault();
          const userData={email:userName.current.value,password:password.current.value}
          try {
             console.log("Loginging")
             setError({status:false,text:""})
              const userDataget=await axios.post('http://localhost:8000/user/login',{userData});
              // console.log("User is ",userData.data)
             dispatch(user(userDataget.data));
             localStorage.setItem("financeUser",JSON.stringify(userDataget.data))
             navigate('/');

          } catch (error) {
            setError({status:true,text:error.response.data.result})
            console.log("Error in login",error.response.data.result);
          }
  }
  return (
    <div>
        <div className=' hidden mt-2 hideShow fixed w-full top-0 text-xl font-bold text-center'>
                    <svg className="w-[30px] absolute cursor-pointer  left-4 h-[30px] text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                    </svg>           <p>Login</p>
        </div>
        <div className='h-screen w-screen flex justify-center items-center'>
            
            <div className=' w-96'>
                
                <form action="">
                    
                    <input ref={userName} type="email" placeholder='Email' className='block outline-none border-2 w-full py-2 px-4 rounded-2 my-4 border-gray-100 rounded-2xl'/>
                   <div className='pb-6  relative'>
                    <input ref={password} type="password" placeholder='Password' className='block outline-none border-2 w-full py-2 px-4 rounded-2  border-gray-100 rounded-2xl'/>
                     {error.status && <span className='absolute bottom-0  text-red40 text-sm'>{error.text}</span>}
                   </div>
                    <div className='text-center'>
                    <button onClick={handleLogin} className='bg-voilet20 py-3 mt-5 rounded-2xl text-2xl hover:bg-voilet100 w-80 hover:text-white text-voilet100'>Login</button>
                     
                      <button className='my-3 text-voilet100'>
                        Forget Password?
                      </button>
                      <div className='my-4'>
                        <p>Don't have an account yet? <Link to={'/signup'}><button className='text-voilet100 underline'>Sign Up</button></Link></p>
                      </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login