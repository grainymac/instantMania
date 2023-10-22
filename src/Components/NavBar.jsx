import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { polaroidFilmData } from '../data/polaroidFilmData'
import './componentsStyles.css'


export const NavBar = () => {
    const [query, setQuery] = useState('')

    const filteredResults = polaroidFilmData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    const limitedResults = filteredResults.slice(0, 5)

    const resetSearchBar = () => {
        setQuery('')
    }

    return (
        <>
            <div className='navbar-container'>
                <div className='logo-container'>
                    <NavLink to='/' className='nav-links'><h1>instantMania</h1></NavLink>
                </div>

                <div className='search-container'>
                    <input className='searchbar' placeholder='Search for Polaroid Film & Frames' type='text' onChange={e => setQuery(e.target.value)} value={query} />
                    {query && (
                        <div className='result-container'>
                            <ul className='result-list'>
                                {limitedResults.map((result, index) => (
                                    <li className='result' key={index}>
                                        <Link onClick={resetSearchBar} className='result-link' to={result.link}>{result.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <nav className='links-container'>
                    <NavLink to='/' className='nav-links'>Home</NavLink>
                    <NavLink to='/news' className='nav-links'>News</NavLink>
                    <div className='nav-dropdown'>
                        <NavLink to='/instant' className='nav-links'>Instant Film</NavLink>
                            <div className='dropdown-content'>
                                <NavLink to='/instant' className='dropdown-item'>All Instant Film</NavLink>
                                <NavLink to='/polaroid' className='dropdown-item'>600</NavLink>
                                <NavLink to='/itype' className='dropdown-item'>i-Type</NavLink>
                                <NavLink to='/go' className='dropdown-item'>Go</NavLink>
                                <NavLink to='/sx' className='dropdown-item'>SX-70</NavLink>
                                <NavLink to='/spectra' className='dropdown-item'>Spectra</NavLink>
                            </div>
                    </div>
                    <NavLink to='/galleries' className='nav-links'>Galleries</NavLink>
                </nav>
            </div>
        </>
    )
}