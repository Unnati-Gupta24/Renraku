import React from 'react'
import User from './User';

function Users() {
  return (
    <div style={{ maxHeight: "calc(78vh" }} className="overflow-y-auto">
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
    </div>
  );
}

export default Users
