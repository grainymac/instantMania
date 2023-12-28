import React from 'react'
import { ItypeHero } from './ItypeHero'
import { ItypeCard } from './ItypeCard'
import './itype.css'

export const IType = () => {
    return (
        <>
            <ItypeHero />
            <h1 className='itype-header'>Polaroid i-Type Film & Frames</h1>
            <div className='itype-page-container'>
                <div className='itype-page-film'>
                    <ItypeCard />
                </div>
            </div>
        </>
    )
}
