import React from 'react'
import '../styles.css'
import film from '../../../iType/film/61de519f86695573054256_w803h620.jpg'

export const MetallicNights = () => {

    return (
        <div className='film-page-container'>
            <h1>Metallic Nights Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    </p>
                    <small>
                        <b>Film Type:</b> Color
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> i-Type cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}