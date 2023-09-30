import React from 'react'
import { Link } from 'react-router-dom'
import { GoHero } from './GoHero'
import { GoCard } from './GoCard'
import './go.css'

export const Go = () => {
    return (
        <div className='go-page-container'>
            <GoHero />
            <Link className='gallery-link' to='/spectragallery'>Gallery</Link>
            <div className='go-page-film'>
                <GoCard />
            </div>
        </div>
    )
}
