import React from 'react'
import '../styles.css'
import film from '../../../Polaroid/film/impossible-color-film-for-600-gold-round-frame-edition-12269-asf 2.jpg'

export const RoundGoldFrame600 = () => {

    return (
        <div className='film-page-container'>
            <h1>Round Gold Frame Edition</h1>
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