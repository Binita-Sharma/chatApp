import React from 'react';
import Chatuser from './Chatuser';
import Message from './Message';
import SendBar from './SendBar';

export default function Right() {
  return (
    <>
      <div className="w-[70%] bg-slate-950 text-white">

        <Chatuser></Chatuser>

        <div className="py-2 flex-binny overflow-y-auto" style={{ maxHeight: "calc(88vh - 8vh)"}}>
          <Message></Message>
        </div>

        <SendBar></SendBar>
      </div>
    </>
  );
}
