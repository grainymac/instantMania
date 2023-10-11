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
                    <small>
                        <b>Film Type:</b> Black & White
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> 600 amd i-Type cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}