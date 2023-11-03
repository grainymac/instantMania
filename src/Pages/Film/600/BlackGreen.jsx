import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/duoPolaroid/IMG_6094.jpg'

export const BlackGreen = () => {

    return (
        <div className='film-page-container'>
            <h1>Black & Green Duochrome Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    This film offers a unique aesthetic with an electric green duochrome on a black frame for abstract, portrait, and architectural photography. It's unconventional and meant for those with a different perspective. Due to its experimental nature, stable results aren't guaranteed.
                    <br />
                    <br />
                    The film is created with Green Duochrome paste by mixing Yellow and Cyan dye, resulting in an experimental formulation that produces a unique 'sunspot' mottled effect. This effect leads to unpredictable and one-of-a-kind creative results, making it a rewarding experience when it turns out well.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant black & green photos with black frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>ASA: 640</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Development: Full Development takes 10-15 minutes approx. at 70°F (21°C)</li>
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