import React from 'react'
import { ItypeCard } from './ItypeCard'
import './IType.css'

export const IType = () => {
    return (
        <>
            <h1 className='itype-header'>Polaroid i-Type Film & Frames</h1>
            <div className='itype-page-container'>
                <div className='itype-page-film'>
                    <ItypeCard />
                </div>
            </div>
        </>
    )
}
