import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/colorPolaroid/IMG_6102.jpg'

export const RoundFrame600 = () => {

    return (
        <div className='film-page-container'>
            <h1>Round Frame Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    Comes with a pack of eight instant photos featuring circular frames, allowing your creativity to shine. Originally introduced in 2014 and still in production today.
                    <br />
                    <br />
                    Using a circular frame while taking the shot forces you to rethink your composition and focus on capturing images that fit this specific shape. I encouraged myself to get up close to my subjects, resulting in tight and intimate close-up shots. Perfect frame if alot of your work are portraitures! 
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant photos with white frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>ASA: 640</li>
                        <li>Development: Full Development takes 10-15 minutes approx. at 70°F (21°C)</li>
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