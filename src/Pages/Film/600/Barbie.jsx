import React from 'react'
import '../styles.css'
import film from '../../../Polaroid/film/IMG_6401.jpg'

export const Barbie = () => {

    return (
        <div className='film-page-container'>
            <h1>Barbie Instant Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    <b>***This film was only exclusive to the Polaroid Barbie camera and film package</b>
                    <br />
                    <br />
                    Introduce your friends to the joy of photography with the vibrant Polaroid Barbie instant film camera. This camera features a close-up mode for shooting from 2-4 feet away, a flash for adjusting lighting, and customizable Barbie glitter stickers to match your child's style. It uses Polaroid 600 instant film, which can be decorated with pens or a special Barbie film with flowered borders. Crafted from sturdy plastic with rounded corners, this Polaroid camera is both practical and durable for young photographers.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of ten instant black&white photos with white frames.</li>
                        <li>Integrated long-lasting battery to power your Polaroid camera and flash.</li>
                        <li>ASA: 640</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>This film was only exclusive to the Polaroid Barbie camera and film package</li>

                    </ul>
                    <small>
                        <b>Film Type:</b> Colour
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Polaroid 600, Polaroid Now, Polaroid Now+, Polaroid Lab, OneStep 2, OneStep+, Polaroid i-2, SLR670-type cameras and I-type cameras (Add ND Filter or Mint Flash Bar 2 for using the 600 films on Polaroid SX-70 cameras.)
                    </small>
                </aside>
            </div>
        </div>
    )
}