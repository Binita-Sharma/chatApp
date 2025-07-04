import React from 'react'

function Users({user}) {
  return (
    <div>
      <div className='flex space-x-4 px-8 py-7 hover:bg-slate-900 duration-300 cursor-pointer'>
        <div className="avatar avatar-online">
          <div className="w-16 rounded-full">
            <img src="https://imgs.search.brave.com/lIdqs2QFc1kIBs9hEkXB1OV0wVEg86DnwvMe4SnCLfM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYXBweS1zbWls/aW5nLXdvbWFuLWhh/dC1ibG9vbWluZy1z/cHJpbmctcGFyay1z/cHJpbmctZmFzaGlv/bi1saWZlc3R5bGVf/MTIxODM3LTE4NzA2/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA" />
          </div>
        </div>
        <div>
          <h1 className='font-bold'>
            {user.fullname}
          </h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default Users
