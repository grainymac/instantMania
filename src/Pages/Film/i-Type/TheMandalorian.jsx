import React from 'react'
import '../styles.css'
import film from '../../../iType/film/IMG_6394.jpg'

export const TheMandalorian = () => {

    return (
        <div className='film-page-container'>
            <h1>The Mandalorian Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    The Color i-Type Instant Film by Polaroid, available in a Mandalorian Edition collectible, includes eight sheets of film for i-Type cameras. It produces vibrant yet natural colors with an ISO of 640, delivering a classic instant film appearance with a glossy 3.1 x 3.1" image area and Mandalorian-themed borders. Each shot develops in 10-15 minutes after exposure, and the film should be stored in a cool, refrigerated (not frozen) place before use. It requires a camera with an internal battery, such as Polaroid, Polaroid Originals, or Impossible cameras. The Mandalorian Edition features eight color instant photographs showcasing characters and icons from the Disney+ series, with 12 frames and eight darkslides to collect.
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