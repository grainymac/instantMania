import React from 'react'
import { polaroidItypeFilm } from './polaroidItypeFilm'
import './itype.css'

const film = polaroidItypeFilm

export const ItypeCard = () => {
    return (
        <div className='itypeCard-container'>
            {film.map(({ id, type, title, image }) => (
                <div key={id} className='itypeCard'>
                    <img className='itypeImage' src={image} alt='polaroid' />
                    <h4 className='itypeTitle'>{title}</h4>
                    <small>{type}</small>
                </div>
            ))}
        </div>
    )
}