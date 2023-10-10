import React from 'react'
import './styles.css'
import film from '../../polaroidFilm/bnwPolaroid/IMG_6096.jpg'

export const Bnw600 = () => {

    return (
        <div className='film-page-container'>
            <h1>B&W 600 Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                        Polaroid Black and White 600 film is a medium for capturing classic black and white instant photographs using Polaroid 600 series cameras. It offers the charm of instant gratification, a timeless monochromatic aesthetic, and the opportunity for creative experimentation in a square format.
                        <br />
                        <br />
                        Polaroid black and white 600 film was first introduced in the mid-1990s. It allowed users of Polaroid 600 series instant cameras to capture black and white photos instantly. This film provided a monochromatic alternative to the traditional color instant film and was popular among photographers looking for a more artistic or classic look in their instant prints.
                    </p>
                    <small>
                        <b>Compatible Cameras:</b> 600 amd i-Type cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}