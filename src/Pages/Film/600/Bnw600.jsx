import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/bnwPolaroid/IMG_6096.jpg'
import { Link } from 'react-router-dom'

export const Bnw600 = () => {

    return (
        <div className='film-page-container'>
            <h1>B&W 600 Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                        Polaroid Black and White 600 film is a medium for capturing classic black and white instant photographs using Polaroid 600 series cameras. It offers the charm of instant gratification, a timeless monochromatic aesthetic, and the opportunity for creative experimentation in a square format.
                        <br />
                        <br />
                        Polaroid black and white 600 film was first introduced in the mid-1990s. It allowed users of Polaroid 600 series instant cameras to capture black and white photos instantly. This film provided a monochromatic alternative to the traditional color instant film and was popular among photographers looking for a more artistic or classic look in their instant prints.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant black&white photos with white frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>ASA: 640</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Images begin to emerge after 1 minutes.  Full development takes 5-10 minutes.</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Black & White
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Polaroid 600, Polaroid Now, Polaroid Now+, Polaroid Lab, OneStep 2, OneStep+, Polaroid i-2, SLR670-type cameras and I-type cameras (Add ND Filter or Mint Flash Bar 2 for using the 600 films on Polaroid SX-70 cameras.)
                    </small>
                    <Link to='/instant'>← back to all film & frames</Link>
                </aside>
            </div>
        </div>
    )
}