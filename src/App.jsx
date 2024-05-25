import React from 'react'
import Home from "./pages/Home"
import './App.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Outlet/>

    </div>
  )
}

export default App