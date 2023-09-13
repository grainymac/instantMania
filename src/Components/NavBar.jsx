import React from 'react'
import { NavLink } from 'react-router-dom'

import './componentsStyles.css'

export const NavBar = () => {
    return (
        <>
        <div className='navbar-container'>
            <div className='logo-container'>
                <NavLink to='/'><img src='https://www.polaroid.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.17f08b4a.png&w=256&q=75' alt='logo' /></NavLink>
            </div>
            <div className='links-container'>
                <ul className='links'>
                    <li><NavLink to='/' className='nav-links'>Home</NavLink></li>
                    <li><NavLink to='/news' className='nav-links'>News</NavLink></li>
                    <li><NavLink to='/instant' className='nav-links'>Instant Film</NavLink></li>
                </ul>
            </div>
        </div>
        </>
    )
}