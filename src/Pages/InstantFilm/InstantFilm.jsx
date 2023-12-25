import React from 'react'
import './instantFilm.css'
import { InstantCard } from './InstantCard'
import { InstaxCard } from '../Instax/InstaxCard'

export const InstantFilm = () => {
  return (
    <>
      <div className='instant-film-container'>
        <h2 className="instant-card-title">Polaroid Film & Frames</h2>
        <div className='instant-card-film-container'>
          <InstantCard />
        </div>

        <h2 className="instant-card-title">Instax Film & Frames</h2>
        <div className='instax-card-film-container'>
          <InstaxCard />
        </div>
      </div>
    </>
  )
}

