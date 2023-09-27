import React from 'react'
import { GoHero } from '../Go/GoHero'
import { GoCard } from '../Go/GoCard'

export const Go = () => {
    return (
        <div className='go-page-container'>
            <GoHero />
            <div className='go-page-film'>
                <GoCard />
            </div>
        </div>
    )
}
