import React from 'react'
import '../styles.css'
import film from '../../../iType/film/IMG_6119.jpg'

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
                    <small>
                        <b>Film Type:</b> Black & White
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> i-Type cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}