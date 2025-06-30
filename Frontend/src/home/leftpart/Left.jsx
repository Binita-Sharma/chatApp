import React from 'react'
import Search from './Search'
import User from './User'

function Left() {
  return (
    <div className='w-[30%] bg-black text-gray-300'>
      <h1 className="font-bold text-3xl p-2 px-11">TalkiePie! 🐶</h1>
      <Search/>
      <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(84 - 10vh)"}}
      >
      <User/>
      </div>
    </div>
  );
}

export default Left;
