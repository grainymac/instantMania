import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/duoPolaroid/IMG_6180.jpg'

export const BlackOrange = () => {

    return (
        <div className='film-page-container'>
            <h1></h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    </p>
                    <small>
                        <b>Film Type:</b> 
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> 600 cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}