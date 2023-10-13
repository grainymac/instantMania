import React from 'react'
import '../styles.css'
import film from '../../../iType/film/IMG_6127.jpg'

export const SummerBlues = () => {

    return (
        <div className='film-page-container'>
            <h1>Summer Blues Edition</h1>
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