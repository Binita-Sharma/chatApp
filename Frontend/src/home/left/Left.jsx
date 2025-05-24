import React from 'react'
import Search from './Search'
import User from './User'

export default function Left() {
  return (
    <div className='w-[30%] bg-black text-white'>
      <h1 className="font-bold text-3xl p-2 px-11">TalkiePie! 🐶</h1>
      <Search></Search>
      <hr></hr>
      <User></User>
    </div>
  )
}
