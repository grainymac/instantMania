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
                    The Polaroid Originals Blue Duochrome 600 Instant Film is a Limited Edition product that develops in black and blue colors, creating vivid analog photos with a distinctive appearance. It uses chemistry similar to Polaroid's black and white film, resulting in high-contrast images suitable for experimentation. This film offers rich tones, a balanced look, and soft textures, with images appearing in as little as 2 minutes and fully developing in 5-10 minutes. For sample images, you can check out the gallery section.
                    </p>
                    <small>
                        <b>Film Type:</b> Duochrome
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> 600 and i-Type cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}