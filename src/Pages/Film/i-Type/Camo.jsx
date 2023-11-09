import React from 'react'
import '../styles.css'
import film from '../../../iType/film/IMG_6183.jpg'
import { Link } from 'react-router-dom'

export const Camo = () => {

    return (
        <div className='film-page-container'>
            <h1>Camo Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    At times, staying inconspicuous can be advantageous. Photography revolves around seizing the right moment by seamlessly integrating into the environment, allowing life to unfold in front of your camera. I don't encourage surreptitious photography or disrespecting people's consent. However, if you're not looking to do any of that, Camo Film is your ideal choice. Drawing inspiration from military designs, it doesn't really allow you to merge with your surroundings but it provides some interesting colours to frame your photos.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant photos with camo frames.</li>
                        <li>ASA: 640</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Color
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> Polaroid Now, Polaroid Now+, Polaroid Lab, OneStep 2, OneStep+, Polaroid i-2
                    </small>
                </aside>
            </div>
        </div>
    )
}