import React from 'react'
import '../styles.css'
import film from '../../../iType/film/IMG_6394.jpg'
import { Link } from 'react-router-dom'

export const TheMandalorian = () => {

    return (
        <div className='film-page-container'>
            <h1>The Mandalorian Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                        The Color i-Type Instant Film by Polaroid, available in a Mandalorian Edition collectible, includes eight sheets of film for i-Type cameras. It produces vibrant yet natural colors with an ISO of 640, delivering a classic instant film appearance with a glossy 3.1 x 3.1" image area and Mandalorian-themed borders. Each shot develops in 10-15 minutes after exposure, and the film should be stored in a cool, refrigerated (not frozen) place before use. It requires a camera with an internal battery, such as Polaroid, Polaroid Originals, or Impossible cameras. The Mandalorian Edition features eight color instant photographs showcasing characters and icons from the Disney+ series, with 12 frames and eight darkslides to collect.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>ASA: 640</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Images begin to emerge after 1 minutes.  Full development takes 5-10 minutes.</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Color
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