import React from 'react'
import '../styles.css'
import film from '../../../iType/film/IMG_6136.jpg'
import { Link } from 'react-router-dom'

export const Summer = () => {

    return (
        <div className='film-page-container'>
            <h1>Summer Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    Looking to capture your sunny summer memories in a way that’s as vibrant as your adventures? With a random mix of 16 bright, bold and pastel-colored frames you can amp up the summer vibe and make your memories full of color—you bring the fun, we’ll bring the film.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>ASA: 640</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Images begin to emerge after 1 minutes.  Full development takes 5-10 minutes.</li>
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