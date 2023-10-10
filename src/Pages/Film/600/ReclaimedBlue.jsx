import React from 'react'
import './styles.css'
import film from '../../polaroidFilm/duoPolaroid/IMG_6126.jpg'

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
                    <small>
                        <b>Film Type:</b> Colour
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> 600 amd i-Type cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}