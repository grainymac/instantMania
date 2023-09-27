import React from 'react'
import { polaroidSpectraFilm } from './polaroidSpectraFilm'
import './spectra.css'

const film = polaroidSpectraFilm

export const SpectraCard = () => {
    return (
        <div className='spectraCard-container'>
            {film.map(({ id, type, title, image }) => (
                <div key={id} className='spectraCard'>
                    <img className='spectraImage' src={image} alt='polaroid' />
                    <h4 className='spectraTitle'>{title}</h4>
                    <small>{type}</small>
                </div>
            ))}
        </div>
    )
}