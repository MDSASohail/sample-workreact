import React from 'react'

function Success() {
  return (
    <div className='w-full absolute top-0 left-0 h-screen flex justify-center items-center successBG'>
            <div className='w-80 bg-white px-6 py-10 rounded-lg'>
                <div className='w-12 h-12 rounded-full flex justify-center items-center bg-voilet100 mx-auto'>
                    <p className='border-l-4 w-6 border-b-4 h-3 -rotate-4 border-white rounded-bl-lg -rotate-45'></p>
                </div>
                <p className='text-center'>Your transection has been success</p>
            </div>
    </div>
  )
}

export default Success