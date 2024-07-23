import React from 'react'
import { Link } from 'react-router-dom'
import { polaroidGoFilm } from './polaroidGoFilm'
import './go.css'


export const GoCard = () => {
    const film = polaroidGoFilm

    film.sort((a, b) => {
        const titleA = a.title.toLowerCase()
        const titleB = b.title.toLowerCase()

        if (titleA < titleB) {
            return -1
        }
        if (titleA > titleB) {
            return 1
        }
        return 0
    })
    
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