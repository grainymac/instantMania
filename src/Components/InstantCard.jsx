import React from 'react'

// ------------ BLACK & WHITE --------------
import bnw600 from '../polaroidFilm/bnwPolaroid/IMG_6096.jpg'
import bnwItype from '../polaroidFilm/bnwPolaroid/IMG_6119.jpg'
import bnwsx70 from '../polaroidFilm/bnwPolaroid/IMG_6125.jpg'

// ------------ COLOR --------------

import color600 from '../polaroidFilm/colorPolaroid/IMG_6103.jpg'
import colorItype from '../polaroidFilm/colorPolaroid/IMG_6100.jpg'
import colorBlackframeItype from '../polaroidFilm/colorPolaroid/IMG_6135.jpg'
import colorSpectra from '../polaroidFilm/colorPolaroid/IMG_6124.jpg'
import colorBlackFrameGo from '../polaroidFilm/colorPolaroid/IMG_6129.jpg'
import colorSx70 from '../polaroidFilm/colorPolaroid/IMG_6137.jpg'
import colorFrames600 from '../polaroidFilm/colorPolaroid/IMG_6138.jpg'
import timezeroSx70 from '../polaroidFilm/colorPolaroid/IMG_6132.jpg'
import roundColor600 from '../polaroidFilm/colorPolaroid/IMG_6102.jpg'
import summerItype from '../polaroidFilm/colorPolaroid/IMG_6136.jpg'
import summerBluesItype from '../polaroidFilm/colorPolaroid/IMG_6127.jpg'
import summerHaze600 from '../polaroidFilm/colorPolaroid/IMG_6128.jpg'
import summerFruits600 from '../polaroidFilm/colorPolaroid/IMG_6131.jpg'
import memphis600 from '../polaroidFilm/colorPolaroid/IMG_6133.jpg'
import colorWaveItype from '../polaroidFilm/colorPolaroid/IMG_6134.jpg'
import metalRed600 from '../polaroidFilm/colorPolaroid/IMG_6095.jpg'
import gold600 from '../polaroidFilm/colorPolaroid/IMG_6098.jpg'
import goldDust600 from '../polaroidFilm/colorPolaroid/IMG_6139.jpg'
import roseGoldItype from '../polaroidFilm/colorPolaroid/IMG_6123.jpg'
import goldenMomentsItype from '../polaroidFilm/colorPolaroid/IMG_6130.jpg'
import festiveRed600 from '../polaroidFilm/colorPolaroid/IMG_6140.jpg'




// ------------ DUOCHROME --------------
import blackAndYellow from '../polaroidFilm/duoPolaroid/IMG_6092 2.jpg'
import blackAndGreen from '../polaroidFilm/duoPolaroid/IMG_6094.jpg'
import blackAndBlue from '../polaroidFilm/duoPolaroid/IMG_6122.jpg'
import reclaimedBlue from '../polaroidFilm/duoPolaroid/IMG_6126.jpg'

export const InstantCard = () => { 
    return (
        <div className="card-container">
            <h2 className="film-title">B&W Film</h2>
            <div className="film-card-container">
                <img className='film' src={bnw600} alt='bnw' />
                <img className='film' src={bnwItype} alt='bnw itype' />
                <img className='film' src={bnwsx70} alt='bnw sx70' />
            </div>

            <h2 className="film-title">Color Film</h2>
            <div className="film-card-container">
                <img className='film' src={color600} alt='color 600' />
                <img className='film' src={colorItype} alt='color itype' />
                <img className='film' src={colorSx70} alt='color sx70' />
                <img className='film' src={colorSpectra} alt='color spectra' />
                <img className='film' src={roundColor600} alt='color round frame' />
                <img className='film' src={colorFrames600} alt='color  frames' />
                <img className='film' src={summerHaze600} alt='summer haze' />
                <img className='film' src={summerFruits600} alt='summer fruits' />
                <img className='film' src={memphis600} alt='memphis' />
                <img className='film' src={goldDust600} alt='gold dust' />
                <img className='film' src={festiveRed600} alt='festive red' />
                <img className='film' src={gold600} alt='gold frame' />
                <img className='film' src={metalRed600} alt='metallic red frame' />
                <img className='film' src={colorBlackframeItype} alt='color black frame itype' />
                <img className='film' src={summerItype} alt='summer itype' />
                <img className='film' src={summerBluesItype} alt='summer blues itype' />
                <img className='film' src={colorWaveItype} alt='color wave itype' />
                <img className='film' src={roseGoldItype} alt='rose gold itype' />
                <img className='film' src={goldenMomentsItype} alt='golden moments itype' />
                <img className='film' src={timezeroSx70} alt='time zero sx70' />
                <img className='film' src={colorBlackFrameGo} alt='color black frame go' />
            </div>

            <h2 className="film-title">Duochrome Film</h2>
            <div className="film-card-container">
                <img className='film' src={blackAndYellow} alt='black and yellow duochrome' />
                <img className='film' src={blackAndGreen} alt='black and green duochrome' />
                <img className='film' src={blackAndBlue} alt='black and blue duochrome' />
                <img className='film' src={reclaimedBlue} alt='black and green duochrome' />
            </div>
        </div>
    )
} 