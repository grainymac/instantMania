import React from 'react'
import { polaroid600Film } from '../data/polaroid600Film'

const film = polaroid600Film

export const PolaroidCard = () => {
    return (
        <div className='polaroidCard-container'>
            {film.map(({ id, type, title, image }) => (
                <div key={id} className='polaCard'>
                    <img className='polaImage' src={image} alt='polaroid' />
                    <h4 className='polaTitle'>{title}</h4>
                    <small>{type}</small>
                </div>
            ))}
        </div>
    )
}