import React from 'react'
import Messaging from './Messaging'
import useGetMessage from '../../context/useGetMessage.js';

function Message() {
  const { messages } = useGetMessage();
  console.log(messages);
  return (
    <>
    <div className="" style={{minHeight: "calc(88vh - 10vh)"}}>
      <Messaging />
    </div>
    </>
  );
}

export default Message;
