import React from 'react'
import { Link } from 'react-router-dom'
import { polaroid600Film } from '../../data/polaroid600Film'
import { motion } from 'framer-motion'


export const PolaroidCard = () => {
    const film = polaroid600Film

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
        <div className='polaroidCard-container'>
            {film.map(({ id, type, title, image, link }) => (
                <Link to={link}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='motion'>
                        <div key={id} className='polaCard'>
                            <img className='polaImage' src={image} alt='polaroid' />
                            <h4 className='polaTitle'>{title}</h4>
                        </div>
                    </motion.button>
                </Link>
            ))}
        </div>
    )
}