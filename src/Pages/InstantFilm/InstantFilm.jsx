import React from 'react'
import './instantFilm.css'
import { InstantHero } from './InstantHero'
import { InstantCard } from './InstantCard'

export const InstantFilm = () => {
  return (
      <div className='instant-film-container'>
        <InstantHero />
        <div className='instant-card-film-container'>
          <InstantCard />
        </div>
      </div>
  )
}

