import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/bnwPolaroid/IMG_6352.jpg'

export const HardColor600 = () => {

    return (
        <div className='film-page-container'>
            <h1>Hard Color Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    </p>
                    <small>
                        <b>Film Type:</b> Black and White
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> 600 and i-Type cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}