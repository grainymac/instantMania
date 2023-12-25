import React from 'react'
import '../styles.css'
import film from '../../../Spectra/film/impossible_3555_instant_color_film_for_1096476 2.jpg'
import { Link } from 'react-router-dom'

export const BlackFrameSpectra = () => {

    return (
        <div className='film-page-container'>
            <h1>Black Frame Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    This pack of Color Instant Film from Impossible contains eight sheets of film for Polaroid Image/Spectra type cameras. This film features a 4 x 4.1" black frame with a glossy image area of 3.5 x 2.9". The film uses an innovative color protection formula that gives the photos saturated colors and a high level of detail and sharpness. Full development will occur approximately 10 minutes after exposure when working in a temperature of around 70°F / 21°C.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant photos with black frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>Image Area: 3.5 x 2.9"</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Black & White
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Spectra Law Enforcement Kit; ProCam; Jewelry Pro; All Image cameras; and Minolta Pro. Spectra 1200FF Spectra Close-Up Kit: HealthCam Kit: Spectra 1200i: Spectra 1200si: Spectra AF Macro 3 SLR Camera Macro 5 SLR Camera
                    </small>
                    <Link to='/spectra'>← back to spectra film & frames</Link>
                    <Link to='/instant'>← back to all film & frames</Link>
                </aside>
            </div>
        </div>
    )
}