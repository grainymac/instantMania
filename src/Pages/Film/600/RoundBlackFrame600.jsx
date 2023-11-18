import React from 'react'
import '../styles.css'
import film from '../../../Polaroid/film/impossible_4170_instant_color_film_for_1138057 2.jpg'

export const RoundBlackFrame600 = () => {

    return (
        <div className='film-page-container'>
            <h1>Round Black Frame Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant photos with white frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>ASA: 640</li>
                        <li>Development: Full Development takes 15-20 minutes approx. at 70°F (21°C)</li>
                        <li>Image Area: 7.1 in²</li>
                        <li>Color Protection Formula</li>
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