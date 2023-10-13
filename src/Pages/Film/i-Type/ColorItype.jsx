import React from 'react'
import '../styles.css'
import film from '../../../iType/film/717oPHa7xjL._AC_SX466_ 2.jpg'

export const ColorItype = () => {

    return (
        <div className='film-page-container'>
            <h1>Color i-Type Film</h1>
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