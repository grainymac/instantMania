import React, { useState } from 'react'
import './instantFilm.css'
import { polaroidFilmData } from '../../data/polaroidFilmData'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '../../Components/Modal'

export const InstantCard = () => {
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

    const [modalOpen, setModalOpen] = useState(false)

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    return (
        <>
            <h2 className="instant-card-title">Polaroid Film & Frames</h2>
            <div className='polaroid-film-frame-container'>
                {film.map(({ id, title, image, details }) => (
                    <div key={id} className='polaroid-card-details'>
                        <img className='polaroid-card-image' src={image} alt='polaroid' />
                        <h4 className='polaroid-card-title'>{title}</h4>
                        <motion.button className='details-button' onClick={() => (modalOpen ? close() : open())} whileTap={{ scale: 0.9 }}>
                            Details
                        </motion.button>

                        <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
                            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
                        </AnimatePresence>
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