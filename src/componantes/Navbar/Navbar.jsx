// import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
      <h1>VILLA</h1>
      <ul>
        <li> <Link to="/" className='link'> Home</Link></li>
        <li> <Link to="/About" className='link'> Properties </Link> </li>
        <li>  <Link to="Gallary" className='link'> Details</Link></li>
        <li>  <Link to="Contact" className='link'>  Contact</Link></li>
      </ul>      
         <button >Schedule a visit</button>
    </div>
  )
}
export default Navbar