import React from 'react'
import { Link } from 'react-router-dom'
import { polaroidItypeFilm } from './polaroidItypeFilm'
import './itype.css'

const film = polaroidItypeFilm

export const ItypeCard = () => {
    return (
        <div className='itypeCard-container'>
            {film.map(({ id, type, title, image, link }) => (
                <div key={id} className='itypeCard'>
                    <Link to={link}>
                        <img className='itypeImage' src={image} alt='polaroid' />
                    </Link>
                    <h4 className='itypeTitle'>{title}</h4>
                    <small>{type}</small>
                </div>
            ))}
        </div>
    )
}