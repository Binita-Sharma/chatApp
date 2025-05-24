import React from 'react'
import Left from './home/left/Left'
import Right from './home/right/Right'
import Logouts from './home/left1/Logouts'

export default function App() {
  return (
    <>
      <div className='flex h-screen'>
      <Logouts></Logouts>
      <Left></Left>
      <Right></Right>
      </div>
    </>
  )
}
