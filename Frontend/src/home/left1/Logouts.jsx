import axios from 'axios';
import React from 'react'
//import { useState } from 'react';
import { AiOutlineLogout } from "react-icons/ai";
import Cookies from "js-cookie";
import { useAuth } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function Logouts() {
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();
  
  //const [setLoading] = useState(false);
  const handleLogout = async() => {
    //setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5002/user/logout",
        {},
        {
          withCredentials: true, // Important to clear the jwt cookie
        }
      );

      console.log("Logout successful:", res.data);

      // Clear local storage and cookies
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      //setLoading(false);
    // Update auth state
    setAuthUser(undefined);

    // Redirect to login page
    navigate("/login");


    }catch (error) {
      console.error("Logout failed:", error);
    }

    //localStorage.removeItem("messenger");
    //document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
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
