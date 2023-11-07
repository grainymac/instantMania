import React from 'react'
import { Link } from 'react-router-dom'
import { polaroidSpectraFilm } from './polaroidSpectraFilm'
import './spectra.css'

const film = polaroidSpectraFilm

export const SpectraCard = () => {
    return (
        <div className='spectraCard-container'>
            {film.map(({ id, type, title, image, link }) => (
                <div key={id} className='spectraCard'>
                    <Link to={link}>
                        <img className='spectraImage' src={image} alt='polaroid' />
                    </Link>
                    <h4 className='spectraTitle'>{title}</h4>
                    <small>{type}</small>
                </div>
            ))}
        </div>
    )
}