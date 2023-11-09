import React from 'react'
import '../styles.css'
import film from '../../../Spectra/film/IMG_6400.jpg'
import { Link } from 'react-router-dom'

export const BnwSpectra = () => {

    return (
        <div className='film-page-container'>
            <h1>B&W Spectra Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    Black and white Spectra Polaroid film is a medium that caters to photographers who appreciate the beauty and versatility of black and white instant photography. It offers wide-format prints with classic monochromatic aesthetics, instant gratification, and the potential for artistic exploration when used with compatible Spectra cameras.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant black & white photos with white frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Black & White
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Spectra cameras
                    </small>
                    <Link to='/instant'>← back to all film & frames</Link>
                </aside>
            </div>
        </div>
    )
}