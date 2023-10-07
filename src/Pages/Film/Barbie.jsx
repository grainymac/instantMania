import React from 'react'
import './styles.css'
import film from '../../Polaroid/film/IMG_6401.jpg'

export const Barbie = () => {

    return (
        <div className='film-page-container'>
            <h1>Barbie Instant Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    <b>***This film was only exclusive to the Polaroid Barbie camera and film package</b>
                    <br />
                    <br />
                    Introduce your friends to the joy of photography with the vibrant Polaroid Barbie instant film camera. This camera features a close-up mode for shooting from 2-4 feet away, a flash for adjusting lighting, and customizable Barbie glitter stickers to match your child's style. It uses Polaroid 600 instant film, which can be decorated with pens or a special Barbie film with flowered borders. Crafted from sturdy plastic with rounded corners, this Polaroid camera is both practical and durable for young photographers.
                    </p>
                    <small>
                        <b>Film Type:</b> Colour
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> 600 cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}