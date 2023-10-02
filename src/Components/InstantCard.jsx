import React from 'react'
import { polaroidFilmData } from '../data/polaroidFilmData'

export const InstantCard = () => {
    
    const film = polaroidFilmData
    return (
        <div className="card-container">
            <h2 className="title">Polaroid Film & Frames</h2>
            {film.map(({ id, title, image }) => (
                <div key={id} className='polaroid-card-container'>
                    <img className='film-image' src={image} alt='polaroid' />
                    <h4 className='film-title'>{title}</h4>
                </div>
            ))}
            <h2 className="title">Instax Film & Frames</h2>
            <div className="film-card-container">
            </div>

        </div>
    )
} 