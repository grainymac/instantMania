import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/duoPolaroid/IMG_6122.jpg'

export const BlackBlue = () => {

    return (
        <div className='film-page-container'>
            <h1>Black & Blue Duochrome</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    The Polaroid Originals Blue Duochrome 600 Instant Film is a Limited Edition product that develops in black and blue colors, creating vivid analog photos with a distinctive appearance. It uses chemistry similar to Polaroid's black and white film, resulting in high-contrast images suitable for experimentation. This film offers rich tones, a balanced look, and soft textures, with images appearing in as little as 2 minutes. For sample images, you can check out the gallery section.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant black & blue photos with black frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>ASA: 640</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Development: Full Development takes 10-15 minutes approx. at 70°F (21°C)</li>
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