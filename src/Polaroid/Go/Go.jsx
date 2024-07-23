import React from 'react'
import { GoHero } from './GoHero'
import { GoCard } from './GoCard'
import './go.css'

export const Go = () => {
    return (
        <>
            <GoHero />
            <h1 className='go-header'>Polaroid Go Film & Frames</h1>
            <div className='go-page-container'>
                <div className='go-page-film'>
                    <GoCard />
                </div>
            </div>
        </>
    )
}
