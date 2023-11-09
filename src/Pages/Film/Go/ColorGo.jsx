import React from 'react'
import '../styles.css'
import film from '../../../Go/film/IMG_6121.jpg'
import { Link } from 'react-router-dom'

export const ColorGo = () => {

    return (
        <div className='film-page-container'>
            <h1>Color Go Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    The Polaroid Go film features 16 tiny yet iconic frames, perfect for capturing life's moments as they unfold. It's designed exclusively for use with the Polaroid Go Camera.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of 16 instant photos with white frames.</li>
                        <li>Battery-free</li>
                        <li>ASA: 640</li>
                        <li>Format: 2.623 x 2.122 in (66.6 mm x 53.9 mm)</li>
                        <li>Image area: 1.851 x 1.811 in (47 mm x 46 mm)</li>
                        <li>Development time: 10-15 minutes</li>
                        <li>Compatible only with the Polaroid Go camera</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Color
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Go cameras
                    </small>
                    <Link to='/go'>← back go film & frames</Link>
                    <Link to='/instant'>← back to all film & frames</Link>

                </aside>
            </div>
        </div>
    )
}