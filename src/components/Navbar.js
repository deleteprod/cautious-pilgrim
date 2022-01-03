import React from 'react'
import logo from '../assets/devsci-logo.svg'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftSide'></div>
            <img align='left' src={logo} alt='Logo' width='50px' height='50px' />
            <div className='rightSide'></div>
        </div>
    )
}

export default Navbar
