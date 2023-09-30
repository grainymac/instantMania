import React from 'react'
import { Link } from 'react-router-dom'
import { ItypeHero } from './ItypeHero'
import { ItypeCard } from './ItypeCard'

export const IType = () => {
    return (
        <div className='itype-page-container'>
            <ItypeHero />
            <Link className='gallery-link' to='/itypegallery'>Gallery</Link>
            <div className='itype-page-film'>
                <ItypeCard />
            </div>
        </div>
    )
}
