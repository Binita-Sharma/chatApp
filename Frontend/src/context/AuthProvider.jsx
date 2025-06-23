import React, { createContext, useContext, useEffect, useState } from 'react'

import Cookies from "js-cookie"

//create context
const AuthContext = createContext();


//create provider
export const  AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(undefined);

// Step 3: Load user from cookie/localStorage on first load
  useEffect(() => {
    const jwt = Cookies.get("jwt");
    const localUser = localStorage.getItem("messenger");

    if (jwt && localUser) {
      try {
        setAuthUser(JSON.parse(localUser));
      } catch (err) {
        console.error("Invalid local user data:", err);
        setAuthUser(undefined);
      }
    } else {
      setAuthUser(undefined);
    }
  }, []);  return (
    <AuthContext.Provider value={{authUser, setAuthUser }}>
        {children}
    </AuthContext.Provider>
  );
  
}

export const useAuth = () => useContext(AuthContext); 
