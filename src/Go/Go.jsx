import React from 'react'
import { GoHero } from './GoHero'
import { GoCard } from './GoCard'

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
