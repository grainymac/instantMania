import React from 'react'
import '../styles.css'

import { Link } from 'react-router-dom'

export const BlackFrameSx70 = () => {
  return (
    <div className='film-page-container'>
            <h1>Black Frames Edition</h1>
            <div className='detail-container'>
                
                <aside className='text-container'>
                    <p>
                    
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight color photos with black frames.</li>
                        <li>Sensitivity: ISO / ASA 100 / DIN 29</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Development time: 10 minutes approximately at 70°F (21°C)</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Color
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Compatible with Polaroid SX-70 and I-2 cameras
                    </small>
                    <Link to='/sx'>← back to SX-70 film & frames</Link>
                    <Link to='/instant'>← back to all film & frames</Link>
                </aside>
            </div>
        </div>
  )
}