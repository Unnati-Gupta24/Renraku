import React from 'react'
import { BsFillSendFill } from "react-icons/bs"

function Type() {
  return (
    <>
      <div className="flex space-x-3 h-[7vh] text-center">
        <div className="w-[95%] mx-4">
          <input
            type="text"
            placeholder="Type here"
            className="border-[2px] border-emerald-900 rounded-lg flex items-center w-full py-3 px-3 grow outline-none"
          />
        </div>
        <button className="button button-primary">
          <BsFillSendFill />
        </button>
      </div>
    </>
  );
}

export default Type
