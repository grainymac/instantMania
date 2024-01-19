import React from 'react'

import '../styles.css'
import film from '../../../Sx70/film/IMG_6312 2.JPG'

export const BnwBlackFramesSx70 = () => {
  return (
    <div className='film-page-container'>
            <h1>Black Frame Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    Impossible B&W SX-70 Black Frame Edition is black and white instant film for Polaroid SX70-type cameras. Thanks to a newly developed emulsion, this film boasts incredible black and white tones, a high level of detail and sharpness, and stunning image quality.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant black & white photos with black frames.</li>
                        <li>Sensitivity: ISO / ASA 100 / DIN 29</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Development time: 10 minutes approximately at 70°F (21°C)</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Black & White
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Sx 70 Polaroid Cameras
                    </small>
                </aside>
            </div>
        </div>
  )
}