import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/colorPolaroid/IMG_6128.jpg'

export const SummerHaze = () => {

    return (
        <div className='film-page-container'>
            <h1>Summer Haze Edition</h1>
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