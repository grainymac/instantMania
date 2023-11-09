import React from 'react'
import '../styles.css'
import film from '../../../iType/film/IMG_6484.jpeg'
import { Link } from 'react-router-dom'

export const Peanuts = () => {

    return (
        <div className='film-page-container'>
            <h1>Peanuts Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                        This limited edition Polaroid film features beloved Peanuts characters, including Charlie Brown and Snoopy, to celebrate the 70th anniversary of the Peanuts franchise. The pack contains 8 color instant photographs, with each frame showcasing a different character to collect. To get the best results, it's recommended to shoot in bright light or use the camera flash, as Polaroid instant film thrives in well-lit conditions. After taking a shot, the photos initially appear blank but develop within 15 minutes when shielded from light and placed face down. Each resulting photo is characterized by its rich texture and unique, unpredictable qualities, making it impossible to reproduce.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>ASA: 640</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Images begin to emerge after 1 minutes.  Full development takes 5-10 minutes.</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Colour
                    </small>
                    <small>
                        <b>Compatible Cameras:</b>Polaroid Now, Polaroid Now+, Polaroid Lab, OneStep 2, OneStep+, Polaroid i-2
                    </small>
                    <Link to='/instant'>← back to all film & frames</Link>

                </aside>
            </div>
        </div>
    )
}