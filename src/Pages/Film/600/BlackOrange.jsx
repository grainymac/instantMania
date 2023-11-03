import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/duoPolaroid/IMG_6180.jpg'

export const BlackOrange = () => {

    return (
        <div className='film-page-container'>
            <h1>Black & Orange Duochrome Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    This Duochrome film only develops in orange and black, making it ideal for experimentation. It shares the formula of Impossible black & white film, resulting in high-contrast images with deep blacks and vibrant orange, following previous releases of black & yellow and black & red films.
                    <br />
                    <br />
                    Limited edition of film that was produced by the Impossible Project that hasn't been brought into production since unlike the Green & Black, Blue & Black, & Yellow & Black.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant black & orange photos with black frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>Sensitivity: ISO / ASA 600 / DIN 29</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Development time: approximately 10 minutes (at 21º)</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Duochrome
                    </small>
                    <small>
                    <b>Compatible Cameras:</b> Polaroid 600, Polaroid Now, Polaroid Now+, Polaroid Lab, OneStep 2, OneStep+, Polaroid i-2, SLR670-type cameras and I-type cameras (Add ND Filter or Mint Flash Bar 2 for using the 600 films on Polaroid SX-70 cameras.)
                    </small>
                </aside>
            </div>
        </div>
    )
}