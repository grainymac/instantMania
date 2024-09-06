import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import instantMania from './assets/instantmania.svg'


export const NavBar = () => {
    /*
    const [query, setQuery] = useState('')

    const filteredResults = polaroidFilmData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    const limitedResults = filteredResults.slice(0, 5)

    const resetSearchBar = () => {
        setQuery('')
    }
*/
    return (
        <>
            <div className='navbar-container'>
                <div className='logo-container'>
                    <NavLink to='/' className='nav-links'>
                        <img src={instantMania} alt='Instant Mania Logo' className='instantLogo' />
                    </NavLink>
                </div>

                <div className='search-container'>
                    <input className='searchbar' placeholder='Search for Polaroid Film & Frames' type='text' />
                </div>

                <nav className='links-container'>
                    <NavLink to='/' className='nav-links'>HOME</NavLink>
                    <NavLink to='/news' className='nav-links'>NEWS</NavLink>
                    <div className='nav-dropdown'>
                        <NavLink to='/instant' className='nav-links'>FILM</NavLink>
                            <div className='dropdown-content'>
                                <NavLink to='/instant' className='dropdown-item'>All Instant Film</NavLink>
                                <NavLink to='/polaroid' className='dropdown-item'>600</NavLink>
                                <NavLink to='/itype' className='dropdown-item'>i-Type</NavLink>
                                <NavLink to='/go' className='dropdown-item'>Go</NavLink>
                                <NavLink to='/sx' className='dropdown-item'>SX-70</NavLink>
                                <NavLink to='/spectra' className='dropdown-item'>Spectra</NavLink>
                            </div>
                    </div>
                </nav>
            </div>
        </>
    )
}