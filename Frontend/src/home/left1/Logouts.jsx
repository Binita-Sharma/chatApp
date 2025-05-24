import React from 'react'
import { AiOutlineLogout } from "react-icons/ai";

export default function Logouts() {
  return (
    <div className='w-[4%] bg-slate-950 text-white flex flex-col justify-end'>
         <div className='p-3 align-bottom'>
              <button>
               <AiOutlineLogout className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
              </button>
         </div>
    </div>
  )
}
