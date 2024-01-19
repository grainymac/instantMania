import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/colorPolaroid/IMG_6354.jpg'

export const BlackRed = () => {

    return (
        <div className='film-page-container'>
            <h1>Black & Red Duochrome Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                        Impossible Instant Color Film for 600 - Duochrome Red/Black has eight (8) instant black and red photos with matt black frames. After exposure, images begin to emerge within a minute with full development taking about 5-10 minutes. It follows on the heels of 2015’s highly popular Third Man Records edition yellow & black film, using the same essential formula as the black & white film to achieve high contrast results - deep blacks against bright, true reds.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant black & red photos with black frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>Sensitivity: ISO / ASA 600 / DIN 29</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Development time:  20-30 minutes approximately at 70°F (21°C)</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Duochrome
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Polaroid 600, Polaroid Now, Polaroid Now+, Polaroid Lab, OneStep 2, OneStep+, Polaroid i-2, SLR670-type cameras and I-type cameras (Add ND Filter or Mint Flash Bar 2 for using the 600 films on Polaroid SX-70 cameras.)
                    </small>
                </aside>
            </div>
        </div>
    )
}