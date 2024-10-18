import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Nabbar/Navbar'

function Layout() {
  return (
    <div style={{overflowX:"hidden"}}>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout