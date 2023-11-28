import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
     <div>
        <img src="" alt="" />
     </div>
     <div>
     <li> <Link to='/'>Home</Link> </li>
        <ul>
       
        <li>  <Link to='/About'>About</Link> </li>
        <li>  <Link to='/contact'>Contact</Link></li>
        <li>  <Link to='/login'>Login</Link></li>
       
            
        </ul>
     </div>
    </div>
  )
}

export default Navbar
