import React, { useState } from 'react'
import './instantFilm.css'
import { polaroidFilmData } from '../../data/polaroidFilmData'

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

    const [selectedCard, setSelectedCard] = useState(null)

    const openModal = (id) => {
        setSelectedCard(id)
    }

    const closeModal = () => {
        setSelectedCard(null)
    }

    return (
        <>
            <h2 className="instant-card-title">Polaroid Film & Frames</h2>
            <div className='polaroid-film-frame-container'>
                {film.map(({ id, title, image, details }) => (
                    <div key={id} className='polaroid-card-details' onClick={() => openModal(id)}>
                        <img className='polaroid-card-image' src={image} alt='polaroid' />
                        <h4 className='polaroid-card-title'>{title}</h4>
                    </div>
                ))}
            </div>

            {selectedCard !== null && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        {/* Render details for the selected card */}
                        <h2>{film[selectedCard].title}</h2>
                        <p>{film[selectedCard].details}</p>
                        {/* Add any other details you want to display */}
                    </div>
                </div>
            )}


            <h2 className="title">Instax Film & Frames</h2>
            <div className="film-card-container">
                <p>coming soon!</p>
            </div>

        </>
    )
} 