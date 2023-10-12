import React from 'react'
import '../styles.css'
import film from '../../../Go/film/IMG_6121.jpg'

export const ColorGo = () => {

    return (
        <div className='film-page-container'>
            <h1>Color Go Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    </p>
                    <small>
                        <b>Film Type:</b> Color
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Go cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}