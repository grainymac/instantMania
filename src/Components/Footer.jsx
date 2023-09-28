import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='footer-container'>
            <footer>
                <div className='footer-links-container'>
                    <ul className='links'>
                        <li><NavLink to='/' className='nav-links'>About</NavLink></li>
                        <li><NavLink to='/news' className='nav-links'>Development</NavLink></li>
                        <li><NavLink to='/instant' className='nav-links'>Support</NavLink></li>
                        <li><NavLink to='/instant' className='nav-links'>Socials</NavLink></li>
                    </ul>
                </div>
                <h4>
                    Created and designed by<br />
                    Ian McIntosh
                </h4>
            </footer>
        </div>
    )
}

