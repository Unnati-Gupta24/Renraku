import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Type from './Type'

function Right() {
  return (
    <div className="w-[70%] bg-zinc-900 text-white">
      <Chatuser></Chatuser>
      <div className="overflow-y-auto" style={{ maxHeight: "calc(88vh - 12vh" }}>
        <Messages></Messages>
      </div>
      <Type></Type>
    </div>
  );
}

export default Right
