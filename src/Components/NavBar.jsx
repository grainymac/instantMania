import React from 'react'
import { NavLink } from 'react-router-dom'

import './componentsStyles.css'

export const NavBar = () => {
    return (
        <>
        <div className='navbar-container'>
            <div className='logo-container'>
                <NavLink to='/' className='nav-links'><h1>instantMania</h1></NavLink>
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