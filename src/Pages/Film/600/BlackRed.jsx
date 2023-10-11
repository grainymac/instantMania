import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/colorPolaroid/IMG_6354.jpg'

export const BlackRed = () => {

    return (
        <div className='film-page-container'>
            <h1>Black & Red Duochrome Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    </p>
                    <small>
                        <b>Film Type:</b> Duochrome
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> 600 and i-Type cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}