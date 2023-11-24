import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/colorPolaroid/IMG_6187.jpg'

export const PoisonedParadise = () => {

    return (
        <div className='film-page-container'>
            <h1>Poisoned Paradise Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    his pack of Poison Paradise Edition Instant Color Film from The Impossible Project is for Polaroid 600-Type cameras, and has hibiscus frames. It contains 8 sheets of instant color film that use an innovative color protection formula. This formula gives the photos saturated colors, and a high level of detail and sharpness. Each sheet of film has a 3.1 x 3.1" glossy surface image area. Full development will occur approximately 30 minutes after exposure when working in a temperature of around 70°F / 21°C.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant photos </li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>ASA: 640</li>
                        <li>Development: Full Development takes 15-20 minutes approx. at 70°F (21°C)</li>
                        <li>Image Area: 7.1 in²</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Color
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Polaroid 600, Polaroid Now, Polaroid Now+, Polaroid Lab, OneStep 2, OneStep+, Polaroid i-2
                    </small>
                </aside>
            </div>
        </div>
    )
}