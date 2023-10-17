import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { polaroidFilmData } from '../data/polaroidFilmData'
import './componentsStyles.css'

const getFilteredItems = (query, items) => {
    if (!query) {
        return items
    }

    return items.filter(film => {
        film.title.includes(query)
    })
}



export const NavBar = () => {

    const [query, setQuery] = useState('')

    const items = polaroidFilmData

    const filteredItems = getFilteredItems(query, items)

    return (
        <>
        <div className='navbar-container'>
            <div className='logo-container'>
                <NavLink to='/' className='nav-links'><h1>instantMania</h1></NavLink>
            </div>

            <div>
                <label>Search</label>
                <input type='text' onChange={e => setQuery(e.target.value)} />
                <ul>
                </ul>
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