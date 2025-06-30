import React from 'react'

function Chatuser() {
  return (
    <>
      <div className='pl-5 pt-5 pb-5 h-[12vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300'>
        <div>
          <div className="avatar avatar-online">
            <div className="w-14 rounded-full">
              <img src="https://imgs.search.brave.com/lIdqs2QFc1kIBs9hEkXB1OV0wVEg86DnwvMe4SnCLfM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYXBweS1zbWls/aW5nLXdvbWFuLWhh/dC1ibG9vbWluZy1z/cHJpbmctcGFyay1z/cHJpbmctZmFzaGlv/bi1saWZlc3R5bGVf/MTIxODM3LTE4NzA2/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA" />
            </div>
          </div>
        </div>

        <div>
          <h1 className='text-xl'>Binny</h1>
          <span className='text-sm'>Online</span>
        </div>

      </div>
    </>
  )
}

export default Chatuser
