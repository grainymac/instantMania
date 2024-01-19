import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/duoPolaroid/IMG_6092 2.jpg'

export const BlackYellow = () => {

    return (
        <div className='film-page-container'>
            <h1>Black & Yellow Duochrome Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                        Yellow, the world’s most underappreciated color, is coming back to Duochrome film. In striking black frames, and with our unique Duochrome film chemistry that combines black and white film with yellow dye, you’ll have the most contrasting shots of any of our limited edition films. Compatible with Polaroid 600 cameras, but also with the Polaroid I-2, Polaroid Now & Polaroid Now+ cameras and Polaroid Lab printer.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant black & yellow photos with black frames.</li>
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