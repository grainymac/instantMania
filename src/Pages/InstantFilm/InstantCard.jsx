import React from 'react'
import './instantFilm.css'
import { polaroidFilmData } from '../../data/polaroidFilmData'

export const InstantCard = () => {
    const film = polaroidFilmData

    return (
        <>
            <h2 className="instant-card-title">Polaroid Film & Frames</h2>
            <div className='polaroid-film-frame-container'>
                {film.map(({ id, title, image }) => (
                    <div key={id} className='polaroid-card-details'>
                        <img className='polaroid-card-image' src={image} alt='polaroid' />
                        <h4 className='polaroid-card-title'>{title}</h4>
                    </div>
                ))}
            </div>
            <h2 className="title">Instax Film & Frames</h2>
            <div className="film-card-container">
                    <p>coming soon!</p>
            </div>

        </>
    )
} 