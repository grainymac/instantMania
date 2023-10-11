import React from 'react'
import '../styles.css'
import film from '../../../polaroidFilm/colorPolaroid/IMG_6103.jpg'

export const Color600 = () => {

    return (
        <div className='film-page-container'>
            <h1>Color 600 Film</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                        Polaroid 600 color film is an instant film format that was produced by Polaroid Corporation. This type of film was commonly used in Polaroid 600 series cameras, including iconic models like the Polaroid OneStep. The film produced instant color photographs and was known for its convenience and quick development.
                        <br />
                        <br />
                        Polaroid 600 color film was first introduced in the early 1980s and was widely popular throughout the 1980s and 1990s. It allowed users to take a photo, and the image would develop within minutes after being ejected from the camera. The film typically featured a square format, and the photographs had a distinct retro aesthetic.
                        <br />
                        <br />
                        It's important to note that the original production of Polaroid 600 color film was discontinued in the early 2000s when Polaroid faced financial difficulties. However, various efforts and companies have since revived instant film production for Polaroid cameras under different brand names, offering compatible film for enthusiasts who still enjoy using these classic cameras.
                    </p>
                    <small>
                        <b>Film Type:</b> Colour
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> 600 amd i-Type cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}