import React from 'react'
import { Link } from 'react-router-dom'
import { polaroidSpectraFilm } from './polaroidSpectraFilm'
import './spectra.css'

const film = polaroidSpectraFilm

export const SpectraCard = () => {
    return (
        <div className='spectraCard-container'>
            {film.map(({ id, type, title, image, link }) => (
                <Link to={link}>
                    <div key={id} className='spectraCard'>
                        <img className='spectraImage' src={image} alt='polaroid' />
                        <h4 className='spectraTitle'>{title}</h4>
                    </div>
                </Link>
            ))}
        </div>
    )
}