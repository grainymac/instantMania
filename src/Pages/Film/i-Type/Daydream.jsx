import React from 'react'
import '../styles.css'
import film from '../../../iType/film/IMG_6191.jpg'
import { Link } from 'react-router-dom'

export const Daydream = () => {

    return (
        <div className='film-page-container'>
            <h1>Daydream Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
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
                        <b>Compatible Cameras:</b>Polaroid Now, Polaroid Now+, Polaroid Lab, OneStep 2, OneStep+, Polaroid i-2
                    </small>
                    <Link to='/instant'>← back to all film & frames</Link>

                </aside>
            </div>
        </div>
    )
}