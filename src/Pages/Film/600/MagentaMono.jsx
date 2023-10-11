import React from 'react'
import '../styles.css'
import film from '../../../Polaroid/film/IMG_6413.png'

export const MagentaMono = () => {

    return (
        <div className='film-page-container'>
            <h1>Magenta Monochrome Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    </p>
                    <small>
                        <b>Film Type:</b> Monochrome
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> 600 cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}