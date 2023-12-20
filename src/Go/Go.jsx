import React from 'react'
import { GoHero } from './GoHero'
import { GoCard } from './GoCard'
import './go.css'

export const Go = () => {
    return (
        <>
            <GoHero />
            <div className='go-page-container'>
                <div className='go-page-film'>
                    <GoCard />
                </div>
            </div>
        </>
    )
}
