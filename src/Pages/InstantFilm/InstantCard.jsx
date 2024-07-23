import React from 'react'
import './instantFilm.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const InstantCard = () => {
    /*
    const film = polaroidFilmData.slice()

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
        */

    return (
        <>
            <div className='polaroid-film-frame-container'>
                {film.map(({ id, link, title, image, details }) => (
                    <Link to={link}>
                        <motion.button className='motion-button' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <div key={id} className='polaroid-card-details'>
                                <img className='polaroid-card-image' src={image} alt='polaroid' />
                                <h4 className='polaroid-card-title'>{title}</h4>
                            </div>
                        </motion.button>
                    </Link>
                ))}
            </div>
        </>
    )
} 