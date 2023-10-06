import React from 'react'
import './styles.css'
import film from '../../polaroidFilm/bnwPolaroid/IMG_6356.jpg'

export const Skateistan = () => {

    return (
        <div className='film-page-container'>
            <h1>Skateistan Edition</h1>
            <div className='detail-container'>
                <img src={film} alt='polaroid film' />
                <aside className='text-container'>
                    <p>
                    Skateistan and The Impossible Project have collaborated to release a limited edition film for Polaroid 600-type cameras featuring a geometric, Afghan textile-inspired design at the bottom of each polaroid. A portion of the sales from these packs supports Skateistan\'s philanthropic initiatives in Afghanistan, Cambodia, and Johannesburg, South Africa, aimed at providing education and opportunities for vulnerable children through skateboarding. The CEO of The Impossible Project, Oskar Smolokowski, expressed enthusiasm for the positive impact of their collaboration with Skateistan and highlighted the importance of providing hope and opportunities to children in challenging environments. Skateistan\'s founder, Oliver Percovich, emphasized the project\'s potential to introduce their mission to a wider audience through Polaroid cameras\' global popularity.
                    </p>
                    <small>
                        <b>Film Type:</b> Black & White
                    </small>
                    <small>
                        <b>Compatible Cameras:</b> 600 amd i-Type cameras
                    </small>
                </aside>
            </div>
        </div>
    )
}