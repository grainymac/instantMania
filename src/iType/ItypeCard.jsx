import React from 'react'
import { Link } from 'react-router-dom'
import { polaroidItypeFilm } from './polaroidItypeFilm'
import './itype.css'

const film = polaroidItypeFilm

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

export const ItypeCard = () => {
    return (
        <div className='itypeCard-container'>
            {film.map(({ id, type, title, image, link }) => (
                <Link to={link}>
                    <div key={id} className='itypeCard'>
                        <img className='itypeImage' src={image} alt='polaroid' />
                        <h4 className='itypeTitle'>{title}</h4>
                    </div>
                </Link>
            ))}
        </div>
    )
}