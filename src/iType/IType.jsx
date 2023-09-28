import React from 'react'
import { ItypeHero } from './ItypeHero'
import { ItypeCard } from './ItypeCard'

export const IType = () => {
    return (
        <div className='itype-page-container'>
            <ItypeHero />
            <div className='itype-page-film'>
                <ItypeCard />
            </div>
        </div>
    )
}
