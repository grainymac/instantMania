import React from 'react'
import { Link } from 'react-router-dom'
import { polaroid600Film } from '../data/polaroid600Film'

const film = polaroid600Film

export const PolaroidCard = () => {
    return (
        <div className='polaroidCard-container'>
            {film.map(({ id, type, title, image, link }) => (
                <div key={id} className='polaCard'>
                    <Link to={link}>
                        <img className='polaImage' src={image} alt='polaroid' />
                    </Link>
                    <h4 className='polaTitle'>{title}</h4>
                    <small>{type}</small>
                </div>
            ))}
        </div>
    )
}