import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/duoPolaroid/IMG_6357.jpg'

export const ThirdManRecords = () => {

    return (
        <div className='film-page-container'>
            <h1>Third Man Records Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    </p>
                    <small>
                        <b>Film Type:</b> Duochromatic
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> 600 and i-Type cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}