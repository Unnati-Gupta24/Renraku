import React from 'react'
import { TbLogout2 } from "react-icons/tb"

function Logout() {
  return (
    <div className="w-[4%] bg-zinc-950 text-white flex flex-col">
      <div className="absolute bottom-0 left-0">
        <button>
          <TbLogout2 className="text-5xl p-2 hover:bg-gray-700 rounded-full duration-300" />
        </button>
      </div>
    </div>
  );
}

export default Logout
