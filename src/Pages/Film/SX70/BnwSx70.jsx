import React from 'react'
import './styles.css'
import film from '../../Sx70/film/IMG_6125.jpg'

export const BnwSx70 = () => {

    return (
        <div className='film-page-container'>
            <h1>B&W SX-70 Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    Black and white SX-70 Polaroid film is a specialized film for SX-70 cameras, offering the opportunity to create artistic and timeless monochromatic instant photographs. It provides the enchantment of instant development and encourages creative exploration, making it a cherished choice among photographers and artists who appreciate the unique qualities of analog photography.
                    </p>
                    <small>
                        <b>Film Type:</b> Black & White
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> SX-70 cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}