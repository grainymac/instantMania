import React from 'react'
import { Link } from 'react-router-dom'
import { polaroidGoFilm } from './polaroidGoFilm'
import './go.css'

const film = polaroidGoFilm

export const GoCard = () => {
    return (
        <div className='goCard-container'>
            {film.map(({ id, type, title, image, link }) => (
                <Link to={link}>
                    <div key={id} className='goCard'>
                        <img className='goImage' src={image} alt='polaroid' />
                        <h4 className='goTitle'>{title}</h4>
                    </div>
                </Link>
            ))}
        </div>
    )
}