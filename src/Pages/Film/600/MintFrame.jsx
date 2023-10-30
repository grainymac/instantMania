import React from 'react'
import '../styles.css'
import film from '../../../Polaroid/film/IMG_7245.jpg'

export const MintFrame = () => {

    return (
        <div className='film-page-container'>
            <h1>Mint Frame Edition</h1>
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