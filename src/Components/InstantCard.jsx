import React from 'react'

// ------------ BLACK & WHITE --------------
import bnw600 from '../polaroidFilm/bnwPolaroid/IMG_6096.jpg'

// ------------ COLOR --------------

import color600 from '../polaroidFilm/colorPolaroid/IMG_6103.jpg'
import metalRed600 from '../polaroidFilm/colorPolaroid/IMG_6095.jpg'
import gold600 from '../polaroidFilm/colorPolaroid/IMG_6098.jpg'
import colorItype from '../polaroidFilm/colorPolaroid/IMG_6100.jpg'
import roundColor600 from '../polaroidFilm/colorPolaroid/IMG_6102.jpg'


// ------------ DUOCHROME --------------
import blackAndYellow from '../polaroidFilm/duoPolaroid/IMG_6092 2.jpg'
import blackAndGreen from '../polaroidFilm/duoPolaroid/IMG_6094.jpg'
import reclaimedBlue from '../polaroidFilm/duoPolaroid/IMG_6099.PNG'

export const InstantCard = () => { 
    return (
        <div className="card-container">
            <h2 className="film-title">B&W Film</h2>
            <div className="film-card-container">
                <img className='film' src={bnw600} alt='bnw' />
            </div>

            <h2 className="film-title">Color Film</h2>
            <div className="film-card-container">
                <img className='film' src={color600} alt='color 600' />
                <img className='film' src={metalRed600} alt='metallic red frame' />
                <img className='film' src={gold600} alt='gold frame' />
                <img className='film' src={colorItype} alt='color itype' />
                <img className='film' src={roundColor600} alt='color round frame' />
            </div>

            <h2 className="film-title">Duochrome Film</h2>
            <div className="film-card-container">
                <img className='film' src={blackAndYellow} alt='black and yellow duochrome' />
                <img className='film' src={blackAndGreen} alt='black and green duochrome' />
                <img className='film' src={reclaimedBlue} alt='black and green duochrome' />
            </div>
        </div>
    )
} 