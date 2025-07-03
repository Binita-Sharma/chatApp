import React from 'react'
import Users from './Users';
import useUserGetAllUsers from '../../context/useUserGetAllUsers';

function UserList() {
  const [allUsers] = useUserGetAllUsers();
  console.log(allUsers);
  return (
<div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div
        className="py-2 flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      >
        {allUsers.map((user, index) => {
         return <Users key={index} user={user} />
       })}
      </div>
    </div>  
    );
}

export default UserList;
