import React from 'react'
import '../styles.css'
import film from '../../../Polaroid/film/impossible_4170_instant_color_film_for_1138057 2.jpg'

export const RoundBlackFrame600 = () => {

    return (
        <div className='film-page-container'>
            <h1>Round Black Frame Edition</h1>
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