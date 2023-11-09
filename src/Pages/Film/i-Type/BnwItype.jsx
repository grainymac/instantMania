import React from 'react'
import '../styles.css'
import film from '../../../iType/film/IMG_6119.jpg'
import { Link } from 'react-router-dom'

export const BnwItype = () => {

    return (
        <div className='film-page-container'>
            <h1>B&W i-Type Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    A modern black and white instant film designed for contemporary instant cameras. The film package contains eight sheets, each capable of capturing moments with dramatic shadows and soft highlights. It's important to note that this i-Type film doesn't require a battery and is compatible with the Polaroid Now, Polaroid Now+, the Polaroid Lab, and other similar cameras. However, it's not suitable for vintage cameras due to its battery-free nature. This film is not only convenient but also budget-friendly for photography enthusiasts.
                    <br />
                    <br />
                    Instant photography has made a comeback in recent years, and this modern film meets the needs of those who use contemporary instant cameras. Its dramatic shadow and soft highlight capabilities allow for creative and visually appealing shots. Additionally, the absence of a battery makes it more environmentally friendly, and its compatibility with various Polaroid camera models ensures flexibility for photographers. So, if you're looking for an affordable and hassle-free way to capture instant memories in black and white, this film could be an excellent choice for you.
                    </p>
                    <ul>
                        <b>Specs:</b>
                        <li>Pack of eight instant black&white photos with white frames.</li>
                        <li>ASA: 640</li>
                        <li>Format: 3.5 x 4.2 in (8.8 x 10.7 cm).</li>
                        <li>Image area: 3.1 x 3.1 in (7.9 x 7.9 cm).</li>
                        <li>Images begin to emerge after 1 minutes.  Full development takes 5-10 minutes.</li>
                    </ul>
                    <small>
                        <b>Film Type:</b> Black & White
                    </small>
                    <small>
                    <b>Compatible Cameras:</b>Polaroid Now, Polaroid Now+, Polaroid Lab, OneStep 2, OneStep+, Polaroid i-2
                    </small>
                    <Link to='/instant'>← back to all film & frames</Link>

                </aside>
            </div>
        </div>
    )
}