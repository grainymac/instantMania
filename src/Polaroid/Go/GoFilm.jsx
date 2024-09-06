import React from 'react'
import { GoCard } from './GoCard'
import './Go.css'

export const GoFilm = () => {
    return (
        <>
            <h1 className='go-header'>Polaroid Go Film & Frames</h1>
            <div className='go-page-container'>
                <div className='go-page-film'>
                    <GoCard />
                </div>
            </div>
        </>
    )
}
