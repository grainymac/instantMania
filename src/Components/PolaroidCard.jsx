import React from 'react'
import { Link } from 'react-router-dom'
import { polaroid600Film } from '../data/polaroid600Film'
import { motion } from 'framer-motion'

const film = polaroid600Film

export const PolaroidCard = () => {
    return (
        <div className='polaroidCard-container'>
            {film.map(({ id, type, title, image, url }) => (
                <Link to={url}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <div key={id} className='polaCard'>
                            <img className='polaImage' src={image} alt='polaroid' />
                            <h4 className='polaTitle'>{title}</h4>
                            <small>{type}</small>
                        </div>
                    </motion.button>
                </Link>
            ))}
        </div>
    )
}