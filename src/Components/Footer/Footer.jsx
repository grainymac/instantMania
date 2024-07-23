import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer-container'>
            <footer>
                <div className='footer-links-container'>
                    <ul className='links'>
                        <li><NavLink to='/about' className='nav-links'>About</NavLink></li>
                        <li><NavLink to='/support' className='nav-links'>Support</NavLink></li>
                    </ul>
                </div>
                <h4>
                    Created, developed, and designed by<br />
                    Ian McIntosh
                </h4>
            </footer>
        </div>
    )
}

