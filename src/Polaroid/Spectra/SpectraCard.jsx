import React from 'react'
import { Link } from 'react-router-dom'
import { polaroidSpectraFilm } from './polaroidSpectraFilm'
import './spectra.css'


export const SpectraCard = () => {
    const film = polaroidSpectraFilm

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
        <div className='spectraCard-container'>
            {film.map(({ id, type, title, image, link }) => (
                <Link to={link}>
                    <div key={id} className='spectraCard'>
                        <img className='spectraImage' src={image} alt='polaroid' />
                        <h4 className='spectraTitle'>{title}</h4>
                    </div>
                </Link>
            ))}
        </div>
    )
}