import React from 'react'
import '../styles.css'
import film from '../../../Spectra/film/IMG_6124.jpg'
import { Link } from 'react-router-dom'

export const ColorSpectra = () => {

    return (
        <div className='film-page-container'>
            <h1>Color Spectra Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    This Spectra film gives you all the same clean tones and textures of our other Polaroid film packs, but with a wide-format frame. So whether you're taking breathtaking landscape photographs, or just trying to fit all your cousins in the family reunion photo, you've got a little more space to work with. Production was discontinued in 2019.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant photos with white frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>Format: 4.1” x 4.0” (103 mm x 101 mm)</li>
                        <li>Development time: 10-15 minutes</li>
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