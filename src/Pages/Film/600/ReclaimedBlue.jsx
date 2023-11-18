import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/duoPolaroid/IMG_6126.jpg'

export const ReclaimedBlue = () => {

    return (
        <div className='film-page-container'>
            <h1>Reclaimed Blue</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    "Reclaimed Blue" is a limited and experimental Polaroid film that originated from an accidental discovery, thanks to Brian from Polaroid R&D. This film incorporates reclaimed waste materials from the Polaroid factory and results in striking and rich shades of blue during development. It's particularly suitable for experimental photography, allowing photographers to explore its unique chemical reaction, which involves both color film and the TBHQ chemical from black and white film. Notably, no additional blue dye is added to the film; instead, the reaction itself generates the captivating blue hues. The film's limited availability adds to its experimental nature, and it's all thanks to Brian's serendipitous discovery.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant photos with white frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>ASA: 640</li>
                        <li>Development: Full Development takes 15-20 minutes approx. at 70°F (21°C)</li>
                        <li>Limited edition experimental film</li>
                        <li>Unique chemistry using reclaimed waste material</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Colour
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Polaroid 600, Polaroid Now, Polaroid Now+, Polaroid Lab, OneStep 2, OneStep+, Polaroid i-2
                    </small>
                </aside>
            </div>
        </div>
    )
}