import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { polaroidFilmData } from '../data/polaroidFilmData'
import './componentsStyles.css'


export const NavBar = () => {
    const [query, setQuery] = useState('')

    const filteredResults = polaroidFilmData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const limitedResults = filteredResults.slice(0, 5)

    return (
        <>
        <div className='navbar-container'>
            <div className='logo-container'>
                <NavLink to='/' className='nav-links'><h1>instantMania</h1></NavLink>
            </div>

            <div className='search-container'>
                <input className='searchbar' placeholder='Search for Film' type='text' onChange={e => setQuery(e.target.value)} value={query}/>
                {query && (
                    <div className='result-container'>
                        <ul className='result-list'>
                        {limitedResults.map((result, index) => (
                            <li className='result' key={index}>{result.title}</li>
                        ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className='links-container'>
                <ul className='links'>
                    <li><NavLink to='/' className='nav-links'>Home</NavLink></li>
                    <li><NavLink to='/news' className='nav-links'>News</NavLink></li>
                    <li><NavLink to='/instant' className='nav-links'>Instant Film</NavLink></li>
                    <li><NavLink to='/galleries' className='nav-links'>Galleries</NavLink></li>
                </ul>
            </div>
        </div>
        </>
    )
}