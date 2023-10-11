import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/duoPolaroid/IMG_6092 2.jpg'

export const BlackYellow = () => {

    return (
        <div className='film-page-container'>
            <h1>Black & Yellow Duochrome Edition</h1>
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