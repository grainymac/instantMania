import React from 'react'
import '../styles.css'
import film from '../../../Polaroid/film/i-img1200x830-16863181909145w1476480 2.jpg'

export const LegoLand = () => {

    return (
        <div className='film-page-container'>
            <h1>Legoland Instant Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    </p>
                    <small>
                        <b>Film Type:</b> Color
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> 600 and i-Type cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}