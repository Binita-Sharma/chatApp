import React from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import { useAuth } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function Logouts() {
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage and cookies
    localStorage.removeItem("messenger");
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Update auth state
    setAuthUser(undefined);

    // Redirect to login page
    navigate("/login");
  };
  return (
    <div className='w-[4%] bg-slate-950 text-white flex flex-col justify-end'>
         <div className='p-3 align-bottom'>
              <button onClick={handleLogout}>
               <AiOutlineLogout className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
              </button>
         </div>
    </div>
  )
}
