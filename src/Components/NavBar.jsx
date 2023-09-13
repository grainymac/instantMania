import React from 'react'
import './componentsStyles.css'

export const NavBar = () => {
    return (
        <>
        <div className='navbar-container'>
            <div className='logo-container'>
                <img src='https://www.polaroid.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.17f08b4a.png&w=256&q=75' alt='logo' />
            </div>
            <div className='links-container'>
                <ul className='links'>
                    <li>Home</li>
                    <li>News</li>
                    <li>Instant Film</li>
                </ul>
            </div>
        </div>
        </>
    )
}