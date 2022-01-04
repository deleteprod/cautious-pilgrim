import React, { useState } from 'react'
import logo from '../assets/devsci.svg'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import '../styles/Navbar.css'

function Navbar() {

    /* set variable for state to show/hide links in the hiddenLinks className */
    const [openLinks] = useState(false)

    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={logo} alt='Logo'/>

                <div className='hiddenLinks'>
                <Link to='/'>Home </Link>
                <Link to='/settings'>Settings </Link>
                <Link to='/jobs'>Jobs </Link>
                <Link to='/home'>Control </Link>
                </div>
                
            </div>

            
            <div className='rightSide'>
                <Link to='/'>Home </Link>
                <Link to='/settings'>Settings </Link>
                <Link to='/jobs'>Jobs </Link>
                <Link to='/home'>Control </Link>
                <button>
                <TocRoundedIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar
