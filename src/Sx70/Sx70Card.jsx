import React from 'react'
import { polaroidSx70Film } from './polaroidSx70Film'
import './sx70.css'

const film = polaroidSx70Film

export const Sx70Card = () => {
    return (
        <div className='sx70Card-container'>
            {film.map(({ id, type, title, image }) => (
                <div key={id} className='sx70Card'>
                    <img className='sx70Image' src={image} alt='polaroid' />
                    <h4 className='sx70Title'>{title}</h4>
                </div>
            ))}
        </div>
    )
}