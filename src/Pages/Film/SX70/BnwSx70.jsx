import React from 'react'
import '../styles.css'
import film from '../../../Sx70/film/IMG_6125.jpg'
import { Link } from 'react-router-dom'

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
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant black & white photos with white frames.</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Black & White
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> SX-70 cameras, Polaroid i-2
                    </small>
                    <Link to='/instant'>← back to all film & frames</Link>
                </aside>
            </div>
        </div>
    )
}