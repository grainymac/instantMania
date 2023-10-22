import React from 'react'
import { useParams } from 'react-router-dom'
import { polaroidFilmData } from '../../data/polaroidFilmData'
import { Footer } from '../Components/Footer'

export const DetailsPage = () => {

    const film = polaroidFilmData

    const { id } = useParams()

    const selectedElement = film.find(el => el.id === parseInt(id))

    if (!selectedElement) {
        return <div>Details not found!</div>
    }

    return (
        <>
            <div>
                <h3>{selectedElement.title}</h3>
                <p>{selectedElement.details}</p>
            </div>
            <Footer />
        </>
    )
}