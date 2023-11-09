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
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant photos with black frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Black & White
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Spectra cameras
                    </small>
                    <Link to='/spectra'>← back spectra film & frames</Link>
                    <Link to='/instant'>← back to all film & frames</Link>
                </aside>
            </div>
        </div>
    )
}