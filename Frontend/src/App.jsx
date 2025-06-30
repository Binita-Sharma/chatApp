import React from 'react'
import Left from './home/leftpart/Left'
import Right from './home/rightpart/Right'
import Logouts from './home/left1/Logouts'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/AuthProvider'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  const { authUser } = useAuth();
  console.log(authUser);


  return (
    <>
      <Routes>
        <Route path="/" 
        element={
          authUser ? (
            <div className='flex h-screen'>
              <Logouts/>
              <Left/>
              <Right/>
            </div>
          ) : (
            <Navigate to={"/login"} />
          )
        }/>
      <Route 
      path="/login"
       element={authUser ? <Navigate to={"/"}/> : <Login/>} />

      <Route 
      path="/signup" 
      element={authUser ? <Navigate to={"/"}/> : <Signup/>} />
      </Routes>
    </>
  );
}

export default App;
