import React from 'react'
import '../styles.css'
import film from '../../../Spectra/film/IMG_6190.jpg'
import { Link } from 'react-router-dom'

export const Grid = () => {

    return (
        <div className='film-page-container'>
            <h1>GridFilm</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    General-purpose, high-speed, medium-contrast, integral film for high definition instant color prints with grid lines. It is balanced for daylight and electronic flash exposure. Polaroid GridFilm has a pre-exposed grid (letters across the top, numbers down the side) on each picture. The grid acts as a scale, allowing you to take accurate measurements and compare photographs over time.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>Designed with an imposed grid on the image area, specifically designed to help locate objects or conditions shown in the image</li>
                        <li>10 exposures per pack</li>
                        <li>Applications: Specific use where placement notation is a requirement, i.e. medical, legal, construction, mathematics</li>
                        <li>Format: 4 x 4.1" (10.2 x 10.5 cm)</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Colour
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