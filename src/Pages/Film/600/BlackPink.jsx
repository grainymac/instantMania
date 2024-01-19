import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/duoPolaroid/IMG_6197.jpg'

export const BlackPink = () => {

    return (
        <div className='film-page-container'>
            <h1>Black & Pink Duochrome Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                        This pack of Duochrome Pink & Black 600 Instant Film from Polaroid Originals contains eight sheets of film for use with Polaroid 600-series cameras. Producing unique two-tone images, this special ISO 640 duochrome film offers a dusky magenta and rich black tonal scale for a dramatic appearance. The overall rose-colored mood is complemented by a matte black frame surrounding the 3.1 x 3.1" glossy image area. Each shot develops in 5-10 minutes after exposure, and the film should be stored in a cool, refrigerated, but not frozen, place before use. Additionally, even though this film features a built-in a battery to power 600-series cameras, it can also be used with i-Type cameras that feature their own camera battery.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant black & pink photos with black frames.</li>
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