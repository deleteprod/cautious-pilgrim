import React, { useState } from 'react'
import logo from '../assets/devsci-logo.svg'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {

    /* set variable for state to show/hide links */
    const [openLinks] = useState(false)

    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={logo} alt='Logo'/>

                <div className='hiddenLinks'>
                <Link to='/'> Home </Link>
                <Link to='/settings'> Settings </Link>
                <Link to='/jobs'> Jobs </Link>
                <Link to='/home'> Control </Link>
                </div>

            </div>

            
            <div className='rightSide'>
                <Link to='/'> Home </Link>
                <Link to='/settings'> Settings </Link>
                <Link to='/jobs'> Jobs </Link>
                <Link to='/home'> Control </Link>
                <button>
                <ReorderIcon />
                </button>

            </div>
        </div>
    )
}

export default Navbar
