import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h className='logo'>SBFoods</h>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
