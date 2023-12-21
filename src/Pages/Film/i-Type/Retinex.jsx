import React from 'react'
import '../styles.css'
import film from '../../../iType/film/717oPHa7xjL._AC_SX466_ 2.jpg'
import { Link } from 'react-router-dom'

export const Retinex = () => {

    return (
        <div className='film-page-container'>
            <h1>Retinex Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                        Red? Orange? Yellow? Umm, why not all three at once? With Polaroid Round Frame Retinex Film, color gets weird. Seriously weird.

                        Inspired by Edwin Land's pioneering Retinex Theory, these 10 unique frame designs (in a double pack of 16 photos) make your eyes and brain get tricksy as you interpret the red dot differently, depending on the surrounding colors.

                        Capture the world in a new, vibrant light. Your journey into uncharted realms of color creativity begins here.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>ASA: 640</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Images begin to emerge after 1 minutes.  Full development takes 5-10 minutes.</li>
                        <li>Round frame</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Color
                    </small>
                    <small>
                        <b>Compatible Cameras:</b>Polaroid I-2, Now Generation 2, Polaroid Now+ Generation 2, Polaroid Now Generation 1, Polaroid Now+ Generation 1, Polaroid Lab, OneStep 2, and OneStep+
                    </small>
                    <Link to='/instant'>← back to all film & frames</Link>

                </aside>
            </div>
        </div>
    )
}