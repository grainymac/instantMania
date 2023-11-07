import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/bnwPolaroid/ely.jpg'

export const EleyKishimoto = () => {

    return (
        <div className='film-page-container'>
            <h1>Eley Kishimoto Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                        The Impossible Project has partnered with London-based fashion and design company Eley Kishimoto to create a special edition instant film. This film features Kishimoto's iconic monochrome Flash print on its black and white frame and is available in limited quantities starting today. This collaboration, known as the "Impossible X Eley Kishimoto Collab Film," is part of a series of partnerships between Impossible and various individuals and brands in the fields of fashion, art, and music. These collaborations aim to unite like-minded makers and creatives who appreciate analogue craftsmanship, quality, and the enduring nature of objects meant to be cherished and preserved.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>ASA: 640</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Black & White
                    </small>
                    <small>
                    <b>Compatible Cameras:</b> Polaroid 600, Polaroid Now, Polaroid Now+, Polaroid Lab, OneStep 2, OneStep+, Polaroid i-2
                    </small>
                </aside>
            </div>
        </div>
    )
}