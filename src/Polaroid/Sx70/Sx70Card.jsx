import React from 'react'
import { polaroidSx70Film } from './polaroidSx70Film'
import './sx70.css'
import { Link } from 'react-router-dom'


export const Sx70Card = () => {
    const film = polaroidSx70Film

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
        <div className='sx70Card-container'>
            {film.map(({ id, type, title, image, link }) => (
                <Link to={link}>
                    <div key={id} className='sx70Card'>
                        <img className='sx70Image' src={image} alt='polaroid' />
                        <h4 className='sx70Title'>{title}</h4>
                    </div>
                </Link>
            ))}
        </div>
    )
}