import React from 'react'
import ReactDOM from "react-dom";
import Left from './home/left/left'
import Right from './home/right/right'
import Logout from './home/left1/Logout'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <>
    {/*  <div className="flex h-screen">
      <Logout></Logout>
      <Left></Left>
      <Right></Right> 
    </div>  */}
    <Signup />
    </>
  )
}

export default App
