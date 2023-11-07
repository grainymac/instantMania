import React from 'react'
import { Link } from 'react-router-dom'
import { polaroidGoFilm } from './polaroidGoFilm'
import './go.css'

const film = polaroidGoFilm

export const GoCard = () => {
    return (
        <div className='goCard-container'>
            {film.map(({ id, type, title, image, link }) => (
                <div key={id} className='goCard'>
                    <Link to={link}>
                        <img className='goImage' src={image} alt='polaroid' />
                    </Link>
                    <h4 className='goTitle'>{title}</h4>
                    <small>{type}</small>
                </div>
            ))}
        </div>
    )
}