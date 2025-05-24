import React from 'react'
import { GrSend } from "react-icons/gr";

function SendBar() {
  return (
    <>
      <div className='flex space-x-3 h-[10vh] text-center bg-gray-800'>
        <div className='w-[70%] mx-4'>
          <input type="text" placeholder="Type here" 
          className="input input-info w-full py-3 px-4 rounded-xl grow outline-none bg-slate-900 mt-1" />
        </div>
        <button className='text-3xl'>
          <GrSend />
        </button>
      </div>
    </>
  )
}

export default SendBar
