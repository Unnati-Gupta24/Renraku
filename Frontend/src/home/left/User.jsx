import React from 'react'

function User() {
  return (
    <div>
      <div className="flex space-x-4 px-6 py-7 hover:bg-slate-600 duration-300">
        <div className="avatar">
          <div className="w-14 ring-primary ring-offset-base-100 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1>Ankit Pathak</h1>
          <span>Ankit@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default User
