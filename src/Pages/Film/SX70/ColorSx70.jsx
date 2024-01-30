import React from 'react'
import '../styles.css'
import film from '../../../Sx70/film/IMG_6137.jpg'
import { Link } from 'react-router-dom'

export const ColorSx70 = () => {
  return (
    <div className='film-page-container'>
            <h1>Color SX-70 Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    The first film that developed in front of your eyes. When this film was released in 1972, it was described as ‘magic’. Just push the shutter button and watch the photo develop then and there - no human contact needed. It’s loved for its rich aesthetics. No wonder it’s still used by artists, professionals, and dreamers.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight color photos with white frames.</li>
                        <li>Sensitivity: ISO / ASA 100 / DIN 29</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Development time: 10 minutes approximately at 70°F (21°C)</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Color
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Compatible with Polaroid SX-70 and I-2 cameras
                    </small>
                    <Link to='/sx'>← back to SX-70 film & frames</Link>
                    <Link to='/instant'>← back to all film & frames</Link>
                </aside>
            </div>
        </div>
  )
}