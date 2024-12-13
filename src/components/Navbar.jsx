import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className='flex flex-row gap-20 bg-rose-300 h-16 items-center justify-center  text-xl w-screen lg:w-[70vw]  '>
    <NavLink to="/">
        Home
    </NavLink>

    <NavLink to="/pastes">
        Notes
    </NavLink>


    </div>
  )
}

export default Navbar