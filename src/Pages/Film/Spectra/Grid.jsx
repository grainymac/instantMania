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
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Colour
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