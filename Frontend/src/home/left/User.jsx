import React from 'react'
import Users from './Users';
import useUserGetAllUsers from '../../context/useUserGetAllUsers';

function User() {
  const [allUsers, ] = useUserGetAllUsers;
  console.log(allUsers);
  return (
    <div className=" py-2 flex-binny overflow-y-auto" style={{maxHeight:"calc(84vh - 1vh)"}}>
        <Users></Users>
        <Users></Users>
        <Users></Users>
        <Users></Users>
        <Users></Users>
        <Users></Users>
        <Users></Users>
        <Users></Users>
        <Users></Users>


    </div>
  );
}

export default User
