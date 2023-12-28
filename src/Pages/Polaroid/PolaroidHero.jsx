import React from 'react'
import './Polaroid.css'
import polaroid600 from './assets/600.png'

export const PolaroidHero = () => {
    return (
        <>
            <div className="hero-container polaroid600-hero-container">
                <img src={polaroid600} alt='polaroid 600 camera' className='polaroid600-hero '/>
            </div>
        </>
    )
}