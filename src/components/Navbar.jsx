import React from 'react'
import {Link} from "react-router-dom"
import '../styles/Navbar.css'
export default function Navbar() {
  return (
    <>
    <nav className='navmenu'>
      <ul>
        <li ><Link to="/">Home</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
    </>
  )
}
